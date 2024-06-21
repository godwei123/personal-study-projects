<script setup lang="ts">
import type { FlexItemProps } from './type'
import { toRefs } from 'vue'
import { clsx } from 'clsx'

const props = withDefaults(defineProps<FlexItemProps>(), {})

const { flex, alignSelf, order, ...other } = toRefs(props)
</script>

<template>
  <div
    :class="clsx('FlexItem')"
    :style="{
      flex,
      alignSelf,
      order
    }"
    v-bind="{ ...other }"
  >
    <slot></slot>
  </div>
</template>

<style scoped></style>
