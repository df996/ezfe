<template>
  <div :class='styleClassList'>
    <Dropdown>
      <slot name='default'></slot>
    </Dropdown>
  </div>
</template>

<script lang='ts'>
import './select.less'
import Dropdown from '@ezfe/dropdown'
import {defineComponent, PropType, inject, Ref, ref} from 'vue'

type size = 'large' | 'middle' | 'small'

export default defineComponent ({
  name: 'EZFE-Select',
  components: {Dropdown},
  props: {
    size: {type: String as PropType<size>, default: 'middle'},
    disabled: {type: Boolean},
    block: {type: Boolean},
  },

  computed: {
    styleClassList (): Array<string> {
      const selectClassPrefix = `${this.cssPrefix}-select`
      const styleClassList = [selectClassPrefix]

      this.actived && styleClassList.push ('actived')

      return styleClassList.map (cls => cls == selectClassPrefix ? selectClassPrefix : `${selectClassPrefix}-${cls}`)
    }
  },

  setup (props) {
    const actived = ref (true)
    const cssPrefix = inject<Ref<string>> ('ezfe-css-prefix', ref('ezfe'))

    return {
      actived,
      cssPrefix
    }
  }
})
</script>
