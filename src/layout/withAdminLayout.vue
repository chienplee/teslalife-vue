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
          <a-col :lg="!topMenu ? 4 : 3" :sm="6" :xs="12" class="align-center-v navbar-brand">
            <sdButton v-if="!topMenu || innerWidth <= 991" @click="toggleCollapsed" type="white">
              <img :src="require(`../static/img/icon/${collapsed ? 'right.svg' : 'left.svg'}`)" alt="menu" />
            </sdButton>
            <router-link :class="topMenu && innerWidth > 991 ? 'striking-logo top-menu' : 'striking-logo'" to="/admin">
              <img
                :src="!darkMode ? require(`../static/img/Logo_Dark.svg`) : require(`../static/img/Logo_white.png`)"
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
                  :class="`${activeSearch ? 'search-toggle active' : 'search-toggle'}`"
                  @click="
                    () => {
                      toggleSearch();
                    }
                  "
                  to="#"
                >
                  <sdFeatherIcons type="search" />
                  <sdFeatherIcons type="x" />
                </router-link>
                <div :class="`${activeSearch ? 'topMenu-search-form show' : 'topMenu-search-form'}`">
                  <form action="">
                    <span class="search-icon">
                      <sdFeatherIcons type="search" />
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
              <router-link class="btn-search" @click="e => handleSearchHide(e, searchHide)" to="#">
                <sdFeatherIcons type="search" v-if="searchHide" />
                <sdFeatherIcons type="x" v-else />
              </router-link>
              <router-link class="btn-auth" @click="() => onShowHide(hide)" to="#">
                <sdFeatherIcons type="more-vertical" />
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
              padding: '15px 15px 155px 15px',
              overflowY: 'auto',
              height: '100vh',
              position: 'fixed',
              [!rtl ? 'left' : 'right']: 0,
              zIndex: 998,
            }"
            :collapsed="collapsed"
            :theme="!darkMode ? 'light' : 'dark'"
          >
            <perfect-scrollbar
              :options="{
                wheelSpeed: 1,
                swipeEasing: true,
                suppressScrollX: true,
              }"
            >
              <p class="sidebar-nav-title">MAIN MENU</p>
              <AsideItems
                :toggleCollapsed="toggleCollapsedMobile"
                :topMenu="topMenu"
                :rtl="rtl"
                :darkMode="darkMode"
                :events="onEventChange"
              />
            </perfect-scrollbar>
          </Sider>
        </template>
        <Layout class="atbd-main-layout">
          <Content>
            <Suspense>
              <template #default>
                <router-view></router-view>
              </template>
              <template #fallback>
                <div class="spin">
                  <a-spin />
                </div>
              </template>
            </Suspense>

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
                    <a to="#">About</a>
                    <a to="#">Team</a>
                    <a to="#">Contact</a>
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
import { Layout } from 'ant-design-vue';
import { Div, SmallScreenSearch, SmallScreenAuthInfo, TopMenuSearch } from './style';
import HeaderSearch from '../components/header-search/HeaderSearch';

import AuthInfo from '../components/utilities/auth-info/info';
import AsideItems from './Aside';
import TopMenu from './TopMenuItems';
import { PerfectScrollbar } from 'vue3-perfect-scrollbar';
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css';
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
const { Header, Footer, Sider, Content } = Layout;

export default {
  name: 'WithAdminLayout',
  components: {
    Div,
    Header,
    Layout,
    Footer,
    Sider,
    Content,
    HeaderSearch,
    SmallScreenSearch,
    SmallScreenAuthInfo,
    TopMenuSearch,
    AuthInfo,
    AsideItems,
    TopMenu,
    PerfectScrollbar,
  },
  setup() {
    const collapsed = ref(false);
    const hide = ref(true);
    const searchHide = ref(true);
    const customizerAction = ref(false);
    const activeSearch = ref(false);

    // const store = useStore();
    const { dispatch, state } = useStore();

    const rtl = computed(() => state.themeLayout.rtlData);
    const darkMode = computed(() => state.themeLayout.data);
    const topMenu = computed(() => state.themeLayout.topMenu);

    collapsed.value = window.innerWidth <= 1200 && true;

    const toggleCollapsed = e => {
      e.preventDefault();
      collapsed.value = !collapsed.value;
    };
    const handleSearchHide = (e, searchHide) => {
      e.preventDefault();
      searchHide.value = !searchHide.value;
      hide.value = true;
    };
    const onShowHide = e => {
      e.preventDefault();
      hide.value = !hide.value;
      searchHide.value = true;
    };
    const toggleCollapsedMobile = () => {
      if (innerWidth <= 990) {
        collapsed.value = false;
      }
    };

    const onRtlChange = () => {
      const html = document.querySelector('html');
      html.setAttribute('dir', 'rtl');
      dispatch('changeRtlMode', true);
    };

    const onLtrChange = () => {
      const html = document.querySelector('html');
      html.setAttribute('dir', 'ltr');
      dispatch('changeRtlMode', false);
    };

    const modeChangeDark = () => {
      dispatch('changeLayoutMode', true);
    };

    const modeChangeLight = () => {
      dispatch('changeLayoutMode', false);
    };

    const modeChangeTopNav = () => {
      dispatch('changeMenuMode', true);
    };

    const modeChangeSideNav = () => {
      dispatch('changeMenuMode', false);
    };

    const onEventChange = {
      onRtlChange,
      onLtrChange,
      modeChangeDark,
      modeChangeLight,
      modeChangeTopNav,
      modeChangeSideNav,
    };
    console.log(topMenu.value);
    return {
      toggleCollapsed,
      handleSearchHide,
      toggleCollapsedMobile,
      onShowHide,
      collapsed,
      hide,
      searchHide,
      customizerAction,
      activeSearch,
      innerWidth: window.innerWidth,
      rtl,
      darkMode,
      topMenu,
      onEventChange,
    };
  },
};
</script>
<style>
.ps {
  height: calc(100vh - 100px);
}
</style>
