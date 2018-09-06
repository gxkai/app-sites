import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import '@/assets/font/iconfont.css';
import './utils/flexible';
import funtion from './utils/function';

Vue.use(Vuetify);

Vue.use(Vant);

Vue.use(funtion);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
