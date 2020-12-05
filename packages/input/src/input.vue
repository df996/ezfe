<template>
  <div :class='styleClass.wrapper'>
    <slot name='before'></slot>
    <input @blur='focused = false' @focus='focused = true' :class='styleClass.input' :type='type' />
    <slot name='after'></slot>
  </div>
</template>

<script lang='ts'>
import './input.less'
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
    styleClass (): {[key: string]: Array<string>} {
      const inputPrefix = `${this.cssPrefix}-input`
      const wrapperPrefix = `${inputPrefix}-wrapper`
      const input:Array<string> = [inputPrefix]
      const wrapper:Array<string> = [wrapperPrefix]

      this.block && wrapper.push ('block')
      this.disabled && wrapper.push ('disabled')
      this.size != 'middle' && input.push (this.size)
      this.focused && wrapper.push ('focused')

      return {
        input: input.map (item => item == inputPrefix ? inputPrefix : `${inputPrefix}-${item}`),
        wrapper: wrapper.map (item => item == wrapperPrefix ? wrapperPrefix : `${wrapperPrefix}-${item}`)
      }
    }
  },

  setup (props) {
    const focused = ref (false)
    const cssPrefix = inject<Ref<string>> ('ezfe-css-prefix', ref('ezfe'))

    return {
      focused,
      cssPrefix
    }
  }
})
</script>
