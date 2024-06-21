<template>
  <div
    :class="clsx('Card', size && `Card--${size}`, { 'Card--fluid': fluid }, className)"
    :data-fluid="fluid"
    :data-elder-mode="configCtx.elderMode"
    v-bind="{ ...other }"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import type { CardProps } from './type'
import { inject, toRefs } from 'vue'
import clsx from 'clsx'
import { configCtxSymbol } from '../../utils/constant'

const props = withDefaults(defineProps<CardProps>(), {})
const { className, size, fluid, ...other } = toRefs(props)
const configCtx = inject(configCtxSymbol) // todo
</script>

<style scoped></style>
