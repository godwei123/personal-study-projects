<template>
  <div
    :class="clsx('Skeleton', r && `Skeleton--r-${r}`, className)"
    :style="{ ...style, width: w, height: h, marginBottom: mb }"
  />
</template>

<script setup lang="ts">
import { toRefs } from 'vue'
import type { SkeletonProps } from './type'
import clsx from 'clsx'

const props = withDefaults(defineProps<SkeletonProps>(), {})
const { className, w, h, mb, r, style } = toRefs(props)
</script>

<style scoped></style>
