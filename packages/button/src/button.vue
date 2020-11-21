<template>
  <div :class='classList'>{{cssPrefix}} {{a}}</div>
</template>

<script lang='ts'>
import './button.less'

import {defineComponent, PropType, inject, Ref, ref, computed} from 'vue'

export type size = 'large' | 'middle' | 'small'
export const cssModule = defineComponent ({
  setup (props) {
    const cssPrefix = inject<Ref<string>> ('ezfe-css-prefix') || ref('ezui')
    return {cssPrefix}
  }
})

export default defineComponent ({
  props: {
    size: {type: String as PropType<size>},
    disabled: {type: Boolean},
    block: {type: Boolean},
    type: {type: String, default: 'primary'},
    danger: {type: Boolean},
    ghost: {type: Boolean},
    href: {type: String, default: ''},
    loading: {type: Boolean},
    shape: {type: String, default: 'default'},
    target: {type: String, default: ''}
  },

  computed: {
    classList (): Array<string> {
      const {cssPrefix} = this

      return [
        `${cssPrefix}-button`
      ]
    }
  },

  setup (props, context) {
    let {cssPrefix} = cssModule

    return {
      cssPrefix
    }
  }
})

</script>
