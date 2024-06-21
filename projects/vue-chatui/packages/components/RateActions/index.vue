<template>
  <div class="RateActions">
    <IconButton
      v-if="value !== DOWN"
      :class="clsx('RateBtn', { active: value === UP })"
      :title="upTitle"
      :data-type="UP"
      icon="thumbs-up"
      @click="handleUpClick"
    />
    )

    <IconButton
      v-if="value !== UP"
      :class="clsx('RateBtn', { active: value === DOWN })"
      :title="downTitle"
      :data-type="DOWN"
      icon="thumbs-down"
      @click="handleDownClick"
    />
  </div>
</template>
<script setup lang="ts">
import type { RateActionsProps } from './type'
import { clsx } from 'clsx'
import IconButton from '../IconButton'
// import { useLocale } from '../ConfigProvider'
import { ref, toRefs } from 'vue'

const UP = 'up'
const DOWN = 'down'

const props = withDefaults(defineProps<RateActionsProps>(), {})
const emit = defineEmits(['click'])
// const { trans } = useLocale('RateActions', {
//   up: '赞同',
//   down: '反对'
// })

const { upTitle, downTitle } = toRefs(props)

const value = ref('')
function handleClick(val: string) {
  if (!value.value) {
    value.value = val
    emit('click', val)
  }
}

function handleUpClick() {
  handleClick(UP)
}

function handleDownClick() {
  handleClick(DOWN)
}
</script>
<style scoped></style>
