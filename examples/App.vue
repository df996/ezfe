<template>
  <div>
    <Input size='large' />
    <Input disabled />
    <Input size='small' block />
  </div>
</template>

<script>
import Input from '@ezfe/input'
import {provide, ref} from 'vue'
export default {
  name: 'APP',
  components: {Input},

  setup () {
    //const a = ref ('wwww')
    //provide ('ezfe-css-prefix', a)
    //setTimeout (() => a.value = "QQQQQQ", 5000)
  }
}
</script>

<style scoped>
  div {
    margin-bottom: 30px;
  }
</style>
