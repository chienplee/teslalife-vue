import app from './config/configApp';

import router from './routes/AdminRoutes';
import store from '@/vuex/store';
import './static/css/style.css';
// Vue 3rd party plugins
import '@/core/plugins/ant-design';
import '@/core/plugins/fonts';
import '@/core/plugins/maps';
import '@/core/plugins/apexcharts';
import '@/core/components/custom';
import '@/core/components/style';
// import '@/core/plugins/custom-scroll-bar';

// Include Dependencies
import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

app.config.productionTip = false;
app.use(VueFusionCharts, FusionCharts, Column2D, FusionTheme);
app.use(router);
app.use(store);
app.mount('#app');
