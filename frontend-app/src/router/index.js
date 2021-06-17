import Vue from 'vue'
import VueRouter from 'vue-router'
import Util from '@/libs/util';

Vue.use(VueRouter)
const routes = [
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/',
    name: 'home',
    meta: {
      title: ''
    },
    component: (resolve) => require(['@/views/index.vue'], resolve)
  },
  {
    name: 'login',
    meta: {
      title: ''
    },
    component: (resolve) => require(['@/views/login.vue'], resolve)
  }
];
// add route path
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});
const router = new VueRouter({
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
router.beforeEach((to, from, next) => {
  // ViewUI.LoadingBar.start();
  Util.title(to.meta.title);
  next();
});

router.afterEach((to, from, next) => {
  // ViewUI.LoadingBar.finish();
});

export default router
