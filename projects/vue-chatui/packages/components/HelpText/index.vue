<script setup lang="ts">
import type { HelpTextProps } from './type'

const props = withDefaults(defineProps<HelpTextProps>(), {})
</script>

<template>
  <div class="HelpText" v-bind="{ ...props }">
    <slot></slot>
  </div>
</template>

<style scoped></style>
