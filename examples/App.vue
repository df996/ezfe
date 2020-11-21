<template>
  <Button size='aaa'></Button>
</template>

<script lang='ts'>

declare const window: Window & { __ezfe__css__prefix__: string}
window.__ezfe__css__prefix__ = '1111'

import Button from '@ezfe/button'
import {provide, ref} from 'vue'

export default {
  name: 'App',
  components: {Button},

  setup () {
    const cssPrefix = ref ('qq')

    provide ('ezfe-css-prefix', cssPrefix)

    setInterval (() => {
      cssPrefix.value = new Date ().getTime ().toString ()
    }, 1000)

    return {
      cssPrefix
    }
  },

  created () {
  }
}
</script>
