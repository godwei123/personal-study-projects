export interface RecorderHandle {
  stop: () => void
}

export interface RecorderProps {
  canRecord?: boolean
  volume?: number
  onStart?: () => void
  onEnd?: (data: { duration: number }) => void
  onCancel?: () => void
}

export interface ButtonTextMap {
  [k: string]: string
}
