<template>
  <div class='ezfe-button'>{{test.aaa}}</div>
</template>

<script lang='ts'>
import './button.less'
import {defineComponent, PropType} from 'vue'

export interface ButtonProps{
  aaa: string,
  bbb: string
}

export default defineComponent ({
  props: {
    test: {
      type: Object as PropType<ButtonProps>,
      required: true
    }
  },

  setup (props) {
    console.log (props.test)
  }
})

</script>
