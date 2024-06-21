<template>
  <div :class="clsx('CardTitle', { 'CardTitle--center': center }, className)" v-bind="{ ...other }">
    <h5 class="CardTitle-title" v-if="title">{{ title }}</h5>
    <slot> </slot>
    <p class="CardTitle-subtitle" v-if="subtitle">{{ subtitle }}</p>
  </div>
</template>

<script setup lang="ts">
import { clsx } from 'clsx'
import { toRefs } from 'vue'
import type { CardTitleProps } from './type'
const props = withDefaults(defineProps<CardTitleProps>(), {})
const { className, title, subtitle, center, ...other } = toRefs(props)
</script>

<style scoped></style>
