import { createWebHistory, createRouter, createWebHashHistory, createMemoryHistory } from "vue-router";
import FeaturesRoutes from "./FeaturesRoutes";
import PageRoutes from "./PageRoutes";
import {defineAsyncComponent  } from 'vue';


  const routes = [
    {
      path: "/",
      name: "dashboard",
      component: defineAsyncComponent(() => import("@/view/dashboard")),
    },    
    {
      path: "/components/alerts",
      name: "alerts",
      component: defineAsyncComponent(() => import("@/view/uiElements/Alerts.vue")),
    },
    {
      path: "/components/avatar",
      name: "avatar",
      component: defineAsyncComponent(() => import("@/view/uiElements/Avatar.vue")),
    },
    {
      path: "/components/badge",
      name: "badge",
      component: defineAsyncComponent(() => import("@/view/uiElements/Badge.vue")),
    },
    {
      path: "/components/breadcrumb",
      name: "breadcrumb",
      component: defineAsyncComponent(() => import("@/view/uiElements/Breadcrumb.vue")),
    },
    {
      path: "/components/calendar",
      name: "calendar",
      component: defineAsyncComponent(() => import("@/view/uiElements/Calendar")),
    },
    {
      path: "/components/cards",
      name: "cards",
      component: defineAsyncComponent(() => import("@/view/uiElements/Cards")),
    },    
    {
      path: "/components/button",
      name: "button",
      component: defineAsyncComponent(() => import("@/view/uiElements/Button.vue")),
    },
    {
      path: "/components/checkbox",
      name: "checkbox",
      component: defineAsyncComponent(() => import("@/view/uiElements/Checkbox")),
    },
    {
      path: "/components/collapse",
      name: "collapse",
      component: defineAsyncComponent(() => import("@/view/uiElements/Collapse")),
    },
    {
      path: "/components/comments",
      name: "comments",
      component: defineAsyncComponent(() => import("@/view/uiElements/Comments")),
    },
    {
      path: "/components/dash-base",
      name: "dash-base",
      component: defineAsyncComponent(() => import("@/view/uiElements/DashboardBase")),
    },
    {
      path: "/components/datePicker",
      name: "datePicker",
      component: defineAsyncComponent(() => import("@/view/uiElements/DatePicker")),
    },
    {
      path: "/components/drawer",
      name: "drawer",
      component: defineAsyncComponent(() => import("@/view/uiElements/Drawer")),
    },
    {
      path: "/components/empty",
      name: "empty",
      component: defineAsyncComponent(() => import("@/view/uiElements/Empty")),
    },
    {
      path: "/components/grid",
      name: "grid",
      component: defineAsyncComponent(() => import("@/view/uiElements/Grid")),
    },
    {
      path: "/components/dropdown",
      name: "dropdown",
      component: defineAsyncComponent(() => import("@/view/uiElements/Dropdown")),
    },
    {
      path: "/components/input",
      name: "input",
      component: defineAsyncComponent(() => import("@/view/uiElements/Input")),
    },
    {
      path: "/components/list",
      name: "list",
      component: defineAsyncComponent(() => import("@/view/uiElements/List")),
    },
    {
      path: "/components/menu",
      name: "menu",
      component: defineAsyncComponent(() => import("@/view/uiElements/Menu")),
    },
    {
      path: "/components/message",
      name: "message",
      component: defineAsyncComponent(() => import("@/view/uiElements/Message")),
    },
    {
      path: "/components/autoComplete",
      name: "autoComplete",
      component: defineAsyncComponent(() => import("@/view/uiElements/AutoComplete")),
    },
    {
      path: "/components/cascader",
      name: "cascader",
      component: defineAsyncComponent(() => import("@/view/uiElements/Cascader")),
    },
    {
      path: "/components/modal",
      name: "modal",
      component: defineAsyncComponent(() => import("@/view/uiElements/Modal")),
    },
    {
      path: "/components/notification",
      name: "notification",
      component: defineAsyncComponent(() => import("@/view/uiElements/Notification")),
    },
    {
      path: "/components/pageHeader",
      name: "pageHeader",
      component: defineAsyncComponent(() => import("@/view/uiElements/PageHeader")),
    },
    {
      path: "/components/pagination",
      name: "pagination",
      component: defineAsyncComponent(() => import("@/view/uiElements/Pagination")),
    },
    {
      path: "/components/popConfirm",
      name: "popConfirm",
      component: defineAsyncComponent(() => import("@/view/uiElements/PopConfirm")),
    },
    {
      path: "/components/popover",
      name: "popover",
      component: defineAsyncComponent(() => import("@/view/uiElements/Popover")),
    },
    {
      path: "/components/progressbar",
      name: "progressbar",
      component: defineAsyncComponent(() => import("@/view/uiElements/Progressbar")),
    },
    {
      path: "/components/radio",
      name: "radio",
      component: defineAsyncComponent(() => import("@/view/uiElements/Radio")),
    },
    {
      path: "/components/rate",
      name: "rate",
      component: defineAsyncComponent(() => import("@/view/uiElements/Rate")),
    },
    {
      path: "/components/result",
      name: "result",
      component: defineAsyncComponent(() => import("@/view/uiElements/Result")),
    },
    {
      path: "/components/select",
      name: "select",
      component: defineAsyncComponent(() => import("@/view/uiElements/Select")),
    },
    {
      path: "/components/skeleton",
      name: "skeleton",
      component: defineAsyncComponent(() => import("@/view/uiElements/Skeleton")),
    },
    {
      path: "/components/spiner",
      name: "spiner",
      component: defineAsyncComponent(() => import("@/view/uiElements/Spiner")),
    },
    {
      path: "/components/statistic",
      name: "statistic",
      component: defineAsyncComponent(() => import("@/view/uiElements/Statistic")),
    },    
     
    /*
    {
      path: "/components/carousel",
      name: "carousel",
      component: defineAsyncComponent(() => import("@/view/uiElements/Carousel")),
    },
    {
      path: "/components/slider",
      name: "slider",
      component: defineAsyncComponent(() => import("@/view/uiElements/Slider")),
    },
    {
      path: "/tables/basic",
      name: "table",
      component: defineAsyncComponent(() => import("@/view/table/table.vue")),
    },
    */    
    ...PageRoutes,
   ...FeaturesRoutes
  ]



const router = createRouter({
  history: createWebHistory(),
  hash: createWebHashHistory(),
  abstract: createMemoryHistory(),
  routes,
});

export default router;