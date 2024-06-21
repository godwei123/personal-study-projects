<script setup lang="ts">
import type { LabelProps } from './type'

const props = withDefaults(defineProps<LabelProps>(), {})
</script>

<template>
  <label class="Label" v-bind="{ ...props }">
    <slot></slot>
  </label>
</template>

<style scoped></style>
