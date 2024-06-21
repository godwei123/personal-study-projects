<script setup lang="ts">
import { clsx } from 'clsx'
import { toRefs } from 'vue'
import type { TextProps } from './type'
const props = withDefaults(defineProps<TextProps>(), {
  as: 'div'
})
const { as, align, breakWord, truncate, ...other } = toRefs(props)

const ellipsis = Number.isInteger(truncate?.value)

const cls = clsx(align?.value && `Text--${align.value}`, {
  'Text--break': breakWord.value,
  'Text--truncate': typeof truncate?.value === 'boolean' && truncate.value,
  'Text--ellipsis': ellipsis
})

const style = ellipsis ? { WebkitLineClamp: truncate?.value } : null
</script>

<template>
  <component :is="as" :class="cls" :style="style" v-bind="{ ...other }">
    <slot></slot>
  </component>
</template>
