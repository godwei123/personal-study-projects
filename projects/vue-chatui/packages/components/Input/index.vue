<script setup lang="ts">
import clsx from 'clsx'
import { computed, inject, ref } from 'vue'
import type { InputProps } from './type'
const props = withDefaults(defineProps<InputProps>(), {
  type: 'text',
  rows: 1,
  maxRows: 5
})
const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    emit('update:modelValue', val)
  }
})
const {
  type,
  variant: oVariant,
  rows: oRows = 1,
  minRows = 1,
  maxRows = 5,
  maxLength,
  multiline,
  autoSize,
  modelValue,
  ...other
} = props

const lineHeight = ref(21)
const theme = inject('theme', '')
const variant = computed(() => oVariant || (theme === 'light' ? 'flushed' : 'outline'))
const isMultiline = computed(() => multiline || autoSize || oRows > 1)
const Element = computed(() => (isMultiline.value ? 'textarea' : 'input'))
const showCount = computed(() => !!maxLength)
const rows = computed(() => {
  let initialRows = oRows
  if (initialRows < minRows) {
    initialRows = minRows
  } else if (initialRows > maxRows) {
    initialRows = maxRows
  }
  return initialRows
})
function getCount(value: string | number = '', maxLength?: number) {
  return `${`${value}`.length}${maxLength ? `/${maxLength}` : ''}`
}
</script>

<template>
  <component
    :is="Element"
    :class="clsx('Input', `Input--${variant}`)"
    :type="type"
    :maxLength="maxLength"
    ref="inputRef"
    :rows="rows"
    v-model="value"
    v-bind="{ ...other }"
  />
  <div v-if="showCount" :class="clsx('InputWrapper', { 'has-counter': showCount })">
    <div class="Input-counter">{{ getCount(value, maxLength) }}</div>
  </div>
</template>

<style scoped></style>
