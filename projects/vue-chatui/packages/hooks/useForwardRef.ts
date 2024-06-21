import { ref } from 'vue'

export default function useForwardRef(ref) {
  const targetRef = ref(null)

  useEffect(() => {
    if (!ref) return

    if (typeof ref === 'function') {
      ref(targetRef.current)
    } else {
      // eslint-disable-next-line no-param-reassign
      ref.current = targetRef.current
    }
  }, [ref])

  return targetRef
}
