<template>
  <div :class="clsx('Recorder', { 'Recorder--cancel': isCancel })" ref="btnRef">
    <Flex class="RecorderToast" direction="column" center v-if="status !== 'inited'">
      <div class="RecorderToast-waves" :hidden="status !== 'recording'" :style="wavesStyle">
        <Icon class="RecorderToast-wave-1" type="hexagon" />
        <Icon class="RecorderToast-wave-2" type="hexagon" />
        <Icon class="RecorderToast-wave-3" type="hexagon" />
      </div>
      <Icon class="RecorderToast-icon" :type="isCancel ? 'cancel' : 'mic'" />
      <span>{{ isCancel ? 'release2cancel' : 'releaseOrSwipe' }}}</span>
    </Flex>
    <div class="Recorder-btn" role="button" aria-label="hold2talk">
      <span>{trans(btnTextMap[status])}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, toRefs } from 'vue'
import clsx from 'clsx'
import { Flex } from '../Flex'
import Icon from '../Icon'
// import { useLocale } from '../ConfigProvider';
import canUse from '../../utils/canUse'
import type { ButtonTextMap, RecorderProps } from './type'

const props = withDefaults(defineProps<RecorderProps>(), {})
const emit = defineEmits(['start', 'end', 'cancel'])
const { volume } = toRefs(props)
const status = ref('inited')

// const { trans } = useLocale('Recorder')

const canPassive = canUse('passiveListener')
const listenerOpts = canPassive ? { passive: true } : false
const listenerOptsWithoutPassive = canPassive ? { passive: false } : false
const MOVE_INTERVAL = 80
const btnRef = ref()
const wrapper = ref(btnRef)
const btnTextMap: ButtonTextMap = {
  inited: 'hold2talk',
  recording: 'release2send',
  willCancel: 'release2send'
}

let ts = 0
let startY = 0

const isCancel = computed(() => status.value === 'willCancel')
const wavesStyle = computed(() => ({ transform: `scale(${(volume.value || 1) / 100 + 1})` }))

function handleTouchStart(e: TouchEvent) {
  if (e.cancelable) {
    e.preventDefault()
  }
  const touch0 = e.touches[0]
  startY = touch0.pageY
  ts = Date.now()

  status.value = 'recording'
  emit('start')
}

function handleTouchMove(e: TouchEvent) {
  if (!ts) return
  const nowY = e.touches[0].pageY
  const isCancel = startY - nowY > MOVE_INTERVAL
  status.value = isCancel ? 'willCancel' : 'recording'
}

//
// const doEnd = useCallback(() => {
//   const duration = Date.now() - ts;
//   if (onEnd) {
//     onEnd({ duration });
//   }
// }, [onEnd]);

function handleTouchEnd(e: TouchEvent) {
  if (!ts) return
  const endY = e.changedTouches[0].pageY
  const isRecording = startY - endY < MOVE_INTERVAL
  status.value = 'inited'
  if (isRecording) {
    emit('end')
  } else {
    emit('cancel')
  }
}

onMounted(() => {
  wrapper.value.addEventListener('touchstart', handleTouchStart, listenerOptsWithoutPassive)
  wrapper.value.addEventListener('touchmove', handleTouchMove, listenerOpts)
  wrapper.value.addEventListener('touchend', handleTouchEnd)
  wrapper.value.addEventListener('touchcancel', handleTouchEnd)
})

onUnmounted(() => {
  wrapper.value.removeEventListener('touchstart', handleTouchStart)
  wrapper.value.removeEventListener('touchmove', handleTouchMove)
  wrapper.value.removeEventListener('touchend', handleTouchEnd)
  wrapper.value.removeEventListener('touchcancel', handleTouchEnd)
})

defineExpose({
  stop: () => {
    status.value = 'inited'
    emit('end')
    ts = 0
  }
})
</script>
