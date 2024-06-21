<script setup lang="ts">
import type { TagProps } from './type'
import { computed, toRefs } from 'vue'
import { clsx } from 'clsx'

const props = withDefaults(defineProps<TagProps>(), {
  as: 'span'
})
const { as, color, ...other } = toRefs(props)
const classNameList = computed(() => clsx('Tag', color?.value && `Tag--${color.value}`))
</script>

<template>
  <component :is="as" :class="classNameList" v-bind="{ ...other }">
    <slot></slot>
  </component>
</template>

<style scoped></style>
