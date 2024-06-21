<script setup lang="ts">
import Avatar from '~/components/Avatar/index.vue'
const img = '//gw.alicdn.com/tfs/TB1U7FBiAT2gK0jSZPcXXcKkpXa-108-108.jpg'
</script>

<template>
  <Avatar :src="img" size="sm" />
  <Avatar :src="img" />
  <Avatar :src="img" alt="1234567" />
  <Avatar :src="img" size="lg" />
  <Avatar :src="img" size="sm" shape="square" />
  <Avatar :src="img" shape="square" />
  <Avatar :src="img" size="lg" shape="square" />
</template>

<style scoped></style>
