<template>
  <div
    :class="
      clsx(
        'CardMedia',
        {
          'CardMedia--wide': aspectRatio === 'wide',
          'CardMedia--square': aspectRatio === 'square'
        },
        className
      )
    "
    :style="{ bgStyle }"
    v-bind="{ ...other }"
  >
    <Flex v-if="$slots" class="CardMedia-content" direction="column" center>
      <slot></slot>
    </Flex>
  </div>
</template>

<script setup lang="ts">
import { clsx } from 'clsx'
import { Flex } from '../Flex'
import { computed, toRefs } from 'vue'
import type { CardMediaProps } from './type'

const props = withDefaults(defineProps<CardMediaProps>(), {
  aspectRatio: 'square'
})

const { className, aspectRatio, color, image, ...other } = toRefs(props)

const bgStyle = computed(() => {
  return {
    backgroundColor: color || undefined,
    backgroundImage: typeof image === 'string' ? `url('${image.value}')` : undefined
  }
})
</script>

<style scoped></style>
