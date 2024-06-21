<template>
  <div :class="clsx('CardText', className)" v-bind="{ ...other }">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { clsx } from 'clsx'
import { toRefs } from 'vue'
import type { CardTextProps } from './type'
const props = withDefaults(defineProps<CardTextProps>(), {})
const { className, ...other } = toRefs(props)
</script>

<style scoped></style>
