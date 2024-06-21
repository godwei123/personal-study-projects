<script setup lang="ts">
import Icon from '../Icon'
import IconButton from '../IconButton'
import Text from '../Text'
import type { NoticeProps } from './type'
import { toRefs } from 'vue'
const props = withDefaults(defineProps<NoticeProps>(), {
  leftIcon: 'bullhorn',
  closable: true
})
const { content, closable, leftIcon } = toRefs(props)

const emit = defineEmits(['click', 'close'])
</script>

<template>
  <div class="Notice" role="alert" aria-atomic aria-live="assertive">
    <Icon class="Notice-icon" :type="leftIcon" v-if="leftIcon" />
    <div class="Notice-content" @click="emit('click', $event)">
      <Text class="Notice-text" truncate> {{ content }} </Text>
    </div>

    <IconButton
      v-if="closable"
      class="Notice-close"
      icon="close"
      @click="emit('close', $event)"
      aria-label="关闭通知"
    />
  </div>
</template>

<style scoped></style>
