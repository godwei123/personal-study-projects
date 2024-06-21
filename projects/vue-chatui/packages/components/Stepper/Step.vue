<template>
  <li
    :class="
      clsx('Step', {
        'Step--active': active,
        'Step--completed': completed,
        'Step--disabled': disabled
      })
    "
    :data-status="status"
    v-bind="{ ...other }"
  >
    <div class="Step-icon">
      <template v-if="status">
        <Icon type="check-circle-fill" v-if="status === 'success'" />
        <Icon type="warning-circle-fill" v-else-if="status === 'fail'" />
        <Icon type="dash-circle-fill" v-else-if="status === 'abort'" />
      </template>
      <div v-else class="Step-dot" />
    </div>
    <div class="Step-line" />
    <div class="Step-content">
      <template v-if="title">
        <div class="Step-title">
          <span>{title}</span>
          <small v-if="subTitle">{subTitle}</small>
        </div>
      </template>
      <div v-if="desc" class="Step-desc">{desc}</div>
      <slot />
    </div>
  </li>
</template>

<script setup lang="ts">
import type { StepProps } from './type'
import clsx from 'clsx'
import { toRefs } from 'vue'

const props = withDefaults(defineProps<StepProps>(), {
  active: false,
  completed: false,
  disabled: false
})
const { active, completed, disabled, status, index, title, subTitle, desc, ...other } =
  toRefs(props)
</script>

<style scoped></style>
