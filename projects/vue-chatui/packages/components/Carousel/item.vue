<script setup lang="ts">
import type { CarouselItemProps } from './type'

const props = withDefaults(defineProps<CarouselItemProps>(), {})
</script>

<template>
  <div class="Carousel-item" :style="{ width: props.width }">
    <slot></slot>
  </div>
</template>

<style scoped></style>
