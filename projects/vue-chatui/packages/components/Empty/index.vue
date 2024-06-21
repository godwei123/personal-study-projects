<script setup lang="ts">
import { Flex } from '../Flex'
import clsx from 'clsx'
import type { EmptyProps } from './type'
import { computed, toRefs } from 'vue'
const IMAGE_EMPTY = '//gw.alicdn.com/tfs/TB1fnnLRkvoK1RjSZFDXXXY3pXa-300-250.svg'
const IMAGE_OOPS = '//gw.alicdn.com/tfs/TB1lRjJRbvpK1RjSZPiXXbmwXXa-300-250.svg'
const props = withDefaults(defineProps<EmptyProps>(), {})
const { className, type, image, tip } = toRefs(props)
const imgUrl = computed(() => image?.value || (type?.value === 'error' ? IMAGE_OOPS : IMAGE_EMPTY))
</script>

<template>
  <Flex :class="clsx('Empty', className)" direction="column" center>
    <img class="Empty-img" :src="imgUrl" :alt="tip" />
    <p class="Empty-tip" v-if="tip">{{ tip }}</p>
    <slot></slot>
  </Flex>
</template>

<style scoped></style>
