<template>
  <div>
    <Input type='text' size='large' />
    <Input type='number' disabled />
    <Input type='password' size='small' block />

    <Select></Select>
  </div>
</template>

<script>
import Input from '@ezfe/input'
import Select from '@ezfe/select'

import {provide, ref} from 'vue'
export default {
  name: 'APP',
  components: {Input, Select},

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
