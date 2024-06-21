<script setup lang="ts">
import { Flex, FlexItem } from '~/components/Flex'
</script>

<template>
  <div>
    <h3>媒体对象</h3>
    <Flex>
      <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" style="text-anchor: middle">
        <rect width="100%" height="100%" fill="#e5e5e5" />
        <text x="50%" y="50%" fill="#999" dy=".3em">Image</text>
      </svg>
      <FlexItem style="margin-left: 1em">
        <h4>Media heading</h4>
        <p>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
          sollicitudin.
        </p>
      </FlexItem>
    </Flex>

    <h3>居中显示</h3>
    <Flex center style="height: 80px; background: var(--gray-7)">
      <p>内容块</p>
    </Flex>
  </div>
</template>

<style scoped></style>
