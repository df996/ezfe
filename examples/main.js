import Vue from 'vue'
import App from './App.vue'
//import router from './router'

import message from '@ezfe/message'
message.config ({
  top: 11180,
  duration: 9999
})
message.success ('main.js')

Vue.config.productionTip = false

new Vue({
  //router,
  render: h => h(App),
}).$mount('#app')
