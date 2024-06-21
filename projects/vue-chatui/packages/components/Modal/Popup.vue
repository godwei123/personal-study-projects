<template>
  <Base baseClass="Popup" overflow v-bind="{ ...props }" />
</template>

<script setup lang="ts">
import type { ModalProps } from './type'
import Base from './Base.vue'
const props = defineProps<ModalProps>()
</script>

<style scoped></style>
