<template>
  <img
    :class="clsx('Image', { 'Image--fluid': fluid }, className)"
    :src="src"
    ref="imgRef"
    v-bind="{ ...other }"
  />
</template>

<script setup lang="ts">
import type { ImageProps } from './type'
import { toRefs, ref, watch, onMounted, getCurrentInstance } from 'vue'
import { clsx } from 'clsx'

const props = withDefaults(defineProps<ImageProps>(), {})
const { className, src: oSrc, lazy, fluid, ...other } = toRefs(props)
const src = ref(lazy.value ? undefined : oSrc.value)
const imgRef = ref()
const savedSrc = ref('')
const lazyLoaded = ref(false)
const observer = ref()

onMounted(() => {
  imgRef.value = getCurrentInstance()?.parent
  observerImg()
})

watch([lazy, oSrc], () => {
  savedSrc.value = oSrc.value
  if (!lazy.value || lazyLoaded.value) {
    src.value = oSrc.value
  }
})

const observerImg = () => {
  if (!lazy.value) return undefined

  observer.value = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      src.value = savedSrc.value
      lazyLoaded.value = true
      observer.value.unobserve(entry.target)
    }
  })

  if (imgRef.value) {
    observer.value.observe(imgRef.value)
  }
}
watch([imgRef, lazy], () => observerImg())

onMounted(() => {
  observer.value?.disconnect()
})
</script>

<style scoped></style>
