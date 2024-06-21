<script setup lang="ts">
import { toRefs, ref, computed } from 'vue'
import type { VideoProps } from './type'
import { clsx } from 'clsx'
import { formatTime } from '../../utils/formatTime'

const props = withDefaults(defineProps<VideoProps>(), {})
const { src, cover, duration, style, videoRef: outerVideoRef, ...other } = toRefs(props)

const emit = defineEmits(['click', 'cover-load'])

const wrapperRef = ref<HTMLDivElement>()
const localVideoRef = ref<HTMLVideoElement>()
const videoRef = ref(outerVideoRef?.value || localVideoRef.value)

const isPlayed = ref(false)
const paused = ref(true)

function handleClick(e: MouseEvent) {
  isPlayed.value = true
  const video = videoRef.value

  if (video) {
    if (video.ended || video.paused) {
      video.play()
    } else {
      video.pause()
    }
  }
  emit('click', paused, e)
}

function handlePlay() {
  paused.value = true
}

function handlePause() {
  paused.value = true
}

const hasCover = computed(() => !isPlayed.value && !!cover)
const hasDuration = computed(() => hasCover.value && !!duration)

defineExpose({
  wrapperRef
})
</script>

<template>
  <div
    :class="clsx('Video', `Video--${paused ? 'paused' : 'playing'}`)"
    :style="style"
    ref="wrapperRef"
  >
    <img
      class="Video-cover"
      :src="cover"
      @load="emit('cover-load', $event)"
      alt=""
      v-if="hasCover"
    />
    <span v-if="hasDuration" class="Video-duration">{{ formatTime(Number(duration) || 0) }}</span>
    <video
      class="Video-video"
      :src="src"
      ref="videoRef"
      :hidden="hasCover"
      controls
      @play="handlePlay"
      @pause="handlePause"
      @ended="handlePause"
      v-bind="{ ...other }"
    >
      <slot></slot>
    </video>

    <button
      v-if="hasCover"
      :class="clsx('Video-playBtn', { paused })"
      type="button"
      @click="handleClick"
    >
      <span class="Video-playIcon" />
    </button>
  </div>
</template>

<style scoped></style>
