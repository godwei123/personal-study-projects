<script setup lang="ts">
import Button from '~/components/Button/index.vue'
// import IconButton from '~/components/IconButton/index.vue'
</script>

<template>
  <div class="demo-btn">
    <h3>按钮颜色</h3>
    <Button color="primary">主要按钮</Button>
    <Button>次要按钮</Button>

    <h3>按钮变体</h3>
    <Button variant="text">文本按钮</Button>
    <Button variant="float">1条新消息</Button>

    <h3>按钮尺寸</h3>
    <Button size="sm">Small</Button>
    <Button label="Default" />
    <Button label="Large" size="lg" />

    <Button color="primary" block>block 按钮</Button>

    <h3>禁用状态</h3>
    <Button color="primary" disabled>主要按钮(disabled)</Button>
    <Button disabled>次要按钮(disabled)</Button>

    <h3>图标按钮</h3>
    <!--    <IconButton icon="image" />-->
  </div>
</template>

<style scoped></style>
