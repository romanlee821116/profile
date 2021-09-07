import Vue from 'vue';
import VueFullPage from 'vue-fullpage.js';
import App from './App.vue';
import './css/style.css';

Vue.use(VueFullPage);

Vue.config.productionTip = false;
new Vue({
  // eslint-disable-next-line arrow-parens
  render: h => h(App),
}).$mount('#app');
