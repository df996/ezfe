<template>
  <div :class='styleClassList'>
    <slot name='before'></slot>
    <input :type='inputType' />
    <slot name='after'></slot>
  </div>
</template>

<script lang='ts'>
import {defineComponent, PropType, inject, Ref, ref} from 'vue'

type size = 'large' | 'middle' | 'small'
type type = 'text' | 'password' | 'number'

export default defineComponent ({
  props: {
    size: {type: String as PropType<size>, default: 'middle'},
    disabled: {type: Boolean},
    block: {type: Boolean},
    type: {type: String as PropType<type>, default: 'text'},
  },

  computed: {
    styleClassList (): Array<string> {
      const {cssPrefix} = this
      const styleClassList: Array<string> = ['']
      return styleClassList.map (styleClass => styleClass == '' ?
        `${cssPrefix}-input` : `${cssPrefix}-input-${styleClass}`)
    }
  },

  setup (props) {
    const cssPrefix = inject<Ref<string>> ('ezfe-css-prefix', ref('ezfe'))

    return {
      cssPrefix
    }
  }
})
</script>
