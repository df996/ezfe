<template>
  <div ref='dropdown'>
    <slot name='default'></slot>
  </div>
</template>

<script lang='ts'>
import {defineComponent, ComponentPublicInstance} from 'vue'
export default defineComponent ({
  name: 'EZFE-Dropdown',

  mounted () {
    this.$nextTick (() => this.update ())
  },

  updated () {
    this.update ()
  },

  data () {
    return {
      wrapper: document.createElement ('div')
    }
  },

  methods: {
    findComponentUpward (context: ComponentPublicInstance, componentName: string) {
      let parent = context.$parent
      let name = parent?.$options.name

      while (parent && (!name || componentName != name)) {
        parent = parent.$parent
        if (parent) {
          name = parent?.$options.name
        }
      }

      return parent
    },

    update () {
      const parent = this.findComponentUpward (this, 'EZFE-Select')
      const parentWidth = parent?.$el.offsetWidth
      const parentHeight = parent?.$el.offsetHeight
      const elem = this.$refs.dropdown as HTMLElement
      elem.setAttribute ('style', `
        width: ${parentWidth}px;
      `)

      this.wrapper.append (elem)
      this.wrapper.setAttribute ('class', 'ezfe-dropdown-wrapper')
      document.body.append (this.wrapper)
    }
  }
})
</script>
