<script setup lang="ts">
import { clsx } from 'clsx'
import DOMPurify from 'dompurify'
import './configDOMPurify'
import type { RichTextProps } from './type'
import { toRefs } from 'vue'

const props = withDefaults(defineProps<RichTextProps>(), {
  options: () => ({})
})
const { className, content, options, ...other } = toRefs(props)
const html = {
  __html: DOMPurify.sanitize(content, options) as string
}
</script>

<template>
  <div :class="clsx('RichText', className)" :dangerouslySetInnerHTML="html" v-bind="{ ...other }" />
</template>

<style scoped></style>
