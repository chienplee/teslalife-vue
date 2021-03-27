import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';

//import the theme
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

import app from '../../config/configApp';
// register VueFusionCharts component
app.use(VueFusionCharts, FusionCharts, Charts, FusionTheme);
