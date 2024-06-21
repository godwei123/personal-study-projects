import { useRef } from 'react'
import { ref } from 'vue'

let nextId = 0
const getNextId = () => nextId++

export default function useNextId(prefix = 'id-') {
  const id = ref(`${prefix}${getNextId()}`)
  return id
}
