<template>
  <div>
    <Input type='text' size='large' />
    <Input type='number' disabled />
    <Input type='password' size='small' block />

    <Select>
      <Option v-for='i of x' :key='i'>{{i}}</Option>
    </Select>
  </div>
</template>

<script>
import Input from '@ezfe/input'
import Select, {Option} from '@ezfe/select'

import {provide, ref} from 'vue'
export default {
  name: 'APP',
  components: {Input, Select},

  data () {
    return {
      x: 10
    }
  },

  created () {
    setInterval (() => this.x += 10, 5000)
  },

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
