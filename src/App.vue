<template>
  <ThemeProvider
    :theme="{
      ...theme,
      rtl,
      topMenu,
      darkMode,
    }"
  >
    <Suspense>
      <template #default>
        <!-- The component I want to render -->
        <WithAdminLayout />
      </template>
      <template #fallback>
        <!-- Fallback component shown while my component is not ready -->
        <div class="spin">
          <a-spin />
        </div>
      </template>
    </Suspense>
  </ThemeProvider>
</template>
<script>
import { ThemeProvider } from "vue3-styled-components";
import { theme } from "./config/theme/themeVariables";
import { defineAsyncComponent } from "vue";

const WithAdminLayout = defineAsyncComponent(() =>
  import("./layout/withAdminLayout")
);

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
    rtl() {
      return this.$store.state.themeLayout.rtl;
    },
    darkMode() {
      return this.$store.state.themeLayout.darkMode;
    },

    topMenu() {
      return this.$store.state.themeLayout.topMenu;
    },
  },
};
</script>
