import type { VNodeChild } from 'vue'
export type StepStatus = 'success' | 'fail' | 'abort'
export type StepperProps = {
  current?: number
  status?: StepStatus
  inverted?: boolean
  children?: VNodeChild | VNodeChild[]
}

export type StepProps = {
  active?: boolean
  completed?: boolean
  disabled?: boolean
  status?: StepStatus
  index?: number
  title?: string
  subTitle?: string
  desc?: VNodeChild | VNodeChild[]
  children?: VNodeChild | VNodeChild[]
}
