import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import routes from './routes';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);

export const globalStore = new Vue({
  data: {
    isLoggedOn: false,
  },
});

const router = new VueRouter({mode: 'history', routes});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
