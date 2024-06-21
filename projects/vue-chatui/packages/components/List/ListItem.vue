<script setup lang="ts">
import { clsx } from 'clsx'
import type { ListItemProps } from './type'
import Icon from '../Icon/index.vue'

const props = withDefaults(defineProps<ListItemProps>(), {
  as: 'div'
})
const { as, content, rightIcon, ...other } = props

const emit = defineEmits(['click'])
</script>

<template>
  <component
    :is="as"
    :class="clsx('ListItem')"
    @click="emit('click', $event)"
    role="listitem"
    v-bind="{ ...other }"
  >
    <div class="ListItem-content">
      <slot>{{ content }} </slot>
    </div>
    <Icon :type="rightIcon" v-if="rightIcon" />
  </component>
</template>

<style scoped></style>
