import Vue from 'vue';
import App from './App.vue';

import router from "./routes/AdminRoutes";
import store from "@/vuex/store";
import './static/css/style.css';
// Vue 3rd party plugins
import "@/core/plugins/ant-design";
import "@/core/plugins/fonts";
import "./components/index";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
