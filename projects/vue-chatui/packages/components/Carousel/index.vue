<script setup lang="ts">
import CarouselItem from './item.vue'
import { computed, onMounted, onUnmounted, ref, toRefs, watch } from 'vue'
import { clsx } from 'clsx'
import canUse from '../../utils/canUse'
import { setTransform, setTransition } from '../../utils/style'
import type { CarouselProps, State } from './type'
const formElements = ['TEXTAREA', 'OPTION', 'INPUT', 'SELECT']
const canTouch = canUse('touch')

const props = withDefaults(defineProps<CarouselProps>(), {
  startIndex: 0,
  draggable: true,
  duration: 300,
  easing: 'ease',
  threshold: 20,
  clickDragThreshold: 10,
  loop: true,
  rtl: false,
  autoplay: false,
  interval: 4000,
  dots: true
})
const emit = defineEmits(['change'])

const {
  className,
  startIndex,
  draggable,
  duration,
  easing,
  threshold,
  clickDragThreshold,
  loop,
  rtl,
  autoplay,
  interval,
  dots
} = toRefs(props)
const wrapperRef = ref<HTMLDivElement>(null!)
const innerRef = ref<HTMLDivElement>(null!)
const autoPlayTimerRef = ref<any>(null)

const count = wrapperRef.value.children.length
const itemWith = `${100 / count}%`

const state = ref<State>({
  first: true,
  wrapWidth: 0,
  hover: false,
  startX: 0,
  endX: 0,
  startY: 0,
  canMove: null,
  pressDown: false
})

const getIndex = (idx: number) => (loop.value ? idx % count : Math.max(0, Math.min(idx, count - 1)))

const activeIndex = ref(getIndex(startIndex.value))
const isDragging = ref(false)

const enableTransition = () =>
  setTransition(innerRef.value, `transform ${duration.value}ms ${easing.value}`)

const disableTransition = () => {
  setTransition(innerRef.value, 'transform 0s')
}

const moveX = (x: number) => {
  setTransform(innerRef.value, `translate3d(${x}px, 0, 0)`)
}

const slideTo = (idx: number, smooth?: boolean) => {
  const nextIndex = loop.value ? idx + 1 : idx
  const offset = (rtl.value ? 1 : -1) * nextIndex * state.value.wrapWidth

  if (smooth) {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        enableTransition()
        moveX(offset)
      })
    })
  } else {
    moveX(offset)
  }
}

const goTo = (idx: number) => {
  if (count <= 1) {
    return
  }

  const nextIndex = getIndex(idx)

  if (nextIndex !== activeIndex.value) {
    activeIndex.value = nextIndex
    // slideTo(nextIndex, loop);
  }
}

const prev = () => {
  if (count <= 1) {
    return
  }

  let nextIndex = activeIndex.value - 1

  if (loop.value) {
    if (nextIndex < 0) {
      const moveTo = count + 1
      const offset = (rtl.value ? 1 : -1) * moveTo * state.value.wrapWidth
      const dragDist = draggable.value ? state.value.endX - state.value.startX : 0

      disableTransition()
      moveX(offset + dragDist)
      nextIndex = count - 1
    }
  } else {
    nextIndex = Math.max(nextIndex, 0)
  }

  if (nextIndex !== activeIndex.value) {
    activeIndex.value = nextIndex
    // slideTo(nextIndex, loop);
  }
}

const next = () => {
  if (count <= 1) {
    return
  }

  let nextIndex = activeIndex.value + 1

  if (loop.value) {
    const isClone = nextIndex > count - 1
    if (isClone) {
      nextIndex = 0

      const dragDist = draggable.value ? state.value.endX - state.value.startX : 0

      disableTransition()
      moveX(dragDist)
    }
  } else {
    nextIndex = Math.min(nextIndex, count - 1)
  }

  if (nextIndex !== activeIndex.value) {
    activeIndex.value = nextIndex
    // slideTo(nextIndex, loop);
  }
}

const doAutoPlay = () => {
  if (!autoplay.value || state.value.hover) {
    return
  }

  autoPlayTimerRef.value = setTimeout(() => {
    enableTransition()
    next()
  }, interval.value)
}

const clearAutoPlay = () => {
  clearTimeout(autoPlayTimerRef.value)
}

const resetToCurrent = () => {
  slideTo(activeIndex.value, true)
  doAutoPlay()
}

const resetDrag = () => {
  state.value.startX = 0
  state.value.endX = 0
  state.value.startY = 0
  state.value.canMove = null
  state.value.pressDown = false
}

const dragStart = (e: DragEvent) => {
  if (formElements.includes((e.target as Element).nodeName)) {
    return
  }

  e.preventDefault()
  e.stopPropagation()

  const ev = 'touches' in e ? e.touches[0] : e

  state.value.pressDown = true
  state.value.startX = ev.pageX
  state.value.startY = ev.pageY

  clearAutoPlay()
}

const dragMove = (e: DragEvent) => {
  e.stopPropagation()

  const ev = 'touches' in e ? e.touches[0] : e

  if (state.value.pressDown) {
    if ('touches' in e) {
      if (state.value.canMove === null) {
        state.value.canMove =
          Math.abs(state.value.startY - ev.pageY) < Math.abs(state.value.startX - ev.pageX)
      }
      if (!state.value.canMove) {
        return
      }
    }

    e.preventDefault()
    disableTransition()

    state.value.endX = ev.pageX

    const nextIndex = loop.value ? activeIndex.value + 1 : activeIndex.value
    const nextOffset = nextIndex * state.value.wrapWidth
    const dragOffset = state.value.endX - state.value.startX

    if (!isDragging.value && Math.abs(dragOffset) > clickDragThreshold.value) {
      isDragging.value = true
    }

    // 阻尼
    // if ((activeIndex === 0 && dragOffset > 0) || (activeIndex === count - 1 && dragOffset < 0)) {
    //   dragOffset *= 0.35;
    // }

    const offset = rtl.value ? nextOffset + dragOffset : dragOffset - nextOffset
    moveX(offset)
  }
}

const dragEnd = (e: DragEvent) => {
  e.stopPropagation()

  state.value.pressDown = false
  isDragging.value = false
  enableTransition()
  if (state.value.endX) {
    updateAfterDrag()
  } else {
    // when clicked
    doAutoPlay()
  }
  resetDrag()
}

const onMouseEnter = () => {
  state.value.hover = true
  clearAutoPlay()
}

const onMouseLeave = (e: MouseEvent) => {
  state.value.hover = false

  if (state.value.pressDown) {
    state.value.pressDown = false
    state.value.endX = e.pageX

    enableTransition()
    updateAfterDrag()
    resetDrag()
  }

  doAutoPlay()
}

const handleClickDot = (e: MouseEvent) => {
  const { slideTo: i } = e.currentTarget.dataset
  if (i) {
    const idx = parseInt(i, 10)
    goTo(idx)
  }
  e.preventDefault()
}

const updateAfterDrag = () => {
  const offset = (rtl.value ? -1 : 1) * (state.value.endX - state.value.startX)
  const offsetDist = Math.abs(offset)
  const isClone1 = offset > 0 && activeIndex.value - 1 < 0
  const isClone2 = offset < 0 && activeIndex.value + 1 > count - 1

  if (isClone1 || isClone2) {
    if (loop.value) {
      if (isClone1) {
        prev()
      } else {
        next()
      }
    } else {
      resetToCurrent()
    }
  } else if (offset > 0 && offsetDist > threshold.value && count > 1) {
    prev()
  } else if (offset < 0 && offsetDist > threshold.value && count > 1) {
    next()
  } else {
    resetToCurrent()
  }
}

function handleResize() {
  state.value.wrapWidth = wrapperRef.value.offsetWidth
  slideTo(activeIndex.value)
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  clearAutoPlay()
})

watch(activeIndex, () => {
  if (state.value.first) {
    handleResize()
  }
  if (!state.value.first) {
    emit('change', activeIndex.value)
  }
  if (state.value.first) {
    slideTo(activeIndex.value)
    state.value.first = false
  } else {
    slideTo(activeIndex.value, true)
  }
  doAutoPlay()
})

watch(autoplay, () => {
  doAutoPlay()
})
let events

if (draggable.value) {
  events = canTouch
    ? {
        onTouchStart: dragStart,
        onTouchMove: dragMove,
        onTouchEnd: dragEnd
      }
    : {
        onMouseDown: dragStart,
        onMouseMove: dragMove,
        onMouseUp: dragEnd,
        onMouseEnter,
        onMouseLeave
      }
} else {
  events = {
    onMouseEnter,
    onMouseLeave
  }
}

const classNameList = computed(() => {
  return clsx(
    'Carousel',
    {
      'Carousel--draggable': draggable.value,
      'Carousel--rtl': rtl,
      'Carousel--dragging': isDragging
    },
    className
  )
})

defineExpose({
  goTo,
  prev,
  next,
  wrapperRef
})
const slots = defineSlots()
</script>

<template>
  <div :class="classNameList" ref="wrapperRef" v-on="{ ...events }">
    <div class="Carousel-inner" :style="{ width: `${loop ? count + 2 : count}00%` }" ref="innerRef">
      <CarouselItem :width="itemWith" v-if="loop"> </CarouselItem>

      <CarouselItem :width="itemWith" v-for="(item, index) in slots" :key="index">
        {item}
      </CarouselItem>

      <CarouselItem :width="itemWith" v-if="loop"
        >{React.Children.toArray(children)[0]}</CarouselItem
      >
    </div>

    <ol class="Carousel-dots" v-if="dots">
      <li v-for="(item, i) in 6" :key="i">
        <button
          :class="clsx('Carousel-dot', { active: activeIndex === i })"
          type="button"
          :aria-label="`Go to slide ${i + 1}`"
          :data-slide-to="i"
          @click="handleClickDot"
        />
      </li>
    </ol>
  </div>
</template>

<style scoped></style>
