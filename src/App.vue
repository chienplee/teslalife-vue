<template>
  <div v-if="isLoading" class="spin">
    <a-spin />
  </div>
  <ThemeProvider
    v-else
    :theme="{
      ...theme,
      rtl,
      topMenu,
      darkMode,
    }"
  >
    <Suspense>
      <template #default>
        <!-- <WithAuthLayout /> -->
        <router-view></router-view>
      </template>
      <template #fallback>
        <div class="spin">
          <a-spin />
        </div>
      </template>
    </Suspense>
  </ThemeProvider>
</template>
<script>
import { ThemeProvider } from 'vue3-styled-components';
import { theme } from './config/theme/themeVariables';
import { computed } from 'vue';
import { useStore } from 'vuex';

// const WithAdminLayout = defineAsyncComponent(() => import('./layout/withAdminLayout'));
// const WithAuthLayout = defineAsyncComponent(() => import('./layout/withAuthLayout'));

export default {
  name: 'App',
  components: {
    ThemeProvider,
    // WithAuthLayout,
  },
  setup() {
    const { state } = useStore();
    const rtl = computed(() => state.themeLayout.rtlData);
    const isLoading = computed(() => state.themeLayout.loading);
    const darkMode = computed(() => state.themeLayout.data);
    const topMenu = computed(() => state.themeLayout.topMenu);

    return {
      theme,
      rtl,
      darkMode,
      topMenu,
      isLoading,
    };
  },
};
</script>
