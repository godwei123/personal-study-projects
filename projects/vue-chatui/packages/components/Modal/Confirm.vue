<template>
  <Base
    baseClass="Modal"
    :class="clsx('Confirm', className)"
    :showClose="false"
    :btnVariant="outline"
    :vertical="vertical"
    :actions="actions"
    v-bind="{ ...other }"
  />
</template>

<script setup lang="ts">
import { clsx } from 'clsx'
import Base from './Base'
import { ModalProps } from './type'
import { ButtonProps } from '../Button/type'
import { inject, toRefs } from 'vue'

const isPrimary = (btn: ButtonProps) => btn.color === 'primary'

const props = withDefaults(defineProps<ModalProps>(), {})
const { className, vertical: oVertical, actions, ...other } = toRefs(props)
const locale = inject(Locale, '')
const isZh = locale.includes('zh')
// 中文默认横排
const vertical = oVertical.value != null ? oVertical.value : !isZh

if (Array.isArray(actions)) {
  // 主按钮排序：横排主按钮在后，竖排主按钮在前
  actions.value.sort((a, b) => {
    if (isPrimary(a)) {
      return vertical ? -1 : 1
    }
    if (isPrimary(b)) {
      return vertical ? 1 : -1
    }
    return 0
  })
}
</script>

<style scoped></style>
