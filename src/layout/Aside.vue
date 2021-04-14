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
      <a-menu-item @click="toggleCollapsed" key="home">
        <router-link to="/">
          Social Media
        </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="business">
        <router-link to="/business">
          Fintech / Business
        </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="performance">
        <router-link to="/performance">
          Site Performance
        </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="eco">
        <router-link to="/eco">
          Ecommerce
        </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="crm">
        <router-link to="/crm">
          CRM
        </router-link>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="sales">
        <router-link to="/sales">
          Sales Performance
        </router-link>
      </a-menu-item>
    </a-sub-menu>

    <a-sub-menu key="layout">
      <template v-slot:title><sdFeatherIcons type="home" /><span>Layout</span></template>
      <a-menu-item @click="toggleCollapsed" key="light">
        <a
          @click="
            e => {
              e.preventDefault();
              toggleCollapsed();
              modeChangeLight();
            }
          "
          to="#"
        >
          Light Mode
        </a>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="dark">
        <a
          @click="
            e => {
              e.preventDefault();
              toggleCollapsed();
              modeChangeDark();
            }
          "
          to="#"
        >
          Dark Mode
        </a>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="topMenu">
        <a
          @click="
            e => {
              e.preventDefault();
              toggleCollapsed();
              modeChangeTopNav();
            }
          "
          to="#"
        >
          Top Menu
        </a>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="sideMenu">
        <a
          @click="
            e => {
              e.preventDefault();
              toggleCollapsed();
              modeChangeSideNav();
            }
          "
          to="#"
        >
          Side Menu
        </a>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="rtl">
        <a
          @click="
            e => {
              e.preventDefault();
              toggleCollapsed();
              onRtlChange();
            }
          "
          to="#"
        >
          RTL
        </a>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="ltr">
        <a
          @click="
            e => {
              e.preventDefault();
              toggleCollapsed();
              onLtrChange();
            }
          "
          to="#"
        >
          LTR
        </a>
      </a-menu-item>
    </a-sub-menu>

    <a-menu-item @click="toggleCollapsed" key="changelog">
      <sdFeatherIcons type="circle" />
      <span>
        <router-link to="/changelog">
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
        <a-menu-item @click="toggleCollapsed" key="inbox">
          <router-link to="/app/mail">
            Inbox
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="single">
          <router-link to="/app/mail-single/1585118055048">
            Read Email
          </router-link>
        </a-menu-item>
      </a-sub-menu>

      <a-menu-item @click="toggleCollapsed" key="chat">
        <sdFeatherIcons type="circle" />
        <span>
          <router-link to="/app/chat/private/rofiq@gmail.com">
            Chat
          </router-link>
        </span>
      </a-menu-item>

      <a-sub-menu key="ecommerce">
        <template v-slot:title><sdFeatherIcons type="shopping-cart" /><span>eCommerce</span></template>
        <a-menu-item @click="toggleCollapsed" key="product">
          <router-link to="/app/ecommerce/product/grid">
            Products
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="detail">
          <router-link to="/app/ecommerce/productDetails/5">
            Product Detail
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="add-product">
          <router-link to="/app/ecommerce/add-product">
            Product Add
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="edit-product">
          <router-link to="/app/ecommerce/edit-product">
            Product Update
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="orders">
          <router-link to="/app/ecommerce/orders">
            Orders
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="sellers">
          <router-link to="/app/ecommerce/sellers">
            Sellers
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="invoice">
          <router-link to="/app/ecommerce/invoice">
            Invoice
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="cart">
          <router-link to="/app/ecommerce/cart">
            Cart
          </router-link>
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="social">
        <template v-slot:title><sdFeatherIcons type="mail" /><span>Social App</span></template>
        <a-menu-item @click="toggleCollapsed" key="profile">
          <router-link to="/app/social/profile/overview">
            My Profile
          </router-link>
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="project">
        <template v-slot:title><sdFeatherIcons type="mail" /><span>Projects</span></template>
        <a-menu-item @click="toggleCollapsed" key="grid">
          <router-link to="/app/project/grid">
            Project Grid
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="list">
          <router-link to="/app/project/list">
            Project List
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="createProject">
          <router-link to="/app/createProject/grid">
            Project Create
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="projectDetails">
          <router-link to="/app/project/projectDetails/1">
            Project Details
          </router-link>
        </a-menu-item>
      </a-sub-menu>

      <a-menu-item @click="toggleCollapsed" key="calender">
        <sdFeatherIcons type="mail" />
        <span>
          <router-link to="/app/calendar/month">
            Calender
          </router-link>
        </span>
      </a-menu-item>

      <a-sub-menu key="users">
        <template v-slot:title><sdFeatherIcons type="mail" /><span>Users</span></template>
        <a-menu-item @click="toggleCollapsed" key="team">
          <router-link to="/app/users/team">
            Team
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="users-grid">
          <router-link to="/app/users/users/user-grid">
            Users Grid
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="users-list">
          <router-link to="/app/users/users/user-list">
            Users List
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="grid-style">
          <router-link to="/app/users/users/grid-style">
            Users Grid Style
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="grid-group">
          <router-link to="/app/users/users/grid-group">
            Users Grid Group
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="dataTable">
          <router-link to="/app/users/dataTable">
            Users table
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="add-user">
          <router-link to="/app/users/add-user/info">
            Add Users
          </router-link>
        </a-menu-item>
      </a-sub-menu>

      <a-sub-menu key="contact">
        <template v-slot:title><sdFeatherIcons type="mail" /><span>Contact</span></template>
        <a-menu-item @click="toggleCollapsed" key="grid">
          <router-link to="/app/contact/grid">
            Contact Grid
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="list">
          <router-link to="/app/contact/list">
            Contact List
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="create">
          <router-link to="/app/contact/create">
            Contact Create
          </router-link>
        </a-menu-item>
      </a-sub-menu>

      <a-menu-item @click="toggleCollapsed" key="note">
        <sdFeatherIcons type="circle" />
        <span>
          <router-link to="/app/note/all">
            Note
          </router-link>
        </span>
      </a-menu-item>

      <a-menu-item @click="toggleCollapsed" key="to-do">
        <sdFeatherIcons type="circle" />
        <span>
          <router-link to="/app/to-do">
            To Do
          </router-link>
        </span>
      </a-menu-item>

      <a-sub-menu key="import-export">
        <template v-slot:title><sdFeatherIcons type="mail" /><span>Import Export</span></template>
        <a-menu-item @click="toggleCollapsed" key="import">
          <router-link to="/app/import">
            Import
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="export">
          <router-link to="/app/export">
            Export
          </router-link>
        </a-menu-item>
      </a-sub-menu>

      <a-menu-item key="task">
        <sdFeatherIcons type="circle" />
        <span @click="toggleCollapsed">
          <router-link to="/app/task/all">
            Task
          </router-link>
        </span>
      </a-menu-item>
    </a-menu-item-group>

    <a-menu-item-group key="features">
      <template v-slot:title>
        <p class="sidebar-nav-title">FEATURES</p>
      </template>
      <a-sub-menu key="components">
        <template v-slot:title><sdFeatherIcons type="circle" /><span>UI Elements</span></template>
        <a-menu-item @click="toggleCollapsed" key="alerts">
          <router-link to="/components/alerts">
            Alerts
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="autoComplete">
          <router-link to="/components/autoComplete">
            AutoComplete
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="avatar">
          <router-link to="/components/avatar">
            Avatar
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="badge">
          <router-link to="/components/badge">
            Badge
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="breadcrumb">
          <router-link to="/components/breadcrumb">
            Breadcrumb
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="button">
          <router-link to="/components/button">
            Buttons
          </router-link>
        </a-menu-item>

        <a-menu-item @click="toggleCollapsed" key="calendar">
          <router-link to="/components/calendar">
            Calendar
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="cards">
          <router-link to="/components/cards">
            Cards
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="carousel">
          <router-link to="/components/carousel">
            Carousel
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="cascader">
          <router-link to="/components/cascader">
            Cascader
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="checkbox">
          <router-link to="/components/checkbox">
            Checkbox
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="collapse">
          <router-link to="/components/collapse">
            Collapse
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="comments">
          <router-link to="/components/comments">
            Comments
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="dash-base">
          <router-link to="/components/dash-base">
            Dashboard Base
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="datePicker">
          <router-link to="/components/datePicker">
            DatePicker
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="drag">
          <router-link to="/components/drag-drop">
            Drag & Drop
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="drawer">
          <router-link to="/components/drawer">
            Drawer
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="dropdown">
          <router-link to="/components/dropdown">
            Dropdown
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="empty">
          <router-link to="/components/empty">
            Empty
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="grids">
          <router-link to="/components/grid">
            Grid
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="input">
          <router-link to="/components/input">
            Input
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="list">
          <router-link to="/components/list">
            List
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="menu">
          <router-link to="/components/menu">
            Menu
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="message">
          <router-link to="/components/message">
            Message
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="modal">
          <router-link to="/components/modal">
            Modal
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="notification">
          <router-link to="/components/notification">
            Notification
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="pageHeader">
          <router-link to="/components/pageHeader">
            PageHeader
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="pagination">
          <router-link to="/components/pagination">
            Pagination
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="popConfirm">
          <router-link to="/components/popConfirm">
            PopConfirm
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="popover">
          <router-link to="/components/popover">
            Popover
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="progressbar">
          <router-link to="/components/progressbar">
            Progress Bar
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="radio">
          <router-link to="/components/radio">
            Radio
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="rate">
          <router-link to="/components/rate">
            Rate
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="result">
          <router-link to="/components/result">
            Result
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="select">
          <router-link to="/components/select">
            Select
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="skeleton">
          <router-link to="/components/skeleton">
            Skeleton
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="slider">
          <router-link to="/components/slider">
            Slider
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="spiner">
          <router-link to="/components/spiner">
            Spiner
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="statistic">
          <router-link to="/components/statistic">
            Statistic
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="steps">
          <router-link to="/components/steps">
            Steps
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="switch">
          <router-link to="/components/switch">
            Switch
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="tabs">
          <router-link to="/components/tabs">
            Tabs
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="tags">
          <router-link to="/components/tags">
            Tags
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="timeline">
          <router-link to="/components/timeline">
            Timeline
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="time-picker">
          <router-link to="/components/time-picker">
            TimePicker
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="tree-select">
          <router-link to="/components/tree-select">
            Tree Select
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="upload">
          <router-link to="/components/upload">
            Upload
          </router-link>
        </a-menu-item>
      </a-sub-menu>

      <a-sub-menu key="chart">
        <template v-slot:title><sdFeatherIcons type="circle" /><span>Charts</span></template>
        <a-menu-item @click="toggleCollapsed" key="chartJs">
          <router-link to="/chart/chart-js">
            Chart js
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="googleChart">
          <router-link to="/chart/google-chart">
            Google Chart
          </router-link>
        </a-menu-item>
        <a-sub-menu key="apexchart">
          <template v-slot:title><sdFeatherIcons type="bar-chart" /><span>Apex Charts</span></template>
          <a-menu-item @click="toggleCollapsed" key="columnChart">
            <router-link to="/chart/column-chart">
              Column Charts
            </router-link>
          </a-menu-item>
          <a-menu-item @click="toggleCollapsed" key="lineChart">
            <router-link to="/chart/line-chart">
              Line Charts
            </router-link>
          </a-menu-item>
          <a-menu-item @click="toggleCollapsed" key="areaChart">
            <router-link to="/chart/area-chart">
              Area Charts
            </router-link>
          </a-menu-item>
          <a-menu-item @click="toggleCollapsed" key="barChart">
            <router-link to="/chart/bar-chart">
              Bar Charts
            </router-link>
          </a-menu-item>
          <a-menu-item @click="toggleCollapsed" key="pieChart">
            <router-link to="/chart/pie-chart">
              Pie Charts
            </router-link>
          </a-menu-item>
          <a-menu-item @click="toggleCollapsed" key="radialbarChart">
            <router-link to="/chart/radialbar-chart">
              Radialbar Charts
            </router-link>
          </a-menu-item>
          <a-menu-item @click="toggleCollapsed" key="radarChart">
            <router-link to="/chart/radar-charts">
              Radar Charts
            </router-link>
          </a-menu-item>
        </a-sub-menu>
      </a-sub-menu>

      <a-sub-menu key="forms">
        <template v-slot:title><sdFeatherIcons type="circle" /><span>Forms</span></template>
        <a-menu-item @click="toggleCollapsed" key="alerts">
          <router-link to="/forms/form-layout">
            Form Layout
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="form-elements">
          <router-link to="/forms/form-elements">
            Form Elements
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="form-components">
          <router-link to="/forms/form-components">
            Form Components
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="form-validation">
          <router-link to="/forms/form-validation">
            Form Validation
          </router-link>
        </a-menu-item>
      </a-sub-menu>

      <a-sub-menu key="icons">
        <template v-slot:title><sdFeatherIcons type="circle" /><span>Icons</span></template>
        <a-menu-item @click="toggleCollapsed" key="featherIcons">
          <router-link to="/icons/featherIcons">
            FeatherIcons
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="antdIcons">
          <router-link to="/icons/antdIcons">
            Ant Design Icons
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="fa">
          <router-link to="/icons/fa">
            FontAwesome Icons
          </router-link>
        </a-menu-item>
      </a-sub-menu>

      <a-sub-menu key="maps">
        <template v-slot:title><sdFeatherIcons type="circle" /><span>Maps</span></template>
        <a-menu-item @click="toggleCollapsed" key="google">
          <router-link to="/maps/google">
            Google Maps
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="leaflet">
          <router-link to="/maps/leaflet">
            Leaflet
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="vector">
          <router-link to="/maps/vector">
            Vector
          </router-link>
        </a-menu-item>
      </a-sub-menu>

      <a-sub-menu key="tables">
        <template v-slot:title><sdFeatherIcons type="circle" /><span>Table</span></template>
        <a-menu-item @click="toggleCollapsed" key="table">
          <router-link to="/tables/basic">
            Basic Table
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="DataTable">
          <router-link to="/tables/dataTable">
            Data Table
          </router-link>
        </a-menu-item>
      </a-sub-menu>

      <a-sub-menu key="wizard">
        <template v-slot:title><sdFeatherIcons type="circle" /><span>Wizard</span></template>
        <a-menu-item @click="toggleCollapsed" key="wizard1">
          <router-link to="/wizard/wizard1">
            Wizard1
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="wizard2">
          <router-link to="/wizard/wizard2">
            Wizard2
          </router-link>
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="widgets">
        <template v-slot:title><sdFeatherIcons type="circle" /><span>Widgets</span></template>
        <a-menu-item @click="toggleCollapsed" key="widgetsChart">
          <router-link to="/widgets/chart">
            Charts
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="widgetsCard">
          <router-link to="/widgets/card">
            Card
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="widgetsMixed">
          <router-link to="/widgets/mixed">
            Mixed
          </router-link>
        </a-menu-item>
      </a-sub-menu>
    </a-menu-item-group>
    <a-menu-item-group key="pages">
      <template v-slot:title>
        <p class="sidebar-nav-title">Pages</p>
      </template>

      <a-menu-item @click="toggleCollapsed" key="profile-settings">
        <sdFeatherIcons type="circle" />
        <span>
          <router-link to="/page/profile-settings">
            Settings
          </router-link>
        </span>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="starter">
        <sdFeatherIcons type="circle" />
        <span>
          <router-link to="/starter">
            Blank Page
          </router-link>
        </span>
      </a-menu-item>
      <a-sub-menu key="knowledgebase">
        <template v-slot:title><sdFeatherIcons type="circle" /><span>Knowledge Base</span></template>
        <a-menu-item @click="toggleCollapsed" key="knowledge">
          <router-link to="/page/knowledgebase/plugins">
            Knowledge Base
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="all-articles">
          <router-link to="/page/knowledgebase/all-articles">
            All Articles
          </router-link>
        </a-menu-item>
        <a-menu-item @click="toggleCollapsed" key="knowledge-base-singale">
          <router-link to="/page/knowledgebase/single">
            Single Article
          </router-link>
        </a-menu-item>
      </a-sub-menu>
      <a-menu-item @click="toggleCollapsed" key="support">
        <sdFeatherIcons type="circle" />
        <span>
          <router-link to="/page/support">
            Support Center
          </router-link>
        </span>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="pricing">
        <sdFeatherIcons type="circle" />
        <span>
          <router-link to="/page/pricing">
            Pricing
          </router-link>
        </span>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="maintenance">
        <sdFeatherIcons type="circle" />
        <span>
          <router-link to="/page/maintenance">
            Maintenance
          </router-link>
        </span>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="banners">
        <sdFeatherIcons type="circle" />
        <span>
          <router-link to="/page/banners">
            Banners
          </router-link>
        </span>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="testimonials">
        <sdFeatherIcons type="circle" />
        <span>
          <router-link to="/page/testimonials">
            Testimonials
          </router-link>
        </span>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="faq`s">
        <sdFeatherIcons type="circle" />
        <span>
          <router-link to="/page/faqs">
            FAQs
          </router-link>
        </span>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="search">
        <sdFeatherIcons type="circle" />
        <span>
          <router-link to="/page/search">
            Search
          </router-link>
        </span>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="gallery">
        <sdFeatherIcons type="circle" />
        <span>
          <router-link to="/page/gallery">
            Gallery
          </router-link>
        </span>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="404">
        <sdFeatherIcons type="circle" />
        <span>
          <router-link to="/page/404">
            404
          </router-link>
        </span>
      </a-menu-item>
      <a-menu-item @click="toggleCollapsed" key="comingSoon">
        <sdFeatherIcons type="circle" />
        <span>
          <router-link to="/page/comingSoon">
            Coming Soon
          </router-link>
        </span>
      </a-menu-item>
    </a-menu-item-group>
  </a-menu>
</template>
<script>
import { computed, reactive, ref, toRefs } from 'vue';
import VueTypes from 'vue-types';
import { useStore } from 'vuex';

export default {
  name: 'AsideItems',
  props: {
    toggleCollapsed: VueTypes.func,
    events: VueTypes.object,
  },
  setup(props) {
    const store = useStore();
    const darkMode = computed(() => store.state.themeLayout.data);
    const mode = ref('inline');
    const { events } = toRefs(props);
    const {
      onRtlChange,
      onLtrChange,
      modeChangeDark,
      modeChangeLight,
      modeChangeTopNav,
      modeChangeSideNav,
    } = events.value;

    const state = reactive({
      rootSubmenuKeys: ['sub1', 'sub2', 'sub4'],
      openKeys: ['sub1'],
      selectedKeys: [],
    });

    const onOpenChange = openKeys => {
      const latestOpenKey = openKeys.find(key => state.openKeys.indexOf(key) === -1);

      if (state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        state.openKeys = openKeys;
      } else {
        state.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    };

    return {
      mode,
      ...toRefs(state),
      darkMode,
      onOpenChange,
      onRtlChange,
      onLtrChange,
      modeChangeDark,
      modeChangeLight,
      modeChangeTopNav,
      modeChangeSideNav,
    };
  },
};
</script>
