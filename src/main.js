import Vue from 'vue'
import App from './App.vue'

import '@/assets/css/tailwind.css';

import axios from 'axios';
Vue.prototype.$axios = axios;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
