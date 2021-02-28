import Vue from "vue";
import { Fragment } from 'vue-fragment'
import Cards from "../../components/cards/frame/CardsFrame.vue";
import Alerts from "../../components/alerts/Alerts.vue";
import {Button, BtnGroup} from "../../components/buttons/Buttons.vue";
import CalendarButton from "../../components/buttons/CalendarButton.vue";
import ExportButton from "../../components/buttons/ExportButton.vue";
import ShareButton from "../../components/buttons/ShareButton.vue";
import { PageHeader } from "../../components/pageHeaders/PageHeaders.vue";
import { GoogleBasicBarChart, GoogleMaterialBarChart, GoogleStackedChart, GoogleCustomColorChart, GoogleComboChart, GoogleLineChart, GoogleMultiLineChart, GoogleBasicPieChart} from "../../components/charts/googleChart.vue";
import { ChartJsBarChart, ChartjsHorizontalChart, ChartjsStackedChart, ChartjsLineChart, ChartjsAreaChart, ChartjsBarChartTransparent, ChartjsPieChart, } from "../../components/charts/chartjs.vue";
import { ChartContainer } from "../../view/dashboard/style";
import Cascader from "../../components/cascader/Cascader";
import Heading from '../../components/heading/Heading';
import AutoComplete from "../../components/autoComplete/autoComplete";
import Dropdown from "../../components/dropdown/Dropdown";
import Popover from "../../components/popup/Popup";
import Modal from "../../components/modals/Modals";

[
  {
    name: "Fragment",
    ...Fragment
  },
  Heading,
  Cards,
  {
    name: "ChartJsBarChart",
    ...ChartJsBarChart
  },
  {
    name: "ChartContainer",
    ...ChartContainer
  },
  {
    name: "ChartjsLineChart",
    ...ChartjsLineChart
  },
  {
    name: "ChartjsAreaChart",
    ...ChartjsAreaChart
  },
  {
    name: "ChartjsBarChartTransparent",
    ...ChartjsBarChartTransparent
  },
  {
    name: "ChartjsPieChart",
    ...ChartjsPieChart
  },
  {
    name: "GoogleMaterialBarChart",
    ...GoogleMaterialBarChart,
  },
  {
    name: "ChartjsHorizontalChart",
    ...ChartjsHorizontalChart
  },
  {
    name: "GoogleBasicBarChart",
    ...GoogleBasicBarChart
  },
  { name: "GoogleStackedChart",
    ...GoogleStackedChart
  },
  { name: "GoogleCustomColorChart",
    ...GoogleCustomColorChart
  },
  { name: "GoogleComboChart",
    ...GoogleComboChart
  },
  { name: "GoogleLineChart",
    ...GoogleLineChart
  },
  { name: "GoogleMultiLineChart",
    ...GoogleMultiLineChart
  },
  { name: "GoogleBasicPieChart",
    ...GoogleBasicPieChart
  },
  {
    name: "ChartjsStackedChart",
    ...ChartjsStackedChart
  },
  Alerts,
  {
    name: "Button",
    ...Button
  },
  {
    name: "BtnGroup",
    ...BtnGroup
  },
  CalendarButton,
  ExportButton,
  ShareButton,
  {name: "PageHeader",
...PageHeader},
Cascader,
AutoComplete,
Dropdown,
Popover,
Modal
].map((c) => {  
  Vue.component(`sd${c.name}`, c);
});
