import { PropType } from 'vue'

type Align = 'left' | 'right' | 'center'

export const tableProps = {
  data: {
    type: Array,
    default: () => []
  },
  columns: {
    type: Array,
    default: () => []
  },
  trHeight: {
    type: String,
    default: () => '40px'
  },
  align: {
    type: String as PropType<Align>,
    default: 'left',
    validator(v: string): boolean {
      return ['left', 'right', 'center', ''].includes(v)
    }
  },
  zebra: Boolean,
  border: Boolean,
  width: {
    type: String,
    default: () => '100%'
  },
  height: {
    type: String,
    default: () => 'auto'
  },
  num: Boolean,
  important: {
    type: Array,
    default: () => []
  },
  importantColor: {
    type: String,
    default: () => '#fdf5e6'
  }
} as const
