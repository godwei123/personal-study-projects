<script setup lang="ts">
import { toRefs } from 'vue'
import type { DividerProps } from './type'
import { clsx } from 'clsx'
const props = withDefaults(defineProps<DividerProps>(), {
  position: 'center'
})

const { className, position, ...other } = toRefs(props)
</script>

<template>
  <div
    :class="clsx('Divider', $slots.default && `Divider--text-${position}`, className)"
    role="separator"
    v-bind="{ ...other }"
  >
    <slot />
  </div>
</template>

<style scoped></style>
