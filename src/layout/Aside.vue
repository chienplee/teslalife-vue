<template>
  <a-menu
    :default-selected-keys="['1']"
    :default-open-keys="['sub1']"
    :mode="mode"
    :theme="darkMode ? 'dark' : 'light'"
    :open-keys="openKeys"
    @openChange="onOpenChange"
  >
    <a-sub-menu key="dashboard">
      <template v-slot:title><sdFeatherIcons type="home" /><span>Dashboard</span></template>
      <a-menu-item key="home">
        <router-link click="toggleCollapsed" to="/">
          Social Media
        </router-link>
      </a-menu-item>
      <a-menu-item key="business">
        <router-link click="toggleCollapsed" to="/business">
          Fintech / Business
        </router-link>
      </a-menu-item>
      <a-menu-item key="performance">
        <router-link click="toggleCollapsed" to="/performance">
          Site Performance
        </router-link>
      </a-menu-item>
      <a-menu-item key="eco">
        <router-link click="toggleCollapsed" to="/eco">
          Ecommerce
        </router-link>
      </a-menu-item>
      <a-menu-item key="crm">
        <router-link click="toggleCollapsed" to="/crm">
          CRM
        </router-link>
      </a-menu-item>
      <a-menu-item key="sales">
        <router-link click="toggleCollapsed" to="/sales">
          Sales Performance
        </router-link>
      </a-menu-item>
    </a-sub-menu>

    <a-menu-item key="changelog">
      <sdFeatherIcons type="circle" />
      <span>
        <router-link click="toggleCollapsed" to="/changelog">
          Changelog
        </router-link>
      </span>
    </a-menu-item>

    <a-menu-item-group key="applications">
      <template v-slot:title>
        <p class="sidebar-nav-title">APPLICATIONS</p>
      </template>

      <a-sub-menu key="mail">
        <template v-slot:title><sdFeatherIcons type="mail" /><span>Email</span></template>
        <a-menu-item key="inbox">
          <router-link click="toggleCollapsed" to="/app/mail">
            Inbox
          </router-link>
        </a-menu-item>
        <a-menu-item key="single">
          <router-link click="toggleCollapsed" to="/app/mail-single/1585118055048">
            Read Email
          </router-link>
        </a-menu-item>
      </a-sub-menu>

      <a-menu-item key="chat">
        <sdFeatherIcons type="circle" />
        <span>
          <router-link click="toggleCollapsed" to="/app/chat/private/rofiq@gmail.com">
            Chat
          </router-link>
        </span>
      </a-menu-item>

      <a-sub-menu key="ecommerce">
        <template v-slot:title><sdFeatherIcons type="shopping-cart" /><span>eCommerce</span></template>
        <a-menu-item key="product">
          <router-link click="toggleCollapsed" to="/app/ecommerce/product/grid">
            Products
          </router-link>
        </a-menu-item>
        <a-menu-item key="detail">
          <router-link click="toggleCollapsed" to="/app/ecommerce/productDetails/5">
            Product Detail
          </router-link>
        </a-menu-item>
        <a-menu-item key="add-product">
          <router-link click="toggleCollapsed" to="/app/ecommerce/add-product">
            Product Add
          </router-link>
        </a-menu-item>
        <a-menu-item key="edit-product">
          <router-link click="toggleCollapsed" to="/app/ecommerce/edit-product">
            Product Update
          </router-link>
        </a-menu-item>
        <a-menu-item key="orders">
          <router-link click="toggleCollapsed" to="/app/ecommerce/orders">
            Orders
          </router-link>
        </a-menu-item>
        <a-menu-item key="sellers">
          <router-link click="toggleCollapsed" to="/app/ecommerce/sellers">
            Sellers
          </router-link>
        </a-menu-item>
        <a-menu-item key="invoice">
          <router-link click="toggleCollapsed" to="/app/ecommerce/invoice">
            Invoice
          </router-link>
        </a-menu-item>
        <a-menu-item key="cart">
          <router-link click="toggleCollapsed" to="/app/ecommerce/cart">
            Cart
          </router-link>
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="social">
        <template v-slot:title><sdFeatherIcons type="mail" /><span>Social App</span></template>
        <a-menu-item key="profile">
          <router-link click="toggleCollapsed" to="/app/social/profile">
            My Profile
          </router-link>
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="project">
        <template v-slot:title><sdFeatherIcons type="mail" /><span>Projects</span></template>
        <a-menu-item key="grid">
          <router-link click="toggleCollapsed" to="/app/project/grid">
            Project Grid
          </router-link>
        </a-menu-item>
        <a-menu-item key="list">
          <router-link click="toggleCollapsed" to="/app/project/list">
            Project List
          </router-link>
        </a-menu-item>
        <a-menu-item key="createProject">
          <router-link click="toggleCollapsed" to="/app/createProject/grid">
            Project Create
          </router-link>
        </a-menu-item>
        <a-menu-item key="projectDetails">
          <router-link click="toggleCollapsed" to="/app/project/projectDetails/1">
            Project Details
          </router-link>
        </a-menu-item>
      </a-sub-menu>

      <a-menu-item key="calender">
        <sdFeatherIcons type="mail" />
        <span>
          <router-link click="toggleCollapsed" to="/app/calendar">
            Calender
          </router-link>
        </span>
      </a-menu-item>

      <a-sub-menu key="users">
        <template v-slot:title><sdFeatherIcons type="mail" /><span>Users</span></template>
        <a-menu-item key="team">
          <router-link click="toggleCollapsed" to="/app/users/team">
            Team
          </router-link>
        </a-menu-item>
        <a-menu-item key="users-grid">
          <router-link click="toggleCollapsed" to="/app/users/users/user-grid">
            Users Grid
          </router-link>
        </a-menu-item>
        <a-menu-item key="users-list">
          <router-link click="toggleCollapsed" to="/app/users/users/user-list">
            Users List
          </router-link>
        </a-menu-item>
        <a-menu-item key="grid-style">
          <router-link click="toggleCollapsed" to="/app/users/users/grid-style">
            Users Grid Style
          </router-link>
        </a-menu-item>
        <a-menu-item key="grid-group">
          <router-link click="toggleCollapsed" to="/app/users/users/grid-group">
            Users Grid Group
          </router-link>
        </a-menu-item>
        <a-menu-item key="dataTable">
          <router-link click="toggleCollapsed" to="/app/users/dataTable">
            Users table
          </router-link>
        </a-menu-item>
        <a-menu-item key="add-user">
          <router-link click="toggleCollapsed" to="/app/users/add-user/info">
            Add Users
          </router-link>
        </a-menu-item>
      </a-sub-menu>

      <a-sub-menu key="contact">
        <template v-slot:title><sdFeatherIcons type="mail" /><span>Contact</span></template>
        <a-menu-item key="grid">
          <router-link click="toggleCollapsed" to="/app/contact/grid">
            Contact Grid
          </router-link>
        </a-menu-item>
        <a-menu-item key="list">
          <router-link click="toggleCollapsed" to="/app/contact/list">
            Contact List
          </router-link>
        </a-menu-item>
        <a-menu-item key="create">
          <router-link click="toggleCollapsed" to="/app/contact/create">
            Contact Create
          </router-link>
        </a-menu-item>
      </a-sub-menu>

      <a-menu-item key="note">
        <sdFeatherIcons type="circle" />
        <span>
          <router-link click="toggleCollapsed" to="/app/note/all">
            Note
          </router-link>
        </span>
      </a-menu-item>

      <a-menu-item key="to-do">
        <sdFeatherIcons type="circle" />
        <span>
          <router-link click="toggleCollapsed" to="/app/to-do">
            To Do
          </router-link>
        </span>
      </a-menu-item>

      <a-sub-menu key="import-export">
        <template v-slot:title><sdFeatherIcons type="mail" /><span>Import Export</span></template>
        <a-menu-item key="import">
          <router-link click="toggleCollapsed" to="/app/import">
            Import
          </router-link>
        </a-menu-item>
        <a-menu-item key="export">
          <router-link click="toggleCollapsed" to="/app/export">
            Export
          </router-link>
        </a-menu-item>
      </a-sub-menu>
    </a-menu-item-group>

    <a-menu-item-group key="features">
      <template v-slot:title>
        <p class="sidebar-nav-title">FEATURES</p>
      </template>
      <a-sub-menu key="components">
        <template v-slot:title><sdFeatherIcons type="circle" /><span>UI Elements</span></template>
        <a-menu-item key="alerts">
          <router-link click="toggleCollapsed" to="/components/alerts">
            Alerts
          </router-link>
        </a-menu-item>
        <a-menu-item key="autoComplete">
          <router-link click="toggleCollapsed" to="/components/autoComplete">
            AutoComplete
          </router-link>
        </a-menu-item>
        <a-menu-item key="avatar">
          <router-link click="toggleCollapsed" to="/components/avatar">
            Avatar
          </router-link>
        </a-menu-item>
        <a-menu-item key="badge">
          <router-link click="toggleCollapsed" to="/components/badge">
            Badge
          </router-link>
        </a-menu-item>
        <a-menu-item key="breadcrumb">
          <router-link click="toggleCollapsed" to="/components/breadcrumb">
            Breadcrumb
          </router-link>
        </a-menu-item>
        <a-menu-item key="button">
          <router-link click="toggleCollapsed" to="/components/button">
            Buttons
          </router-link>
        </a-menu-item>

        <a-menu-item key="calendar">
          <router-link click="toggleCollapsed" to="/components/calendar">
            Calendar
          </router-link>
        </a-menu-item>
        <a-menu-item key="cards">
          <router-link click="toggleCollapsed" to="/components/cards">
            Cards
          </router-link>
        </a-menu-item>
        <a-menu-item key="carousel">
          <router-link click="toggleCollapsed" to="/components/carousel">
            Carousel
          </router-link>
        </a-menu-item>
        <a-menu-item key="cascader">
          <router-link click="toggleCollapsed" to="/components/cascader">
            Cascader
          </router-link>
        </a-menu-item>
        <a-menu-item key="checkbox">
          <router-link click="toggleCollapsed" to="/components/checkbox">
            Checkbox
          </router-link>
        </a-menu-item>
        <a-menu-item key="collapse">
          <router-link click="toggleCollapsed" to="/components/collapse">
            Collapse
          </router-link>
        </a-menu-item>
        <a-menu-item key="comments">
          <router-link click="toggleCollapsed" to="/components/comments">
            Comments
          </router-link>
        </a-menu-item>
        <a-menu-item key="dash-base">
          <router-link click="toggleCollapsed" to="/components/dash-base">
            Dashboard Base
          </router-link>
        </a-menu-item>
        <a-menu-item key="datePicker">
          <router-link click="toggleCollapsed" to="/components/datePicker">
            DatePicker
          </router-link>
        </a-menu-item>
        <a-menu-item key="drag">
          <router-link click="toggleCollapsed" to="">
            Drag & Drop
          </router-link>
        </a-menu-item>
        <a-menu-item key="drawer">
          <router-link click="toggleCollapsed" to="/components/drawer">
            Drawer
          </router-link>
        </a-menu-item>
        <a-menu-item key="dropdown">
          <router-link click="toggleCollapsed" to="/components/dropdown">
            Dropdown
          </router-link>
        </a-menu-item>
        <a-menu-item key="empty">
          <router-link click="toggleCollapsed" to="/components/empty">
            Empty
          </router-link>
        </a-menu-item>
        <a-menu-item key="grids">
          <router-link click="toggleCollapsed" to="/components/grid">
            Grid
          </router-link>
        </a-menu-item>
        <a-menu-item key="input">
          <router-link click="toggleCollapsed" to="/components/input">
            Input
          </router-link>
        </a-menu-item>
        <a-menu-item key="list">
          <router-link click="toggleCollapsed" to="/components/list">
            List
          </router-link>
        </a-menu-item>
        <a-menu-item key="menu">
          <router-link click="toggleCollapsed" to="/components/menu">
            Menu
          </router-link>
        </a-menu-item>
        <a-menu-item key="message">
          <router-link click="toggleCollapsed" to="/components/message">
            Message
          </router-link>
        </a-menu-item>
        <a-menu-item key="modal">
          <router-link click="toggleCollapsed" to="/components/modal">
            Modal
          </router-link>
        </a-menu-item>
        <a-menu-item key="notification">
          <router-link click="toggleCollapsed" to="/components/notification">
            Notification
          </router-link>
        </a-menu-item>
        <a-menu-item key="pageHeader">
          <router-link click="toggleCollapsed" to="/components/pageHeader">
            PageHeader
          </router-link>
        </a-menu-item>
        <a-menu-item key="pagination">
          <router-link click="toggleCollapsed" to="/components/pagination">
            Pagination
          </router-link>
        </a-menu-item>
        <a-menu-item key="popConfirm">
          <router-link click="toggleCollapsed" to="/components/popConfirm">
            PopConfirm
          </router-link>
        </a-menu-item>
        <a-menu-item key="popover">
          <router-link click="toggleCollapsed" to="/components/popover">
            Popover
          </router-link>
        </a-menu-item>
        <a-menu-item key="progressbar">
          <router-link click="toggleCollapsed" to="/components/progressbar">
            Progress Bar
          </router-link>
        </a-menu-item>
        <a-menu-item key="radio">
          <router-link click="toggleCollapsed" to="/components/radio">
            Radio
          </router-link>
        </a-menu-item>
        <a-menu-item key="rate">
          <router-link click="toggleCollapsed" to="/components/rate">
            Rate
          </router-link>
        </a-menu-item>
        <a-menu-item key="result">
          <router-link click="toggleCollapsed" to="/components/result">
            Result
          </router-link>
        </a-menu-item>
        <a-menu-item key="select">
          <router-link click="toggleCollapsed" to="/components/select">
            Select
          </router-link>
        </a-menu-item>
        <a-menu-item key="skeleton">
          <router-link click="toggleCollapsed" to="/components/skeleton">
            Skeleton
          </router-link>
        </a-menu-item>
        <a-menu-item key="slider">
          <router-link click="toggleCollapsed" to="/components/slider">
            Slider
          </router-link>
        </a-menu-item>
        <a-menu-item key="spiner">
          <router-link click="toggleCollapsed" to="/components/spiner">
            Spiner
          </router-link>
        </a-menu-item>
        <a-menu-item key="statistic">
          <router-link click="toggleCollapsed" to="/components/statistic">
            Statistic
          </router-link>
        </a-menu-item>
        <a-menu-item key="steps">
          <router-link click="toggleCollapsed" to="/components/steps">
            Steps
          </router-link>
        </a-menu-item>
        <a-menu-item key="switch">
          <router-link click="toggleCollapsed" to="/components/switch">
            Switch
          </router-link>
        </a-menu-item>
        <a-menu-item key="tabs">
          <router-link click="toggleCollapsed" to="/components/tabs">
            Tabs
          </router-link>
        </a-menu-item>
      </a-sub-menu>

      <a-sub-menu key="chart">
        <template v-slot:title><sdFeatherIcons type="circle" /><span>Charts</span></template>
        <a-menu-item key="chartJs">
          <router-link click="toggleCollapsed" to="/chart/chart-js">
            Chart js
          </router-link>
        </a-menu-item>
        <a-menu-item key="googleChart">
          <router-link click="toggleCollapsed" to="/chart/google-chart">
            Google Chart
          </router-link>
        </a-menu-item>
        <a-sub-menu key="apexchart">
          <template v-slot:title><sdFeatherIcons type="bar-chart" /><span>Apex Charts</span></template>
          <a-menu-item key="columnChart">
            <router-link click="toggleCollapsed" to="/chart/column-chart">
              Column Charts
            </router-link>
          </a-menu-item>
          <a-menu-item key="lineChart">
            <router-link click="toggleCollapsed" to="/chart/line-chart">
              Line Charts
            </router-link>
          </a-menu-item>
          <a-menu-item key="areaChart">
            <router-link click="toggleCollapsed" to="/chart/area-chart">
              Area Charts
            </router-link>
          </a-menu-item>
          <a-menu-item key="barChart">
            <router-link click="toggleCollapsed" to="/chart/bar-chart">
              Bar Charts
            </router-link>
          </a-menu-item>
          <a-menu-item key="pieChart">
            <router-link click="toggleCollapsed" to="/chart/pie-chart">
              Pie Charts
            </router-link>
          </a-menu-item>
          <a-menu-item key="radialbarChart">
            <router-link click="toggleCollapsed" to="/chart/radialbar-chart">
              Radialbar Charts
            </router-link>
          </a-menu-item>
          <a-menu-item key="radarChart">
            <router-link click="toggleCollapsed" to="/chart/radar-charts">
              Radar Charts
            </router-link>
          </a-menu-item>
        </a-sub-menu>
      </a-sub-menu>

      <a-sub-menu key="forms">
        <template v-slot:title><sdFeatherIcons type="circle" /><span>Forms</span></template>
        <a-menu-item key="alerts">
          <router-link click="toggleCollapsed" to="/forms/form-layout">
            Form Layout
          </router-link>
        </a-menu-item>
        <a-menu-item key="form-elements">
          <router-link click="toggleCollapsed" to="/forms/form-elements">
            Form Elements
          </router-link>
        </a-menu-item>
        <a-menu-item key="form-components">
          <router-link click="toggleCollapsed" to="/forms/form-components">
            Form Components
          </router-link>
        </a-menu-item>
        <a-menu-item key="form-validation">
          <router-link click="toggleCollapsed" to="/forms/form-validation">
            Form Validation
          </router-link>
        </a-menu-item>
      </a-sub-menu>

      <a-sub-menu key="icons">
        <template v-slot:title><sdFeatherIcons type="circle" /><span>Icons</span></template>
        <a-menu-item key="featherIcons">
          <router-link click="toggleCollapsed" to="/icons/featherIcons">
            FeatherIcons
          </router-link>
        </a-menu-item>
        <a-menu-item key="antdIcons">
          <router-link click="toggleCollapsed" to="/icons/antdIcons">
            Ant Design Icons
          </router-link>
        </a-menu-item>
        <a-menu-item key="fa">
          <router-link click="toggleCollapsed" to="/icons/fa">
            FontAwesome Icons
          </router-link>
        </a-menu-item>
      </a-sub-menu>

      <a-sub-menu key="maps">
        <template v-slot:title><sdFeatherIcons type="circle" /><span>Maps</span></template>
        <a-menu-item key="google">
          <router-link click="toggleCollapsed" to="/maps/google">
            Google Maps
          </router-link>
        </a-menu-item>
        <a-menu-item key="leaflet">
          <router-link click="toggleCollapsed" to="/maps/leaflet">
            Leaflet
          </router-link>
        </a-menu-item>
        <a-menu-item key="vector">
          <router-link click="toggleCollapsed" to="/maps/vector">
            Vector
          </router-link>
        </a-menu-item>
      </a-sub-menu>

      <a-sub-menu key="tables">
        <template v-slot:title><sdFeatherIcons type="circle" /><span>Table</span></template>
        <a-menu-item key="table">
          <router-link click="toggleCollapsed" to="/tables/basic">
            Basic Table
          </router-link>
        </a-menu-item>
      </a-sub-menu>
    </a-menu-item-group>
    <a-menu-item-group key="pages">
      <template v-slot:title>
        <p class="sidebar-nav-title">Pages</p>
      </template>

      <a-menu-item key="profile-settings">
        <sdFeatherIcons type="circle" />
        <span>
          <router-link click="toggleCollapsed" to="/page/profile-settings">
            Settings
          </router-link>
        </span>
      </a-menu-item>
      <a-menu-item key="starter">
        <sdFeatherIcons type="circle" />
        <span>
          <router-link click="toggleCollapsed" to="/starter">
            Blank Page
          </router-link>
        </span>
      </a-menu-item>
      <a-sub-menu key="knowledgebase">
        <template v-slot:title><sdFeatherIcons type="circle" /><span>Knowledge Base</span></template>
        <a-menu-item key="knowledge">
          <router-link click="toggleCollapsed" to="/page/knowledgebase/plugins">
            Knowledge Base
          </router-link>
        </a-menu-item>
        <a-menu-item key="all-articles">
          <router-link click="toggleCollapsed" to="/page/knowledgebase/all-articles">
            All Articles
          </router-link>
        </a-menu-item>
        <a-menu-item key="knowledge-base-singale">
          <router-link click="toggleCollapsed" to="/page/knowledgebase/single">
            Single Article
          </router-link>
        </a-menu-item>
      </a-sub-menu>
      <a-menu-item key="support">
        <sdFeatherIcons type="circle" />
        <span>
          <router-link click="toggleCollapsed" to="/page/support">
            Support Center
          </router-link>
        </span>
      </a-menu-item>
      <a-menu-item key="pricing">
        <sdFeatherIcons type="circle" />
        <span>
          <router-link click="toggleCollapsed" to="/page/pricing">
            Pricing
          </router-link>
        </span>
      </a-menu-item>
      <a-menu-item key="maintenance">
        <sdFeatherIcons type="circle" />
        <span>
          <router-link click="toggleCollapsed" to="/page/maintenance">
            Maintenance
          </router-link>
        </span>
      </a-menu-item>
      <a-menu-item key="banners">
        <sdFeatherIcons type="circle" />
        <span>
          <router-link click="toggleCollapsed" to="/page/banners">
            Banners
          </router-link>
        </span>
      </a-menu-item>
      <a-menu-item key="testimonials">
        <sdFeatherIcons type="circle" />
        <span>
          <router-link click="toggleCollapsed" to="/page/testimonials">
            Testimonials
          </router-link>
        </span>
      </a-menu-item>
      <a-menu-item key="faq`s">
        <sdFeatherIcons type="circle" />
        <span>
          <router-link click="toggleCollapsed" to="/page/faqs">
            FAQs
          </router-link>
        </span>
      </a-menu-item>
      <a-menu-item key="search">
        <sdFeatherIcons type="circle" />
        <span>
          <router-link click="toggleCollapsed" to="/page/search">
            Search
          </router-link>
        </span>
      </a-menu-item>
      <a-menu-item key="gallery">
        <sdFeatherIcons type="circle" />
        <span>
          <router-link click="toggleCollapsed" to="/page/gallery">
            Gallery
          </router-link>
        </span>
      </a-menu-item>
      <a-menu-item key="404">
        <sdFeatherIcons type="circle" />
        <span>
          <router-link click="toggleCollapsed" to="/page/404">
            404
          </router-link>
        </span>
      </a-menu-item>
      <a-menu-item key="comingSoon">
        <sdFeatherIcons type="circle" />
        <span>
          <router-link click="toggleCollapsed" to="/page/comingSoon">
            Coming Soon
          </router-link>
        </span>
      </a-menu-item>
    </a-menu-item-group>
  </a-menu>
</template>
<script>
import VueTypes from 'vue-types';
import { mapGetters } from 'vuex';

export default {
  name: 'AsideItems',
  props: {
    toggleCollapsed: VueTypes.func,
  },
  data() {
    return {
      mode: 'inline',
      rootSubmenuKeys: ['sub1', 'sub2', 'sub4'],
      openKeys: ['sub1'],
    };
  },
  computed: {
    ...mapGetters(['darkMode']),
  },
  methods: {
    onOpenChange(openKeys) {
      const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1);
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys;
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    },
  },
  components: {},
};
</script>
