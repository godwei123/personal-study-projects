<script setup lang="ts">
import { toRefs } from 'vue'
import type { ProgressProps } from './type'
import clsx from 'clsx'
const props = withDefaults(defineProps<ProgressProps>(), {})
const { value, status, ...other } = toRefs(props)
</script>

<template>
  <div :class="clsx('Progress', status && `Progress--${status}`)" v-bind="{ ...other }">
    <div
      class="Progress-bar"
      role="progressbar"
      :style="{ width: `${Math.min(value, 100)}%` }"
      :aria-valuenow="Math.min(value, 100)"
      :aria-valuemin="0"
      :aria-valuemax="100"
    >
      <slot></slot>
    </div>
  </div>
</template>

<style scoped></style>
