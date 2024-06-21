<script setup lang="ts">
import Divider from '~/components/Divider/index.vue'
</script>

<template>
  <div>
    <h3>基础用法</h3>
    <Divider />

    <h3>展示文字</h3>
    <Divider>文本</Divider>

    <h3>内容位置</h3>
    <Divider>文本</Divider>
    <Divider position="right">文本</Divider>
    <Divider position="left">文本</Divider>
  </div>
</template>

<style scoped></style>
