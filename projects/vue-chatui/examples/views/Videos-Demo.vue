<script setup lang="ts">
import Video from '~/components/Video/index.vue'
</script>

<template>
  <div>
    <h3>基础用法</h3>
    <Video
      cover="//img.alicdn.com/imgextra/i1/6000000000012/O1CN01vlHyZv1BxXNDA564X_!!6000000000012-0-tbvideo.jpg"
      src="//cloud.video.taobao.com/play/u/3544775890/p/1/e/6/t/1/277895493609.mp4"
      :duration="46"
    />
  </div>
</template>

<style scoped></style>
