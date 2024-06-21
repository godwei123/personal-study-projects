<template>
  <button
    :class="classNameList"
    type="button"
    :disabled="disabled"
    @click="handleClick"
    v-on="{ ...other }"
  >
    <span class="Btn-icon" v-if="icon">
      <Icon :type="icon" :spin="loading" />
    </span>
    <slot>{{ label }}</slot>
  </button>
</template>

<script setup lang="ts">
import { computed, toRefs } from 'vue'
import type { ButtonProps } from './type'
import { clsx } from 'clsx'
import Icon from '../Icon/index.vue'

const props = withDefaults(defineProps<ButtonProps>(), {})
const emit = defineEmits(['click'])

const {
  disabled,
  loading,
  label,
  color,
  variant,
  size: oSize,
  icon: oIcon,
  block,
  ...other
} = toRefs(props)

const icon = computed(() => oIcon?.value || (loading.value && 'spinner'))
const size = computed(() => oSize?.value || (block.value ? 'lg' : ''))
function composeClass(type?: string) {
  return type && `Btn--${type}`
}
const classNameList = computed(() => {
  return clsx(
    'Btn',
    composeClass(color?.value),
    composeClass(variant?.value),
    composeClass(size.value),
    {
      'Btn--block': block.value
    }
  )
})

const handleClick = (e: any) => {
  if (!disabled.value && !loading.value) {
    emit('click', e)
  }
}
</script>
