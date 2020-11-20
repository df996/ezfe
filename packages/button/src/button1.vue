<template>
  <button 
    :class='classList'
    @click='clickHandler' 
    :disabled='disabled'
  >
    <slot name='default'></slot>
  </button>
</template>

<script>
import './button.less'
import basic from '@ezfe/ui-basic'

export default {
  name: 'EZFE-Button',

  mixins: [basic],

  props: {
    disabled: {default: false, type: Boolean},
    block: {default: false, type: Boolean},
    type: {default: 'primary', type: String},
    danger: {default: false, type: Boolean},
    ghost: {default: false, type: Boolean},
    href: {default: '', type: String},
    loading: {default: false, type: Boolean},
    shape: {default: 'default', type: String},
    target: {default: '', type: String}
  },

  computed: {
    classList () {
      const {prefixCls, size, type} = this
      const button = `${prefixCls}-button`
      return [
        button,
        `${button}-${size}`,
        `${button}-${type}`,
        this.block ? `${button}-block` : null
      ]
    }
  },

  methods: {
    clickHandler () {
      this.$emit ('click')
    }
  }
}
</script>