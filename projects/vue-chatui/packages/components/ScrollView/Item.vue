<script setup lang="ts">
import { onMounted, onUnmounted, ref, toRefs, watch } from "vue";
import { clsx } from "clsx";
import type { ScrollViewItemProps } from "./type";

const observerOptions = {
  threshold: [0, 0.1],
};

const props= withDefaults(defineProps<ScrollViewItemProps>(),{})
const { item, effect } = toRefs(props);
const emit  = defineEmits('intersect');
cosnt itemRef =ref<HTMLDivElement>(null)
const observer =ref()
//   on?: (item?: any, entry?: IntersectionObserverEntry) => boolean | void
const fun=() => {
  observer.value= new IntersectionObserver(([entry]) => {
    if (entry.intersectionRatio > 0) {
      // 根据回调返回值判断是否继续监听
      if (!emit(item, entry)) {
        observer.unobserve(entry.target);
      }
    }
  }, observerOptions);

  if (itemRef.value) {
    observer.observe(itemRef.value);
  }
}
watch(item,()=>{
  fun()
})

onMounted(()=>{
  fun()
})

onUnmounted(()=>{
  observer.disconnect();
})
</script>

<template>
  <div
    :class="
      clsx('ScrollView-item', {
        'slide-in-right-item': effect === 'slide',
        'A-fadeIn': effect === 'fade'
      })
    "
    ref="itemRef"
  >
    <slot></slot>
  </div>
</template>

<style scoped></style>
