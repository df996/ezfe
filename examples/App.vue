<template>
  <div>
    <div><Button v-on:click='a' :disabled='false'>测试button</Button></div>
    <div><Button type='default'>哈哈哈</Button></div>
    <div><Button type='dashed' v-on:click='a' :disabled='false'>测试button</Button></div>
    <div><Button ghost type='default'>哈哈哈</Button></div>
  </div>
</template>
<style>
div {
  padding: 20px 0;
}
</style>

<script>
import message from '@ezfe/message'
import Button from '@ezfe/button'
// message.success ('1111success')
// message.error ('1111error', function () {
//   console.log ('22')
// }, 22)
// message.info ('111info', 33, () => console.log ('callback'))
// message.warn ('1111warn', function () {
//   console.log ('1111')
// })
// message.warning ('1111warning', 11)

export default {
  name: 'APP',
  components: {Button},

  created () {
    message.success ('App.vue')
  },

  methods: {
    a () {
      alert (1)
    }
  }
}
</script>
