<template>
  <ThemeProvider
    :theme="{
      ...theme,
      rtl: false,
      topMenu: false,
      darkMode: false,
    }"
  >
    <WithAdminLayout />
  </ThemeProvider>
</template>
<script>
import { ThemeProvider } from "vue-styled-components";
import { theme } from "./config/theme/themeVariables";
import WithAdminLayout from "./layout/withAdminLayout";

export default {
  name: "App",
  components: {
    ThemeProvider,
    WithAdminLayout,
    //AirplayIcon
  },
  data() {
    return {
      theme,
    };
  },

  methods: {},
  created() {
    this.$store.dispatch("ACTION_LOAD_SIDEBAR_MENU");
  },
};
</script>
