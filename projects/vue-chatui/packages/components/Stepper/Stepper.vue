<template>
  <ul :class="clsx('Stepper')" v-bind="{ ...other }">
    <slot></slot>
  </ul>
</template>

<script setup lang="ts">
import clsx from 'clsx'
import type { StepperProps, StepProps } from './type'
import { getCurrentInstance, toRefs } from 'vue'
const props = withDefaults(defineProps<StepperProps>(), {
  current: 0,
  inverted: false
})
const { current, status, inverted, ...other } = toRefs(props)
getCurrentInstance()
  ?.slots.default?.()
  .forEach((item, index) => {
    const state: StepProps = {
      index,
      active: false,
      completed: false,
      disabled: false
    }

    if (current.value === index) {
      state.active = true
      state.status = status?.value
    } else if (current.value > index) {
      state.completed = true
    } else {
      state.disabled = !inverted.value
      state.completed = inverted.value
    }

    item.props = {
      ...item.props,
      ...state
    }
  })
</script>

<style scoped></style>
