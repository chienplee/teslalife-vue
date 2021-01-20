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

      <a-menu-item-group key="features">
        <p slot="title" class="sidebar-nav-title">FEATURES</p>
        <a-sub-menu key="components">
          <template slot="title"
            ><LayersIcon /><span>UI Elements</span></template
          >
          <a-menu-item key="alerts">
            <router-link
              @click.native="toggleCollapsed"
              to="/components/alerts"
            >
              Alerts
            </router-link>
          </a-menu-item>
          <a-menu-item key="avatar">
            <router-link
              @click.native="toggleCollapsed"
              to="/components/avatar"
            >
              Avatar
            </router-link>
          </a-menu-item>
          <a-menu-item key="autoComplete">
            <router-link
              @click.native="toggleCollapsed"
              to="/components/autoComplete"
            >
              AutoComplete
            </router-link>
          </a-menu-item>
          <a-menu-item key="button">
            <router-link
              @click.native="toggleCollapsed"
              to="/components/button"
            >
              Buttons
            </router-link>
          </a-menu-item>
          <a-menu-item key="badge">
            <router-link @click.native="toggleCollapsed" to="/components/badge">
              Badge
            </router-link>
          </a-menu-item>
          <a-menu-item key="calendar">
            <router-link
              @click.native="toggleCollapsed"
              to="/components/calendar"
            >
              Calendar
            </router-link>
          </a-menu-item>
          <a-menu-item key="cards">
            <router-link @click.native="toggleCollapsed" to="/components/cards">
              Cards
            </router-link>
          </a-menu-item>
          <a-menu-item key="carousel">
            <router-link
              @click.native="toggleCollapsed"
              to="/components/carousel"
            >
              Carousel
            </router-link>
          </a-menu-item>
          <a-menu-item key="cascader">
            <router-link
              @click.native="toggleCollapsed"
              to="/components/cascader"
            >
              Cascader
            </router-link>
          </a-menu-item>
          <a-menu-item key="checkbox">
            <router-link
              @click.native="toggleCollapsed"
              to="/components/checkbox"
            >
              Checkbox
            </router-link>
          </a-menu-item>
          <a-menu-item key="collapse">
            <router-link
              @click.native="toggleCollapsed"
              to="/components/collapse"
            >
              Collapse
            </router-link>
          </a-menu-item>
          <a-menu-item key="comments">
            <router-link
              @click.native="toggleCollapsed"
              to="/components/comments"
            >
              Comments
            </router-link>
          </a-menu-item>
          <a-menu-item key="dash-base">
            <router-link
              @click.native="toggleCollapsed"
              to="/components/dash-base"
            >
              Dashboard Base
            </router-link>
          </a-menu-item>
          <a-menu-item key="datePicker">
            <router-link
              @click.native="toggleCollapsed"
              to="/components/datePicker"
            >
              DatePicker
            </router-link>
          </a-menu-item>
        </a-sub-menu>
      </a-menu-item-group>

      <a-menu-item-group key="pages">
        <p slot="title" class="sidebar-nav-title">Pages</p>
        <a-menu-item key="starter">
          <CircleIcon />
          <span>
            <router-link @click="toggleCollapsed" to="/starter">
              Blank Page
            </router-link>
          </span>
        </a-menu-item>
      </a-menu-item-group>
    </template>
  </a-menu>
</template>
<script>
import { HomeIcon, CircleIcon, LayersIcon } from "vue-feather-icons";
import VueTypes from "vue-types";
import { mapGetters } from "vuex";

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
    };
  },
  computed: {
    ...mapGetters(["darkMode"]),
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
    CircleIcon,
    LayersIcon,
  },
};
</script>
