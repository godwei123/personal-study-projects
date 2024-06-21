<script setup lang="ts">
import { Card } from '../Card'
import { Flex, FlexItem } from '../Flex'
import Icon from '../Icon'
import Text from '../Text'
import { clsx } from 'clsx'
import getExtName from '../../utils/getExtName'
import prettyBytes from '../../utils/prettyBytes'
import type { FileCardProps } from './type'
const props = withDefaults(defineProps<FileCardProps>(), {})
const { className, file, extension } = props
const { name, size } = file
const ext = extension || getExtName(name)
</script>

<template>
  <Card :class="clsx('FileCard', className)" size="xl">
    <Flex>
      <div class="FileCard-icon" :data-type="ext">
        <Icon type="file" />
        <Text truncate as="span" class="FileCard-ext"> {{ ext }} </Text>
      </div>
      <FlexItem>
        <Text :truncate="2" breakWord class="FileCard-name"> {{ name }} </Text>
        <div class="FileCard-meta">
          <span class="FileCard-size" v-if="size != null">{{ prettyBytes(size) }}</span>
          <slot></slot>
        </div>
      </FlexItem>
    </Flex>
  </Card>
</template>

<style scoped></style>
