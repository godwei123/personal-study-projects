<script setup lang="ts">
import { toRefs } from 'vue'
import type { IconButtonProps } from './type'
import { clsx } from 'clsx'
import Button from '../Button'
import Icon from '../Icon'

const props = withDefaults(defineProps<IconButtonProps>(), {})
const { className, icon, img, ...other } = toRefs(props)
</script>

<template>
  <Button :class="clsx('IconBtn', className)" v-bind="{ ...other }">
    <Icon :type="icon" v-if="icon" />
    <img :src="img" alt="" v-if="!icon && img" />
  </Button>
</template>

<style scoped></style>
