<script setup lang="ts">
import type { ListProps } from './type'
import { toRefs } from 'vue'
import { clsx } from 'clsx'

const props = withDefaults(defineProps<ListProps>(), {
  bordered: false
})
const { bordered } = toRefs(props)
</script>

<template>
  <div :class="clsx('List', { 'List--bordered': bordered })" role="list">
    <slot></slot>
  </div>
</template>

<style scoped></style>
