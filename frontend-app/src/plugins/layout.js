import Vue from 'vue'
/**
 * custom component
 */
import page from "@@/page";
Vue.component('page',page)

import indexPage from "@@/indexPage";
Vue.component('indexPage',indexPage)

import myIndexPage from "@@/myIndexPage";
Vue.component('myIndexPage',myIndexPage)

import tabbarBottom from "@@/tabbarBottom";
Vue.component('tabbarBottom',tabbarBottom)

/**
 * ydui
 */
import {Layout} from 'vue-ydui/dist/lib.rem/layout';
/* 使用px：import {Layout} from 'vue-ydui/dist/lib.px/layout'; */

Vue.component('Layout', Layout);
