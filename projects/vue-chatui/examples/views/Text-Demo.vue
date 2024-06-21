<script setup lang="ts">
import Text from '~/components/Text/index.vue'
</script>

<template>
  <div>
    <h3>基础用法</h3>
    <Text>文本内容</Text>

    <h3>单行显示</h3>
    <Text truncate>这是一段非常非常非常非常非常非常非常非常长的文本内容</Text>

    <h3>多行显示</h3>
    <Text :truncate="2"
      >这是一段非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常长的文本内容</Text
    >

    <h3>单词换行</h3>
    <Text breakWord>ThisIsVeryVeryVeryVeryVeryVeryVeryLongEnglishWord</Text>
  </div>
</template>

<style scoped></style>
