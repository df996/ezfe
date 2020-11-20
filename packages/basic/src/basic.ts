import {defineComponent , PropType} from 'vue'

export const classPrefix = 'ezfe'

export type size = string
export type disabled = boolean | null

export interface Props {
  size?: size,
  disabled?: disabled
}


export default defineComponent ({
  props: {
    disabled: { 
      type: [Boolean],
      
    },
    size: {
      type: String
    }
  }
})

//export default {
//  classPrefix: classPrefix
//}