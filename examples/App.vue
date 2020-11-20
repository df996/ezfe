<template>
  <Button size='aaa' :disabled='false'></Button>
</template>

<script lang='ts'>
import Button from '@ezfe/button'

export default {
  name: 'App',
  components: {Button},

  data () {
    return {
      test: {
        aaa: '222'
      }
    }
  }
}
</script>
