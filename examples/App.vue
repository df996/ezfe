<template>
  <div>{{a}}</div>
</template>

<script lang='ts'>
import {reactive, ref, onMounted, defineComponent, computed} from 'vue'
import {Vue, Options, setup} from 'vue-class-component'
import basic from '@ezfe/basic'

interface UserInfo {
  username: string,
  password: string
}

const AAA: UserInfo = setup<UserInfo> (() => {
  return {username: '1', password: '2'}
})

@Options ({
  name: 'App'
})
export default class App extends Vue {
  created () {
    console.log (basic)
  }
}
</script>
