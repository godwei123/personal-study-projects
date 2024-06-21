<script setup lang="ts">
import type { BubbleProps } from './type'
import { ref, toRefs, computed } from 'vue'

const props = withDefaults(defineProps<BubbleProps>(), {
  type: 'text'
})
const { type, ...other } = toRefs(props)
const classNameList = computed(() => `Bubble ${type.value}`)
const bubbleRef = ref()
defineExpose({
  bubbleRef
})
</script>

<template>
  <div :class="classNameList" :data-type="type" :ref="bubbleRef" v-on="{ ...other }">
    <slot name="content"></slot>
    <slot></slot>
  </div>
</template>
