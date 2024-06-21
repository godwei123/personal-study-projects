<template>
  <component
    :is="url ? 'a' : 'span'"
    :class="clsx('Avatar', `Avatar--${size}`, `Avatar--${shape}`)"
    :href="url"
  >
    <slot>
      <img :src="src" :alt="alt" />
    </slot>
  </component>
</template>

<script setup lang="ts">
import type { AvatarProps } from './type'
import { toRefs } from 'vue'
import { clsx } from 'clsx'

const props = withDefaults(defineProps<AvatarProps>(), {
  size: 'md',
  shape: 'circle'
})
const { src, alt, url, size, shape } = toRefs(props)
</script>

<style scoped></style>
