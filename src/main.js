
import app from './config/configApp'

import router from "./routes/AdminRoutes";
import store from "@/vuex/store";
import './static/css/style.css';
// Vue 3rd party plugins
import "@/core/plugins/ant-design";
import "@/core/plugins/fonts";
// import "@/core/plugins/maps";
import "./core/components/custom";

app.config.productionTip = false;
app.use(router);
app.use(store);
app.mount('#app');
