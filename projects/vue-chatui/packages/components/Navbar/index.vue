<script setup lang="ts">
import type { NavbarProps } from './type'
import { clsx } from 'clsx'
import IconButton from '../IconButton'

const props = withDefaults(defineProps<NavbarProps>(), {
  rightContent: () => []
})
const { className, title, logo, desc, leftContent, rightContent, align } = props

const isLeft = align === 'left'
const showTitle = isLeft ? true : !logo
</script>

<template>
  <header :class="clsx('Navbar', { 'Navbar--left': isLeft }, className)">
    <div class="Navbar-left">
      <IconButton size="lg" v-bind="{ ...leftContent }" v-if="leftContent" />
    </div>
    <div class="Navbar-main">
      <img class="Navbar-logo" :src="logo" :alt="title" v-if="logo" />
      <div class="Navbar-inner">
        <h2 class="Navbar-title" v-if="showTitle">{{ title }}</h2>
        <div class="Navbar-desc">{{ desc }}</div>
      </div>
    </div>
    <div class="Navbar-right">
      <IconButton v-for="item in rightContent" size="lg" :key="item.icon" v-bind="{ ...item }" />
    </div>
  </header>
</template>

<style scoped></style>
