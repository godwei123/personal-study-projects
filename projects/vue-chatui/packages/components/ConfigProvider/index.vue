<script setup lang="ts">
import defaultLocales from './locales'
import { provide } from 'vue'
import { configCtxSymbol, localSymbol } from '../../utils/constant'
const DEFAULT_LOCALE = 'zh_CN'

provide(configCtxSymbol, {})
provide(localSymbol, {
  defaultLocales,
  DEFAULT_LOCALE
})
</script>
