import Vue from "vue";
import Cards from "../../components/cards/frame/CardsFrame.vue";
import Alert from "../../components/alerts/Alerts.vue";
import {Button, BtnGroup} from "../../components/buttons/Buttons.vue";
import CalendarButton from "../../components/buttons/CalendarButton.vue";
import ExportButton from "../../components/buttons/ExportButton.vue";
import ShareButton from "../../components/buttons/ShareButton.vue";
import {PageHeader} from "../../components/pageHeaders/PageHeaders.vue";

[
  Cards,
  Alert,
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
].map((c) => {  
  Vue.component(`sd-${c.name}`, c);
});
