import Vue from "vue";
import Cards from "./cards/frame/CardsFrame.vue";
import Alert from "./alerts/Alerts.vue";
import { Button } from "./buttons/Buttons.vue";
import CalendarButton from "./buttons/CalendarButton.vue";
import ExportButton from "./buttons/ExportButton.vue";
import ShareButton from "./buttons/ShareButton.vue";
import { PageHeader } from "./pageHeaders/PageHeaders.vue";

[
  Cards,
  Alert,
  Button,
  CalendarButton,
  ExportButton,
  ShareButton,
  PageHeader,
].map((c) => {
  Vue.component(`sd-${c.name}`, c);
});

