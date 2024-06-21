<template>
  <div
    :class="
      clsx(
        'ScrollView',
        {
          'ScrollView--fullWidth': fullWidth,
          'ScrollView--x': scrollX,
          'ScrollView--hasControls': hasControls
        },
        className
      )
    "
    ref="wrapperRef"
    v-bind="{ ...other }"
  >
    <IconButton
      v-if="hasControls"
      class="ScrollView-control"
      icon="chevron-left"
      aria-label="Previous"
      @click="handlePrev"
    />

    <div class="ScrollView-scroller" ref="scrollerRef" @scroll="emit('scroll')">
      <div class="ScrollView-inner">
        <Item
          v-for="(item, i) in data"
          :item="item"
          :effect="item.effect || effect"
          @intersect="onIntersect"
          :key="getItemKey(item, i)"
        >
          {{ renderItem(item, i) }}
        </Item>
        <Item item="" :effect="effect" @intersect="onIntersect">
          <slot></slot>
        </Item>
      </div>
    </div>

    <IconButton
      v-if="hasControls"
      className="ScrollView-control"
      icon="chevron-right"
      aria-label="Next"
      @click="handleNext"
    />
  </div>
</template>
<script setup lang="ts">
import clsx from 'clsx'
import Item from './Item'
import IconButton from '../IconButton'
import canUse from '../../utils/canUse'
import { ref, toRefs, watch } from 'vue'
import type { ScrollViewProps } from './type'

const hasControls = !canUse('touch')

const props = withDefaults(defineProps<ScrollViewProps>(), {})
const emit = defineEmits(['scroll'])

const {
  className,
  fullWidth,
  scrollX = true,
  effect = 'slide',
  data,
  itemKey,
  renderItem,
  onIntersect,
  ...other
} = toRefs(props)

const wrapperRef = ref<HTMLDivElement>(null)
const scrollerRef = ref<HTMLDivElement>(null)

function handlePrev() {
  const el = scrollerRef.value
  el.scrollLeft -= el.offsetWidth
}

function handleNext() {
  const el = scrollerRef.value
  el.scrollLeft += el.offsetWidth
}

const getItemKey = (item: any, index: number) => {
  let key
  if (itemKey) {
    key = typeof itemKey === 'function' ? itemKey(item, index) : item[itemKey]
  }
  return key || index
}

defineExpose({
  scrollTo: ({ x, y }: { x?: number; y?: number }) => {
    if (x != null) {
      scrollerRef.value.scrollLeft = x
    }
    if (y != null) {
      scrollerRef.value.scrollTop = y
    }
  },
  wrapperRef
})
</script>
