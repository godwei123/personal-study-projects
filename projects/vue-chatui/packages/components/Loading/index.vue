<script setup lang="ts">
import type { LoadingProps } from './type'
import { toRefs } from 'vue'
import { Flex } from '../Flex'
import Icon from '../Icon'

const props = withDefaults(defineProps<LoadingProps>(), {})
const { tip } = toRefs(props)
</script>

<template>
  <Flex className="Loading" center>
    <Icon type="spinner" spin />
    <p class="Loading-tip" v-if="tip">{{ tip }}</p>
    <slot></slot>
  </Flex>
</template>

<style scoped></style>
