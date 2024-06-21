<script setup lang="ts">
import Icon from '../Icon/index.vue'
import Button from '../Button/index.vue'
import { useLocale } from '../ConfigProvider/index'
import { onMounted, toRefs } from 'vue'
import type { BackBottomProps } from './type'
const props = withDefaults(defineProps<BackBottomProps>(), {})
const { count } = toRefs(props)
const emit = defineEmits(['click', 'mount'])
const { trans } = useLocale('BackBottom')
let text = trans('bottom')
if (count.value) {
  text = trans(count.value === 1 ? 'newMsgOne' : 'newMsgOther').replace('{n}', count)
}

onMounted(() => {
  emit('mount')
})
</script>

<template>
  <div class="BackBottom">
    <Button class="slide-in-right-item" @click="emit('click')">
      {{ text }}
      <Icon type="chevron-double-down" />
    </Button>
  </div>
</template>

<style scoped></style>
