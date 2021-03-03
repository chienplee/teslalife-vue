import { createWebHistory, createRouter } from "vue-router";
// import FeaturesRoutes from "./FeaturesRoutes";
// import PageRoutes from "./PageRoutes";


  const routes = [
    {
      path: "/",
      name: "dashboard",
      component: () => import("@/view/pages/BlankPage.vue"),
    },
    {
      // path: "*",
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: "PageNotFound",
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/components/alerts",
      name: "alerts",
      component: () => import("@/view/uiElements/Alerts.vue"),
    },
    {
      path: "/components/avatar",
      name: "avatar",
      component: () => import("@/view/uiElements/Avatar.vue"),
    },
    {
      path: "/components/badge",
      name: "badge",
      component: () => import("@/view/uiElements/Badge.vue"),
    },
    {
      path: "/components/breadcrumb",
      name: "breadcrumb",
      component: () => import("@/view/uiElements/Breadcrumb.vue"),
    },
    {
      path: "/components/calendar",
      name: "calendar",
      component: () => import("@/view/uiElements/Calendar"),
    },
    {
      path: "/components/cards",
      name: "cards",
      component: () => import("@/view/uiElements/Cards"),
    },
    {
      path: "/components/carousel",
      name: "carousel",
      component: () => import("@/view/uiElements/Carousel"),
    },
    {
      path: "/components/checkbox",
      name: "checkbox",
      component: () => import("@/view/uiElements/Checkbox"),
    },
    {
      path: "/components/collapse",
      name: "collapse",
      component: () => import("@/view/uiElements/Collapse"),
    },
    /*
    {
      path: "/components/autoComplete",
      name: "autoComplete",
      component: () => import("@/view/uiElements/AutoComplete"),
    },
    {
      path: "/components/button",
      name: "button",
      component: () => import("@/view/uiElements/Button.vue"),
    },
    {
      path: "/components/cascader",
      name: "cascader",
      component: () => import("@/view/uiElements/Cascader"),
    },
    
    {
      path: "/components/comments",
      name: "comments",
      component: () => import("@/view/uiElements/Comments"),
    },
    {
      path: "/components/dash-base",
      name: "dash-base",
      component: () => import("@/view/uiElements/DashboardBase"),
    },
    {
      path: "/components/datePicker",
      name: "datePicker",
      component: () => import("@/view/uiElements/DatePicker"),
    },
    {
      path: "/components/dropdown",
      name: "dropdown",
      component: () => import("@/view/uiElements/Dropdown"),
    },
    {
      path: "/components/drawer",
      name: "drawer",
      component: () => import("@/view/uiElements/Drawer"),
    },
    {
      path: "/components/empty",
      name: "empty",
      component: () => import("@/view/uiElements/Empty"),
    },
    {
      path: "/components/form",
      name: "form",
      component: () => import("@/view/uiElements/Form"),
    },
    {
      path: "/components/grid",
      name: "grid",
      component: () => import("@/view/uiElements/Grid"),
    },
    {
      path: "/components/input",
      name: "input",
      component: () => import("@/view/uiElements/Input"),
    },
    {
      path: "/components/list",
      name: "list",
      component: () => import("@/view/uiElements/List"),
    },
    {
      path: "/components/menu",
      name: "menu",
      component: () => import("@/view/uiElements/Menu"),
    },
    {
      path: "/components/message",
      name: "message",
      component: () => import("@/view/uiElements/Message"),
    },
    {
      path: "/components/modal",
      name: "modal",
      component: () => import("@/view/uiElements/Modal"),
    },
    {
      path: "/components/notification",
      name: "notification",
      component: () => import("@/view/uiElements/Notification"),
    },
    {
      path: "/components/pageHeader",
      name: "pageHeader",
      component: () => import("@/view/uiElements/PageHeader"),
    },
    {
      path: "/components/pagination",
      name: "pagination",
      component: () => import("@/view/uiElements/Pagination"),
    },
    {
      path: "/components/popConfirm",
      name: "popConfirm",
      component: () => import("@/view/uiElements/PopConfirm"),
    },
    {
      path: "/components/popover",
      name: "popover",
      component: () => import("@/view/uiElements/Popover"),
    },
    {
      path: "/components/progressbar",
      name: "progressbar",
      component: () => import("@/view/uiElements/Progressbar"),
    },
    {
      path: "/components/radio",
      name: "radio",
      component: () => import("@/view/uiElements/Radio"),
    },
    {
      path: "/components/rate",
      name: "rate",
      component: () => import("@/view/uiElements/Rate"),
    },
    {
      path: "/components/result",
      name: "result",
      component: () => import("@/view/uiElements/Result"),
    },
    {
      path: "/components/select",
      name: "select",
      component: () => import("@/view/uiElements/Select"),
    },
    {
      path: "/components/skeleton",
      name: "skeleton",
      component: () => import("@/view/uiElements/Skeleton"),
    },
    {
      path: "/components/slider",
      name: "slider",
      component: () => import("@/view/uiElements/Slider"),
    },
    {
      path: "/components/spiner",
      name: "spiner",
      component: () => import("@/view/uiElements/Spiner"),
    },
    {
      path: "/components/statistic",
      name: "statistic",
      component: () => import("@/view/uiElements/Statistic"),
    },    
    {
      path: "/tables/basic",
      name: "table",
      component: () => import("@/view/table/table.vue"),
    },
    ...FeaturesRoutes,
    ...PageRoutes,
    */
  ]



const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;