import type { HTMLAttributes } from 'vue'
import DOMPurify from 'dompurify'

export interface RichTextProps extends HTMLAttributes<HTMLDivElement> {
  content: string
  className?: string
  options?: DOMPurify.Config
}
