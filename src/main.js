// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'normalize.css'
import 'lib-flexible'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'
import Lytab from 'ly-tab'

Vue.use(MintUI)
Vue.use(Lytab)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
