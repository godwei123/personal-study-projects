<template>
  <select :class="clsx('Input Select', `Input--${variant}`, className)" v-bind="{ ...rest }">
    <option value="" v-if="placeholder">{placeholder}</option>
    <slot></slot>
  </select>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'
import type { SelectProps } from './type'
import { clsx } from 'clsx'

const props = withDefaults(defineProps<SelectProps>(), {
  variant: 'outline'
})
const { className, placeholder, variant, ...rest } = toRefs(props)
</script>
