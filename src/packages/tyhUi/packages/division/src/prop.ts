import { PropType } from 'vue'
import { divisionPosition } from './type'

export const prop = {
  position: {
    type: String as PropType<divisionPosition>,
    default: 'left',
    validator(v: string): boolean {
      return ['left', 'center', 'right', ''].includes(v)
    }
  },
  color: {
    type: String,
    default: () => '#515a6e'
  },
  margin: {
    type: String,
    default: () => '25px'
  },
  icon: String
}
