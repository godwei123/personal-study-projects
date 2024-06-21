<template>
  <Base
    baseClass="Modal"
    :btnVariant="!props.vertical ? undefined : 'outline'"
    v-bind="{ ...props }"
  />
</template>

<script setup lang="ts">
import type { ModalProps } from './type'
import Base from './Base.vue'
const props = withDefaults(defineProps<ModalProps>(), {
  vertical: false
})
</script>

<style scoped></style>
