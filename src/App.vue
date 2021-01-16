<template>
  <ThemeProvider
    :theme="{
      ...theme,
      rtl,
      topMenu,
      darkMode,
    }"
  >
    <WithAdminLayout />
  </ThemeProvider>
</template>
<script>
import { ThemeProvider } from "vue-styled-components";
import { theme } from "./config/theme/themeVariables";
import WithAdminLayout from "./layout/withAdminLayout";
import { mapGetters } from "vuex";

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
  computed: {
    ...mapGetters(["rtl", "darkMode", "topMenu"]),
  },
};
</script>
