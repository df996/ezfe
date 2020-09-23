<template>
  <div>1</div>
</template>

<script>
import message from '@ezfe/message'
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

  created () {
    message.success ('App.vue')
  }
}
</script>
