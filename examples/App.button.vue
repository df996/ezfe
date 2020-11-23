<template>
  <div>
    <div style=''>
      <Button>default</Button>
      <Button type='primary'>哇哈哈哈</Button>
      <Button ghost>1111</Button>
      <Button type='primary' ghost>default</Button>
      <Button type='dashed' ghost>1111</Button>
      <Button type='text' ghost @click="clickHandler">1111</Button>
      <Button type='link' ghost>1111</Button>
    </div>

    <div>
      <Button ghost @click='clickHandler' type='primary' disabled>primary</Button>
      <Button ghost disabled>primary</Button>
      <Button ghost disabled>primary</Button>
      <Button ghost type='dashed' disabled>1111</Button>
      <Button ghost type='text' disabled>1111</Button>
      <Button ghost type='link' disabled>1111</Button>
    </div>

    <div>
      <Button type='dashed' target="_blank" href="http://www.baidu.com">dashed</Button>
    </div>

    <div>
      <Button type='link'>link</Button>
    </div>

    <div>
      <Button type='text'>text</Button>
    </div>

    <div>
      <Button block>SSSSSSSSSS</Button>
    </div>

    <div>
      <Button shape="circle" block>SSSSSSSSSS</Button>
    </div>

    <div>
      <Button shape="round" block>SSSSSSSSSS</Button>
    </div>

    <div><Button size='small'>small</Button></div>
  </div>
</template>

<script lang='ts'>

declare const window: Window & { __ezfe__css__prefix__: string}
window.__ezfe__css__prefix__ = '1111'

import Button from '@ezfe/button'
import {provide, ref} from 'vue'

export default {
  name: 'App',
  components: {Button},
  methods: {
    clickHandler (event: any) {
      alert (1)
    }
  }
}
</script>


<style scoped>
  div {padding: 20px;}
  .ezfe-button {
    margin-right:  8px;
  }
</style>