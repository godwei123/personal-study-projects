<script setup lang="ts">
import type { IconProps } from './type'
import { toRefs, computed } from 'vue'
import { clsx } from 'clsx'

const props = withDefaults(defineProps<IconProps>(), {})
const { type, spin, name, ...other } = toRefs(props)
const ariaProps = computed(() =>
  typeof name?.value === 'string' ? { 'aria-label': name.value } : { 'aria-hidden': true }
)
</script>

<template>
  <svg :class="clsx('Icon', { 'is-spin': spin })" v-bind="{ ...ariaProps, ...other }">
    <use :xlinkHref="`#icon-${type}`" />
  </svg>
</template>

<style scoped></style>
