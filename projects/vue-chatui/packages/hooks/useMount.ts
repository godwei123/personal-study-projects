import { reflow } from '../utils'
import { onMounted, Ref, ref, watch } from 'vue'

interface UseMountOptions {
  active?: boolean
  el: Ref<Element>
  delay?: number
}

export const useMount = ({ active = false, el, delay = 300 }: UseMountOptions) => {
  const isShow = ref(false)
  const didMount = ref(false)
  const timeout = ref<ReturnType<typeof setTimeout>>()

  const clear = () => {
    if (timeout.value) {
      clearTimeout(timeout.value)
    }
  }

  watch([active, delay], () => {
    if (active) {
      clear()
      didMount.value = active
    } else {
      isShow.value = active
      timeout.value = setTimeout(() => {
        didMount.value = active
      }, delay)
    }
    return clear
  })

  watch([didMount, el.value], () => {
    if (el.value) {
      reflow(el.value)
    }
    isShow.value = didMounts
  })

  onMounted(() => {
    if (el.value) {
      reflow(el.value)
    }
    isShow.value = didMount
  })

  return {
    didMount,
    isShow
  }
}
