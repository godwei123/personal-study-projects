<script setup lang="ts">
import { ref } from 'vue'
import Input from '~/components/Input/index.vue'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref('')
</script>

<template>
  <div>
    <h3>基础用法</h3>
    <Input v-model="value1" placeholder="请输入..." />

    <h3>多行输入</h3>
    <Input :rows="3" v-model="value2" placeholder="请输入..." />

    <h3>高度自适应</h3>
    <Input autoSize v-model="value3" placeholder="请输入..." />

    <h3>限制字数</h3>
    <Input :maxLength="20" v-model="value4" placeholder="请输入..." />
  </div>
</template>

<style scoped></style>
