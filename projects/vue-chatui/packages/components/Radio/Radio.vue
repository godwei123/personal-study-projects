<template>
  <label
    :class="
      clsx('Radio', className, {
        'Radio--checked': checked,
        'Radio--disabled': disabled
      })
    "
  >
    <input
      type="radio"
      class="Radio-input"
      :checked="checked"
      :disabled="disabled"
      @change="emit('change', $event)"
      v-bind="{ ...other }"
    />
    <span class="Radio-text">{{ label }}</span>
  </label>
</template>

<script setup lang="ts">
import type { RadioProps } from './type'
import { toRefs } from 'vue'
import { clsx } from 'clsx'

const props = withDefaults(defineProps<RadioProps>(), {})
const { className, label, checked, disabled, ...other } = toRefs(props)
const emit = defineEmits(['change'])
</script>

<style scoped></style>
