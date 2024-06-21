<template>
  <teleport to="body" v-if="didMount">
    <div
      :class="clsx(baseClass, className, { active: isShow })"
      :tabIndex="-1"
      :data-elder-mode="configCtx.elderMode"
      ref="wrapperRef"
    >
      {backdrop && (
      <Backdrop
        :active="isShow"
        @click="backdrop === true ? emit('backdrop-click') || emit('close') : undefined"
      />
      )}
      <div
        :class="clsx(`${baseClass}-dialog`, { 'pb-safe': isPopup && !actions })"
        :data-bg-color="bgColor"
        :data-height="isPopup && height ? height : undefined"
        role="dialog"
        :aria-labelledby="titleId"
        aria-modal
      >
        <div :class="`${baseClass}-content`">
          <div :class="`${baseClass}-header`">
            <h5 :class="`${baseClass}-title`" :id="titleId">
              {{ title }}
            </h5>
            <IconButton
              v-if="showClose"
              :class="`${baseClass}-close`"
              icon="close"
              size="lg"
              @click="emit('close')"
              aria-label="关闭"
            />
          </div>
          <div :class="clsx(`${baseClass}-body`, { overflow })">
            <slot></slot>
          </div>

          <div
            v-if="actions"
            :class="`${baseClass}-footer ${baseClass}-footer--${vertical ? 'v' : 'h'}`"
            :data-variant="btnVariant || 'round'"
          >
            <Button
              v-if="item in actions"
              size="lg"
              :block="isPopup"
              :variant="btnVariant"
              v-bind="{ ...item }"
              :key="item.label"
            />
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { clsx } from 'clsx'
import { useMount } from '../../hooks/useMount'
import Backdrop from '../Backdrop'
import IconButton from '../IconButton'
import Button from '../Button'
import useNextId from '../../hooks/useNextId'
import toggleClass from '../../utils/toggleClass'
import { inject, nextTick, onUnmounted, ref, toRefs, watch } from 'vue'
import type { ModalProps } from './type'
import { configCtxSymbol } from '../../utils/constant'

const wrapperRef = ref<HTMLDivElement>(null)
const props = withDefaults(defineProps<ModalProps>(), {
  showClose: true,
  autoFocus: true,
  backdrop: true,
  vertical: true
})
const emit = defineEmits(['close', 'backdrop-click'])
function clearModal() {
  if (!document.querySelector('.Modal') && !document.querySelector('.Popup')) {
    toggleClass('S--modalOpen', false)
  }
}

const {
  baseClass,
  active,
  className,
  title,
  showClose,
  autoFocus,
  backdrop,
  height,
  overflow,
  actions,
  vertical,
  btnVariant,
  bgColor
} = toRefs(props)

const mid = useNextId('modal-')
const titleId = props.titleId || mid.value
const configCtx = inject(configCtxSymbol)

const { didMount, isShow } = useMount({ active, ref: wrapperRef })

watch(autoFocus, () => {
  nextTick(() => {
    if (autoFocus.value && wrapperRef.value) {
      wrapperRef.value.focus()
    }
  })
})
watch(isShow, () => {
  if (isShow.value) {
    toggleClass('S--modalOpen', isShow.value)
  }
})
watch([active, didMount], () => {
  if (!active.value && !didMount.value) {
    clearModal()
  }
})

onUnmounted(() => {
  clearModal()
})

const isPopup = baseClass.value === 'Popup'

defineExpose({
  wrapperRef
})
</script>

<style scoped></style>
