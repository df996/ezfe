<template>
  <button :disabled='disabled'><slot name='default'></slot></button>
</template>

<script>
import basic from '@ezfe/ui-basic'

export default {
  name: 'EZFE-Button',

  mixins: [basic],

  prop: {
    disabled: {default: false, type: Boolean},
    block: {default: false, type: Boolean},
    type: {default: 'primary', type: String},
    danger: {default: false, type: Boolean},
    ghost: {default: false, type: Boolean},
    href: {default: '', type: String},
    loading: {default: false, type: Boolean},
    shape: {default: 'default', type: String},
    target: {default: '', type: String}
  }
}
</script>