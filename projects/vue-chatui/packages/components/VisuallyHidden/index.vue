<script setup lang="ts">
import { ref } from 'vue'

const style = ref({
  position: 'absolute',
  height: '1px',
  width: '1px',
  overflow: 'hidden',
  clip: 'rect(0 0 0 0)',
  margin: '-1px',
  // padding: 0,
  // border: 0,
  whiteSpace: 'nowrap'
})
const props = withDefaults(defineProps<any>(), {})
</script>

<template>
  <span :style="style" v-bind="{ ...props }" />
</template>

<style scoped></style>
