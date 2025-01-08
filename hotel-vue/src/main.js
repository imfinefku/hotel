import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css/normalize.css' 
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/common.css'
Vue.config.productionTip = false;
import ECharts from "vue-echarts";
Vue.component("v-chart", ECharts);
Vue.use(ElementUI)
Vue.prototype.$baseFileUrl = process.env.VUE_APP_BASE_FILE_URL
Vue.prototype.$sysTitle = process.env.VUE_APP_SYSTITLE
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
