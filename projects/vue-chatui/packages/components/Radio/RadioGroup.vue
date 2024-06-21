<template>
  <div :class="clsx('RadioGroup', { 'RadioGroup--block': block }, className)">
    <Radio
      v-for="item in options"
      :label="item.label || item.value"
      :value="item.value"
      :name="name"
      :checked="value === item.value"
      :disabled="'disabled' in item ? item.disabled : disabled"
      @change="emit(item.value, e)"
      :key="item.value"
    />
  </div>
</template>

<script setup lang="ts">
import type { RadioGroupProps } from './type'
import { toRefs } from 'vue'
import { clsx } from 'clsx'
import Radio from './Radio.vue'

const props = withDefaults(defineProps<RadioGroupProps>(), {})
const { className, options, value, name, disabled, block } = toRefs(props)
const emit = defineEmits(['change'])
</script>

<style scoped></style>
