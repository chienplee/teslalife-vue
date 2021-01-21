<template>
  <div>
    <sdPageHeader title="Menu">
      <div slot="buttons" class="page-header-actions">
        <sdCalendarButton />
        <sdExportButton />
        <sdShareButton />
        <sdButton size="small" type="primary">
          <PlusIcon size="14" />
          Add New
        </sdButton>
      </div>
    </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :md="24" :xs="24">
          <sdCards title="Top Navigation">
            <a-menu v-model="current" mode="horizontal">
              <a-menu-item key="mail">
                <a-icon type="mail" />Navigation One
              </a-menu-item>
              <a-menu-item key="app" disabled>
                <a-icon type="appstore" />Navigation Two
              </a-menu-item>
              <a-sub-menu>
                <span slot="title" class="submenu-title-wrapper"
                  ><a-icon type="setting" />Navigation Three - Submenu</span
                >
                <a-menu-item-group title="Item 1">
                  <a-menu-item key="setting:1">
                    Option 1
                  </a-menu-item>
                  <a-menu-item key="setting:2">
                    Option 2
                  </a-menu-item>
                </a-menu-item-group>
                <a-menu-item-group title="Item 2">
                  <a-menu-item key="setting:3">
                    Option 3
                  </a-menu-item>
                  <a-menu-item key="setting:4">
                    Option 4
                  </a-menu-item>
                </a-menu-item-group>
              </a-sub-menu>
              <a-menu-item key="alipay">
                <a
                  href="https://antdv.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Navigation Four - Link</a
                >
              </a-menu-item>
            </a-menu>
          </sdCards>
        </a-col>
        <a-col :md="12" :xs="24">
          <sdCards title="Vertical Menu">
            <a-menu style="width: 256px" mode="vertical" @click="handleClick">
              <a-menu-item key="1">
                <a-icon type="mail" />
                Navigation One
              </a-menu-item>
              <a-menu-item key="2">
                <a-icon type="calendar" />
                Navigation Two
              </a-menu-item>
              <a-sub-menu key="sub1">
                <span slot="title"
                  ><a-icon type="appstore" /><span>Navigation Three</span></span
                >
                <a-menu-item key="3">
                  Option 3
                </a-menu-item>
                <a-menu-item key="4">
                  Option 4
                </a-menu-item>
                <a-sub-menu key="sub1-2" title="Submenu">
                  <a-menu-item key="5">
                    Option 5
                  </a-menu-item>
                  <a-menu-item key="6">
                    Option 6
                  </a-menu-item>
                </a-sub-menu>
              </a-sub-menu>
              <a-sub-menu key="sub2">
                <span slot="title"
                  ><a-icon type="setting" /><span>Navigation Four</span></span
                >
                <a-menu-item key="7">
                  Option 7
                </a-menu-item>
                <a-menu-item key="8">
                  Option 8
                </a-menu-item>
                <a-menu-item key="9">
                  Option 9
                </a-menu-item>
                <a-menu-item key="10">
                  Option 10
                </a-menu-item>
              </a-sub-menu>
            </a-menu>
          </sdCards>
        </a-col>
        <a-col :md="12" :xs="24">
          <sdCards title="Vertical Menu">
            <a-menu
              mode="inline"
              :open-keys="openKeys"
              style="width: 256px"
              @openChange="onOpenChange"
            >
              <a-sub-menu key="sub1">
                <span slot="title"
                  ><a-icon type="mail" /><span>Navigation One</span></span
                >
                <a-menu-item key="1">
                  Option 1
                </a-menu-item>
                <a-menu-item key="2">
                  Option 2
                </a-menu-item>
                <a-menu-item key="3">
                  Option 3
                </a-menu-item>
                <a-menu-item key="4">
                  Option 4
                </a-menu-item>
              </a-sub-menu>
              <a-sub-menu key="sub2">
                <span slot="title"
                  ><a-icon type="appstore" /><span>Navigation Two</span></span
                >
                <a-menu-item key="5">
                  Option 5
                </a-menu-item>
                <a-menu-item key="6">
                  Option 6
                </a-menu-item>
                <a-sub-menu key="sub3" title="Submenu">
                  <a-menu-item key="7">
                    Option 7
                  </a-menu-item>
                  <a-menu-item key="8">
                    Option 8
                  </a-menu-item>
                </a-sub-menu>
              </a-sub-menu>
              <a-sub-menu key="sub4">
                <span slot="title"
                  ><a-icon type="setting" /><span>Navigation Three</span></span
                >
                <a-menu-item key="9">
                  Option 9
                </a-menu-item>
                <a-menu-item key="10">
                  Option 10
                </a-menu-item>
                <a-menu-item key="11">
                  Option 11
                </a-menu-item>
                <a-menu-item key="12">
                  Option 12
                </a-menu-item>
              </a-sub-menu>
            </a-menu>
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script>
import { PlusIcon } from "vue-feather-icons";
import { Main } from "../styled";

export default {
  name: "Menu",
  components: {
    PlusIcon,
    Main,
  },
  data() {
    return {
      current: ["mail"],
      rootSubmenuKeys: ["sub1", "sub2", "sub4"],
      openKeys: ["sub1"],
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
};
</script>
