<script setup lang="ts">
import { computed } from 'vue/dist/vue'
import { clsx } from 'clsx'
import { BackdropProps } from './type'
import { toRefs } from 'vue'

const props = withDefaults(defineProps<BackdropProps>(), {})
const emit = defineEmits(['click'])
const { className, active, ...rest } = toRefs(props)

const classNameList = computed(() => clsx('Backdrop', className?.value, { active: active.value }))
const onClick = () => {
  emit('click')
}
</script>

<template>
  <div
    :class="classNameList"
    @click="onClick"
    role="button"
    :tabIndex="-1"
    :aria-hidden="true"
    v-on="{ ...rest }"
  />
</template>

<style scoped></style>
