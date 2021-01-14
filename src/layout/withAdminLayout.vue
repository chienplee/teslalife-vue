<template>
  <Div :darkMode="darkMode">
    <Layout class="layout">
      <Header
        :style="{
          position: 'fixed',
          width: '100%',
          top: 0,
          [!rtl ? 'left' : 'right']: 0,
        }"
      >
        <a-row>
          <a-col
            :lg="!topMenu ? 4 : 3"
            :sm="6"
            :xs="12"
            class="align-center-v navbar-brand"
          >
            <Button
              v-if="!topMenu || innerWidth <= 991"
              @click.native="toggleCollapsed(collapsed)"
              type="link"
            >
              <img
                :src="
                  require(`../static/img/icon/${
                    collapsed ? 'right.svg' : 'left.svg'
                  }`)
                "
                alt="menu"
              />
            </Button>
            <router-link
              :class="
                topMenu && innerWidth > 991
                  ? 'striking-logo top-menu'
                  : 'striking-logo'
              "
              to="/admin"
            >
              <img
                :src="
                  !darkMode
                    ? require(`../static/img/Logo_Dark.svg`)
                    : require(`../static/img/Logo_white.png`)
                "
                alt="logo"
              />
            </router-link>
          </a-col>
          <a-col :lg="!topMenu ? 14 : 15" :md="8" :sm="0" :xs="0">
            <TopMenu v-if="topMenu && innerWidth > 991" />
            <HeaderSearch v-else />
          </a-col>

          <a-col :lg="6" :md="10" :sm="0" :xs="0">
            <TopMenuSearch v-if="topMenu && innerWidth > 991">
              <div class="top-right-wrap d-flex">
                <router-link
                  :class="
                    `${activeSearch ? 'search-toggle active' : 'search-toggle'}`
                  "
                  @click.native="
                    () => {
                      toggleSearch();
                    }
                  "
                  to="#"
                >
                  <SearchIcon />
                  <XIcon />
                </router-link>
                <div
                  :class="
                    `${
                      activeSearch
                        ? 'topMenu-search-form show'
                        : 'topMenu-search-form'
                    }`
                  "
                >
                  <form action="">
                    <span class="search-icon">
                      <SearchIcon />
                    </span>
                    <input type="text" name="search" />
                  </form>
                </div>
                <AuthInfo />
              </div>
            </TopMenuSearch>
            <AuthInfo v-else />
          </a-col>
          <a-col :style="{ position: 'static' }" :md="0" :sm="18" :xs="12">
            <div class="mobile-action">
              <router-link
                class="btn-search"
                @click.native="(e) => handleSearchHide(e, searchHide)"
                to="#"
              >
                <SearchIcon v-if="searchHide" />
                <XIcon v-else />
              </router-link>
              <router-link
                class="btn-auth"
                @click.native="() => onShowHide(hide)"
                to="#"
              >
                <MoreVerticalIcon />
              </router-link>
            </div>
          </a-col>
        </a-row>
      </Header>
      <div class="header-more">
        <a-row>
          <a-col :md="0" :sm="24" :xs="24">
            <div class="small-screen-headerRight">
              <SmallScreenSearch :hide="searchHide" :darkMode="darkMode">
                <HeaderSearch />
              </SmallScreenSearch>
              <SmallScreenAuthInfo :hide="hide" :darkMode="darkMode">
                <AuthInfo :rtl="rtl" />
              </SmallScreenAuthInfo>
            </div>
          </a-col>
        </a-row>
      </div>
      <Layout>
        <template v-if="!topMenu || innerWidth <= 991">
          <Sider
            :width="280"
            :style="{
              margin: '63px 0 0 0',
              padding: '15px 15px 55px 15px',
              overflowY: 'auto',
              height: '100vh',
              position: 'fixed',
              [!rtl ? 'left' : 'right']: 0,
              zIndex: 998,
            }"
            :collapsed="collapsed"
            :theme="!darkMode ? 'light' : 'dark'"
          >
            <p class="sidebar-nav-title">MAIN MENU</p>
            <AsideItems
              :toggleCollapsed="() => toggleCollapsedMobile(collapsed)"
            />
          </Sider>
        </template>
        <Layout class="atbd-main-layout">
          <Content>
            <router-view></router-view>
            <Footer
              class="admin-footer"
              :style="{
                padding: '20px 30px 18px',
                color: 'rgba(0, 0, 0, 0.65)',
                fontSize: '14px',
                background: 'rgba(255, 255, 255, .90)',
                width: '100%',
                boxShadow: '0 -5px 10px rgba(146,153,184, 0.05)',
              }"
            >
              <a-row>
                <a-col :md="12" :xs="24">
                  <span class="admin-footer__copyright">2020 © AazzTech</span>
                </a-col>
                <a-col :md="12" :xs="24">
                  <div class="admin-footer__links">
                    <router-link to="#">About</router-link>
                    <router-link to="#">Team</router-link>
                    <router-link to="#">Contact</router-link>
                  </div>
                </a-col>
              </a-row>
            </Footer>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </Div>
</template>
<script>
import { Layout } from "ant-design-vue";
import {
  Div,
  SmallScreenSearch,
  SmallScreenAuthInfo,
  TopMenuSearch,
} from "./style";
import { Button } from "../components/buttons/Buttons";
import HeaderSearch from "../components/header-search/HeaderSearch";
import { SearchIcon, XIcon, MoreVerticalIcon } from "vue-feather-icons";
import AuthInfo from "../components/utilities/auth-info/info";
import AsideItems from "./Aside";
import TopMenu from "./TopMenuItems";

const { Header, Footer, Sider, Content } = Layout;

export default {
  name: "WithAdminLayout",
  components: {
    Div,
    Header,
    Button,
    Layout,
    Footer,
    Sider,
    Content,
    HeaderSearch,
    SmallScreenSearch,
    SmallScreenAuthInfo,
    SearchIcon,
    XIcon,
    MoreVerticalIcon,
    TopMenuSearch,
    AuthInfo,
    AsideItems,
    TopMenu,
  },
  data() {
    return {
      darkMode: false,
      collapsed: false,
      hide: true,
      searchHide: true,
      customizerAction: false,
      activeSearch: false,
      rtl: false,
      topMenu: false,
      innerWidth: window.innerWidth,
    };
  },
  created() {
    this.collapsed = window.innerWidth <= 1200 && true;
  },
  methods: {
    toggleCollapsed: function(collapsed) {
      this.collapsed = !collapsed;
    },
    handleSearchHide: function(e, searchHide) {
      e.preventDefault();
      this.searchHide = !searchHide;
      this.hide = true;
    },
    onShowHide: function(hide) {
      this.hide = !hide;
      this.searchHide = true;
    },
    toggleCollapsedMobile: function(collapsed) {
      if (innerWidth <= 990) {
        this.collapsed = !collapsed;
      }
    },
  },
};
</script>
