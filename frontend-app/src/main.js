import Vue from 'vue'
import App from './App.vue'
import store from '@/store'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

import '@/plugins/axios'
import '@/plugins/layout'
import '@/theme/index.less'

import 'vue-ydui/dist/ydui.base.css';

import mixins from '@/mixins'
Vue.mixin(mixins)

import lodash from 'lodash'
Vue.prototype._ = lodash

if (process.env.NODE_ENV === 'development') {
  require('@/mock')
}

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
