<template>
  <div class='ezfe-button'>111</div>
</template>

<script lang='ts'>
import './button.less'
import {defineComponent, PropType} from 'vue'
import BaseProps, {Props} from '@ezfe/basic'

interface ButtonProps extends Props {
  aa:number
}

export default defineComponent ({
  mixins: [BaseProps],

  props: {
    aa: {default: 1}
  },

  setup (props: ButtonProps) {
    console.log (props.disabled, props.size, props.aa)
  }
})

</script>
