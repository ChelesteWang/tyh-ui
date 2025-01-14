import { PropType } from 'vue'

type Direction = 'top' | 'left' | 'bottom' | 'right'

export const drawerProps = {
  modelValue: Boolean,
  direction: {
    type: String as PropType<Direction>,
    default: 'right',
    validator(v: string): boolean {
      return ['top', 'left', 'bottom', 'right', ''].includes(v)
    }
  },
  size: {
    type: String,
    default: () => '30%'
  },
  title: String,
  appendToBody: Boolean,
  modal: {
    type: Boolean,
    default: () => true
  },
  modalClose: {
    type: Boolean,
    default: () => true
  },
  showClose: {
    type: Boolean,
    default: () => true
  },
  showHeader: {
    type: Boolean,
    default: () => true
  },
  zIndex: {
    type: Number,
    default: () => 3500
  }
} as const
