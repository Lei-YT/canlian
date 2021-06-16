import Vue from 'vue'
import {Layout} from 'vue-ydui/dist/lib.rem/layout';
import {NavBar, NavBarBackIcon, NavBarNextIcon} from 'vue-ydui/dist/lib.rem/navbar';
import {CitySelect} from 'vue-ydui/dist/lib.rem/cityselect';
import {ActionSheet} from 'vue-ydui/dist/lib.rem/actionsheet';

Vue.component(ActionSheet.name, ActionSheet);

Vue.component(CitySelect.name, CitySelect);
Vue.component(Layout.name, Layout);
Vue.component(NavBar.name, NavBar);
Vue.component(NavBarBackIcon.name, NavBarBackIcon);
Vue.component(NavBarNextIcon.name, NavBarNextIcon);


import topBar from "@@/top-nav";
import page from "@@/page";


Vue.component('topBar',topBar)
Vue.component('page',page)
