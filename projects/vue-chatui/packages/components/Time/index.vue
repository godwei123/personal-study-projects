<script setup lang="ts">
import { useLocale } from '../ConfigProvider'
import formatDate from './parser'
import type { TimeProps } from './type'
const { trans } = useLocale('Time')

const props = withDefaults(defineProps<TimeProps>(), {})
</script>

<template>
  <time class="Time" :dateTime="new Date(date).toJSON()">
    {{ formatDate(props.date, trans()) }}
  </time>
</template>

<style scoped></style>
