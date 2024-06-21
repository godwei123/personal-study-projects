<script setup lang="ts">
import AvatarDemo from '@/views/Avatar-Demo.vue'
import ButtonDemo from '@/views/Button-Demo.vue'
import DividerDemo from '@/views/Divider-Demo.vue'
import TagDemo from '@/views/Tag-Demo.vue'
import TextDemo from '@/views/Text-Demo.vue'
import VideosDemo from '@/views/Videos-Demo.vue'
import ProgressDemo from '@/views/Progress-Demo.vue'
import FlexDemo from '@/views/Flex-Demo.vue'
import InputDemo from '@/views/Input-Demo.vue'
</script>

<template>
  <div class="box">
    <InputDemo />
    <FlexDemo />
    <ProgressDemo />
    <VideosDemo />
    <TextDemo />
    <TagDemo />
    <DividerDemo />
    <AvatarDemo />
    <ButtonDemo />
  </div>
</template>

<style scoped lang="less">
.box {
  height: 100vh;
  width: 400px;
  border: 1px solid #eee;
  margin: 0 auto;
  padding: 20px;
  overflow: scroll;
  * {
    margin-bottom: 10px;
  }
}
</style>
<style></style>
