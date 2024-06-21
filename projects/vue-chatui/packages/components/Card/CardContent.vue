<template>
  return (
  <div :class="clsx('CardContent', className)" v-bind="{ ...other }">
    <slot></slot>
  </div>
  );
</template>

<script setup lang="ts">
import type { CardContentProps } from './type'
import { toRefs } from 'vue'
import clsx from 'clsx'

const props = withDefaults(defineProps<CardContentProps>(), {})
const { className, ...other } = toRefs(props)
</script>

<style scoped></style>
