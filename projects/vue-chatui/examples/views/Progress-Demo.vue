<script setup lang="ts">
import Progress from '~/components/Progress/index.vue'
import Button from '~/components/Button/index.vue'
import { ref } from 'vue'
const percentage = ref(20)
</script>

<template>
  <div>
    <h3>基础用法</h3>
    <Progress :value="percentage" />
    <br />
    <Button @click="percentage = percentage - 10">减少</Button>
    <Button @click="percentage = percentage + 10" color="primary">增加</Button>

    <h3>状态显示: active</h3>
    <Progress :value="30" status="active" />

    <h3>状态显示: success</h3>
    <Progress :value="40" status="success" />

    <h3>状态显示: error</h3>
    <Progress :value="50" status="error" />
  </div>
</template>

<style scoped></style>
