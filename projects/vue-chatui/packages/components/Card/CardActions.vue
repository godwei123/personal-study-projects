<template>
  <div
    :class="clsx('CardActions', className, direction && `CardActions--${direction}`)"
    v-bind="{ ...other }"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'
import type { CardActionsProps } from './type'
import clsx from 'clsx'

const props = withDefaults(defineProps<CardActionsProps>(), {})
const { className, direction, ...other } = toRefs(props)
</script>

<style scoped></style>
