<template>
  <a-menu
    :default-selected-keys="['1']"
    :default-open-keys="['sub1']"
    :mode="mode"
    :theme="darkMode ? 'dark' : 'light'"
    :open-keys="openKeys"
    @openChange="onOpenChange"
  >
    <template>
      <a-sub-menu key="dashboard">
        <template slot="title"><HomeIcon /><span>Dashboard</span></template>
        <a-menu-item key="home">
          <router-link @click.native="toggleCollapsed" to="/">
            Social Media
          </router-link>
        </a-menu-item>
        <a-menu-item key="business">
          <router-link @click.native="toggleCollapsed" to="/business">
            Fintech / Business
          </router-link>
        </a-menu-item>
        <a-menu-item key="performance">
          <router-link @click.native="toggleCollapsed" to="/performance">
            Site Performance
          </router-link>
        </a-menu-item>
        <a-menu-item key="eco">
          <router-link @click.native="toggleCollapsed" to="/eco">
            Ecommerce
          </router-link>
        </a-menu-item>
        <a-menu-item key="crm">
          <router-link @click.native="toggleCollapsed" to="/crm">
            CRM
          </router-link>
        </a-menu-item>
        <a-menu-item key="sales">
          <router-link @click.native="toggleCollapsed" to="/sales">
            Sales Performance
          </router-link>
        </a-menu-item>
      </a-sub-menu>
    </template>
  </a-menu>
</template>
<script>
import { HomeIcon } from "vue-feather-icons";
import VueTypes from "vue-types";
export default {
  name: "AsideItems",
  props: {
    toggleCollapsed: VueTypes.func,
  },
  data() {
    return {
      mode: "inline",
      rootSubmenuKeys: ["sub1", "sub2", "sub4"],
      openKeys: ["sub1"],
      darkMode: false,
    };
  },
  methods: {
    onOpenChange(openKeys) {
      const latestOpenKey = openKeys.find(
        (key) => this.openKeys.indexOf(key) === -1
      );
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys;
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    },
  },
  components: {
    HomeIcon,
  },
};
</script>
