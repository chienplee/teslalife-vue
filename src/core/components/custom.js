import Vue from "vue";
import { Fragment } from 'vue-fragment'
import Cards from "../../components/cards/frame/CardsFrame.vue";
import Alerts from "../../components/alerts/Alerts.vue";
import {Button, BtnGroup} from "../../components/buttons/Buttons.vue";
import CalendarButton from "../../components/buttons/CalendarButton.vue";
import ExportButton from "../../components/buttons/ExportButton.vue";
import ShareButton from "../../components/buttons/ShareButton.vue";
import { PageHeader } from "../../components/pageHeaders/PageHeaders.vue";
import { ChartJsBarChart, ChartjsHorizontalChart, ChartjsStackedChart } from "../../components/charts/chartjs.vue";
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
    name: "ChartjsHorizontalChart",
    ...ChartjsHorizontalChart
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
