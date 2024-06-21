<script setup lang="ts">
import { computed, ref, toRefs } from 'vue'
import type { FlexProps } from './type'
import { clsx } from 'clsx'

const mapDirection = ref({
  row: 'Flex--d-r',
  'row-reverse': 'Flex--d-rr',
  column: 'Flex--d-c',
  'column-reverse': 'Flex--d-cr'
})

const mapWrap = {
  nowrap: 'Flex--w-n',
  wrap: 'Flex--w-w',
  'wrap-reverse': 'Flex--w-wr'
}

const mapJustify = {
  'flex-start': 'Flex--jc-fs',
  'flex-end': 'Flex--jc-fe',
  center: 'Flex--jc-c',
  'space-between': 'Flex--jc-sb',
  'space-around': 'Flex--jc-sa'
}

const mapAlign = {
  'flex-start': 'Flex--ai-fs',
  'flex-end': 'Flex--ai-fe',
  center: 'Flex--ai-c'
}
const props = withDefaults(defineProps<FlexProps>(), {
  as: 'div',
  direction: 'row',
  wrap: 'nowrap'
})

const {
  as,
  inline,
  center,
  direction,
  wrap,
  justifyContent,
  alignItems,
  justify,
  align,
  ...other
} = toRefs(props)
const justify_ = computed(() => justifyContent?.value || justify?.value || undefined)
const align_ = computed(() => alignItems?.value || align?.value || undefined)
</script>

<template>
  <component
    :is="as"
    :class="
      clsx(
        'Flex',
        direction && mapDirection[direction],
        justify_ && mapJustify[justify_],
        align_ && mapAlign[align_],
        wrap && mapWrap[wrap],
        {
          'Flex--inline': inline,
          'Flex--center': center
        }
      )
    "
    v-bind="{ ...other }"
  >
    <slot></slot>
  </component>
</template>

<style scoped></style>
