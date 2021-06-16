import Vue from 'vue'
import App from './App.vue'
import Util from './libs/util';
import store from '@/store'
import router from './router'
import ViewUI from 'view-design';
import YDUI from 'vue-ydui';
import 'vue-ydui/dist/ydui.rem.css';
/* 使用px：import 'vue-ydui/dist/ydui.px.css'; */

import '@/plugins/axios'
import 'view-design/dist/styles/iview.css';
import 'flex.css'
import '@/theme/index.less'

Vue.use(ViewUI);
Vue.use(YDUI);
import mixins from '@/mixins'
Vue.mixin(mixins)
import lodash from 'lodash'
Vue.prototype._ = lodash

if (process.env.NODE_ENV === 'development') {
  require('@/mock')
}

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  ViewUI.LoadingBar.start();
  Util.title(to.meta.title);
  next();
});

router.afterEach((to, from, next) => {
  ViewUI.LoadingBar.finish();
});

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
