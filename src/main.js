/* eslint import/extensions:0 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import App from './App';
import './css/style.css';
import addItem from './components/addItem.vue';
import pendingTrades from './components/pendingTrades.vue';
import itemView from './components/itemView.vue';
import router from './router';
import vueStars from './components/vueStars.vue';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.component('add-item', addItem);
Vue.component('pending-trades', pendingTrades);
Vue.component('item-view', itemView);
Vue.component('vue-stars', vueStars);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
