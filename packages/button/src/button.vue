<template>
  <button :disabled='disabled' :class='styleClassList' @click='clickHandler'>
    <slot name='default'></slot>
  </button>
</template>

<script lang='ts'>
import './button.less'
import {defineComponent, PropType, inject, Ref, ref, computed} from 'vue'

type size = 'large' | 'middle' | 'small'
type shape = 'circle' | 'round' | undefined
type type = 'primary' | 'dashed' | 'link' | 'text' | undefined

export default defineComponent ({
  emits:['click'],

  props: {
    size: {type: String as PropType<size>, default: 'middle'},
    disabled: {type: Boolean},
    block: {type: Boolean},
    type: {type: String as PropType<type>},
    danger: {type: Boolean},
    ghost: {type: Boolean},
    href: {type: String},
    loading: {type: Boolean},
    shape: {type: String as PropType<shape>},
    target: {type: String, default: ''}
  },

  computed: {
    styleClassList (): Array<string> {
      const {cssPrefix} = this
      const styleClassList: Array<string> = ['']

      if (this.size !== 'middle') {
        styleClassList.push (this.size)
      }

      if (this.disabled) {
        styleClassList.push ('disabled')
      }

      if (this.block) {
        styleClassList.push ('block')
      }

      if (this.danger) {
        styleClassList.push ('danger')
      }

      if (this.ghost) {
        styleClassList.push ('ghost')
      }

      if (this.loading) {
        styleClassList.push ('loading')
      }

      if (this.shape) {
        styleClassList.push (this.shape)
      }

      if (this.type) {
        styleClassList.push (this.type)
      }

      return styleClassList.map (styleClass => styleClass == '' ? 
        `${cssPrefix}-button` : `${cssPrefix}-button-${styleClass}`)
    }
  },

  setup (props, context) {
    const cssPrefix = inject<Ref<string>> ('ezfe-css-prefix') || ref('ezfe')
    return {
      cssPrefix
    }
  },

  methods: {
    clickHandler (event: Event) {
      if (!this.href || this.href.trim () == '') {
        return this.$emit ('click', event)
      }

      const a = document.createElement ('a')
      a.href = this.href
      a.target = this.target
      a.click ()
    }
  }
})
</script>