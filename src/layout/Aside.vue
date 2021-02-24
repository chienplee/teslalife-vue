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
          <a-menu-item key="breadcrumb">
            <router-link
              @click.native="toggleCollapsed"
              to="/components/breadcrumb"
            >
              Breadcrumb
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
          <a-menu-item key="drawer">
            <router-link
              @click.native="toggleCollapsed"
              to="/components/drawer"
            >
              Drawer
            </router-link>
          </a-menu-item>
          <a-menu-item key="empty">
            <router-link @click.native="toggleCollapsed" to="/components/empty">
              Empty
            </router-link>
          </a-menu-item>
          <a-menu-item key="form">
            <router-link @click.native="toggleCollapsed" to="/components/form">
              Form
            </router-link>
          </a-menu-item>
          <a-menu-item key="grid">
            <router-link @click.native="toggleCollapsed" to="/components/grid">
              Grid
            </router-link>
          </a-menu-item>
          <a-menu-item key="dropdown">
            <router-link
              @click.native="toggleCollapsed"
              to="/components/dropdown"
            >
              Dropdown
            </router-link>
          </a-menu-item>
          <a-menu-item key="input">
            <router-link @click.native="toggleCollapsed" to="/components/input">
              Input
            </router-link>
          </a-menu-item>
          <a-menu-item key="list">
            <router-link @click.native="toggleCollapsed" to="/components/list">
              List
            </router-link>
          </a-menu-item>
          <a-menu-item key="menu">
            <router-link @click.native="toggleCollapsed" to="/components/menu">
              Menu
            </router-link>
          </a-menu-item>
          <a-menu-item key="message">
            <router-link
              @click.native="toggleCollapsed"
              to="/components/message"
            >
              Message
            </router-link>
          </a-menu-item>
          <a-menu-item key="modal">
            <router-link @click.native="toggleCollapsed" to="/components/modal">
              Modal
            </router-link>
          </a-menu-item>
          <a-menu-item key="notification">
            <router-link
              @click.native="toggleCollapsed"
              to="/components/notification"
            >
              Notification
            </router-link>
          </a-menu-item>
          <a-menu-item key="pageHeader">
            <router-link
              @click.native="toggleCollapsed"
              to="/components/pageHeader"
            >
              PageHeader
            </router-link>
          </a-menu-item>
          <a-menu-item key="pagination">
            <router-link
              @click.native="toggleCollapsed"
              to="/components/pagination"
            >
              Pagination
            </router-link>
          </a-menu-item>
          <a-menu-item key="popConfirm">
            <router-link
              @click.native="toggleCollapsed"
              to="/components/popConfirm"
            >
              PopConfirm
            </router-link>
          </a-menu-item>
          <a-menu-item key="popover">
            <router-link
              @click.native="toggleCollapsed"
              to="/components/popover"
            >
              Popover
            </router-link>
          </a-menu-item>
          <a-menu-item key="progressbar">
            <router-link
              @click.native="toggleCollapsed"
              to="/components/progressbar"
            >
              Progress Bar
            </router-link>
          </a-menu-item>
          <a-menu-item key="radio">
            <router-link @click.native="toggleCollapsed" to="/components/radio">
              Radio
            </router-link>
          </a-menu-item>
          <a-menu-item key="rate">
            <router-link @click.native="toggleCollapsed" to="/components/rate">
              Rate
            </router-link>
          </a-menu-item>
          <a-menu-item key="result">
            <router-link
              @click.native="toggleCollapsed"
              to="/components/result"
            >
              Result
            </router-link>
          </a-menu-item>
          <a-menu-item key="select">
            <router-link
              @click.native="toggleCollapsed"
              to="/components/select"
            >
              Select
            </router-link>
          </a-menu-item>
          <a-menu-item key="skeleton">
            <router-link
              @click.native="toggleCollapsed"
              to="/components/skeleton"
            >
              Skeleton
            </router-link>
          </a-menu-item>
          <a-menu-item key="slider">
            <router-link
              @click.native="toggleCollapsed"
              to="/components/slider"
            >
              Slider
            </router-link>
          </a-menu-item>
          <a-menu-item key="spiner">
            <router-link
              @click.native="toggleCollapsed"
              to="/components/spiner"
            >
              Spiner
            </router-link>
          </a-menu-item>
          <a-menu-item key="statistic">
            <router-link
              @click.native="toggleCollapsed"
              to="/components/statistic"
            >
              Statistic
            </router-link>
          </a-menu-item>
        </a-sub-menu>

        <a-sub-menu key="chart">
          <template slot="title"><DiscIcon /><span>Charts</span></template>
          <a-menu-item key="chartJs">
            <router-link @click.native="toggleCollapsed" to="/chart/chart-js">
              Chart js
            </router-link>
          </a-menu-item>
          <a-menu-item key="googleChart">
            <router-link
              @click.native="toggleCollapsed"
              to="/chart/google-chart"
            >
              Google Chart
            </router-link>
          </a-menu-item>
        </a-sub-menu>

        <a-sub-menu key="forms">
          <template slot="title"><DiscIcon /><span>Forms</span></template>
          <a-menu-item key="alerts">
            <router-link
              @click.native="toggleCollapsed"
              to="/forms/form-layout"
            >
              Form Layout
            </router-link>
          </a-menu-item>
          <a-menu-item key="form-elements">
            <router-link
              @click.native="toggleCollapsed"
              to="/forms/form-elements"
            >
              Form Elements
            </router-link>
          </a-menu-item>
          <a-menu-item key="form-components">
            <router-link
              @click.native="toggleCollapsed"
              to="/forms/form-components"
            >
              Form Components
            </router-link>
          </a-menu-item>
          <a-menu-item key="form-validation">
            <router-link
              @click.native="toggleCollapsed"
              to="/forms/form-validation"
            >
              Form Validation
            </router-link>
          </a-menu-item>
        </a-sub-menu>

        <a-sub-menu key="icons">
          <template slot="title"><DiscIcon /><span>Icons</span></template>
          <a-menu-item key="featherIcons">
            <router-link
              @click.native="toggleCollapsed"
              to="/icons/featherIcons"
            >
              FeatherIcons
            </router-link>
          </a-menu-item>
          <a-menu-item key="antdIcons">
            <router-link @click.native="toggleCollapsed" to="/icons/antdIcons">
              Ant Design Icons
            </router-link>
          </a-menu-item>
          <a-menu-item key="fa">
            <router-link @click.native="toggleCollapsed" to="/icons/fa">
              FontAwesome Icons
            </router-link>
          </a-menu-item>
        </a-sub-menu>

        <a-sub-menu key="maps">
          <template slot="title"><DiscIcon /><span>Maps</span></template>
          <a-menu-item key="google">
            <router-link @click.native="toggleCollapsed" to="/maps/google">
              Google Maps
            </router-link>
          </a-menu-item>
          <a-menu-item key="leaflet">
            <router-link @click.native="toggleCollapsed" to="/maps/leaflet">
              Leaflet
            </router-link>
          </a-menu-item>
          <a-menu-item key="vector">
            <router-link @click.native="toggleCollapsed" to="/maps/vector">
              Vector
            </router-link>
          </a-menu-item>
        </a-sub-menu>

        <a-sub-menu key="tables">
          <template slot="title"><CpuIcon /><span>Table</span></template>
          <a-menu-item key="table">
            <router-link @click.native="toggleCollapsed" to="/tables/basic">
              Basic Table
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
        <a-menu-item key="pricing">
          <CircleIcon />
          <span>
            <router-link @click="toggleCollapsed" to="/page/pricing">
              Pricing
            </router-link>
          </span>
        </a-menu-item>
        <a-menu-item key="banners">
          <CircleIcon />
          <span>
            <router-link @click="toggleCollapsed" to="/page/banners">
              Banners
            </router-link>
          </span>
        </a-menu-item>
      </a-menu-item-group>
    </template>
  </a-menu>
</template>
<script>
import {
  HomeIcon,
  CircleIcon,
  LayersIcon,
  DiscIcon,
  CpuIcon,
} from "vue-feather-icons";
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
    DiscIcon,
    CpuIcon,
  },
};
</script>
