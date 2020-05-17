import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.scss'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import echarts from 'echarts'
import './mock'
// process.env.VUE_APP_MOCK && require('./mock')
Vue.config.productionTip = false
Vue.use(ElementUI, {
  size: 'small'
  // i18n: (key, value) => i18n.t(key, value)
})
Vue.prototype.$echarts = echarts
window.vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
