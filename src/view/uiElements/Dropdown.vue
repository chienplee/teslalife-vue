<template>
  <div>
    <sdPageHeader title="Dropdown">
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
    <DropdownStyle>
      <Main>
        <a-row :gutter="25">
          <a-col :md="12" :xs="24">
            <sdCards title="Basic Dropdown">
              <sdDropdown placement="bottomLeft">
                <router-link to="#">Hover me</router-link>
              </sdDropdown>
            </sdCards>
            <sdCards title="Event menu">
              <sdDropdown :action="['hover']" placement="bottomLeft">
                <router-link to="#">hover me </router-link>
              </sdDropdown>
              <sdDropdown :action="['click']" placement="bottomCenter">
                <router-link to="#">click </router-link>
              </sdDropdown>
            </sdCards>
          </a-col>
          <a-col :md="12" :xs="24">
            <sdCards title="Placement">
              <sdDropdown placement="bottomLeft">
                <sdButton
                  class="btn-outlined"
                  size="small"
                  :outlined="true"
                  type="light"
                >
                  Bottom Left
                </sdButton>
              </sdDropdown>
              <sdDropdown placement="bottomCenter">
                <sdButton
                  class="btn-outlined"
                  size="small"
                  :outlined="true"
                  type="light"
                >
                  Bottom Center
                </sdButton>
              </sdDropdown>
              <sdDropdown placement="bottomRight">
                <sdButton
                  class="btn-outlined"
                  size="small"
                  :outlined="true"
                  type="light"
                >
                  Bottom Right
                </sdButton>
              </sdDropdown>
              <br />
              <sdDropdown placement="topLeft">
                <sdButton
                  class="btn-outlined"
                  size="small"
                  :outlined="true"
                  type="light"
                >
                  Top Left
                </sdButton>
              </sdDropdown>
              <sdDropdown placement="topCenter">
                <sdButton
                  class="btn-outlined"
                  size="small"
                  :outlined="true"
                  type="light"
                >
                  Top Center
                </sdButton>
              </sdDropdown>
              <sdDropdown placement="topRight">
                <sdButton
                  class="btn-outlined"
                  size="small"
                  :outlined="true"
                  type="light"
                >
                  Top Right
                </sdButton>
              </sdDropdown>
            </sdCards>
            <sdCards title="Button with dropdown menu">
              <DropdownIconStyleWrapper>
                <sdButton
                  @click.native="handleButtonClick"
                  class="btn-outlined"
                  size="default"
                  :outlined="true"
                  type="light"
                >
                  Bottom Left Click
                  <sdDropdown placement="bottomLeft" :action="['click']">
                    <router-link to="#">
                      <a-icon type="ellipsis" />
                    </router-link>
                  </sdDropdown>
                </sdButton>
                <sdButton class="btn-outlined" :outlined="true" type="light">
                  Top Left hover
                  <sdDropdown placement="topLeft">
                    <router-link to="#">
                      <a-icon type="ellipsis" />
                    </router-link>
                  </sdDropdown>
                </sdButton>
                <sdButton
                  @click.native="handleButtonClick"
                  class="btn-outlined"
                  size="default"
                  :outlined="true"
                  type="light"
                >
                  Bottom Right hover
                  <sdDropdown placement="bottomRight" :action="['hover']">
                    <router-link to="#">
                      <a-icon type="user" />
                    </router-link>
                  </sdDropdown>
                </sdButton>
                <sdButton class="btn-outlined" :outlined="true" type="light">
                  Top Right hover
                  <sdDropdown placement="topRight">
                    <router-link to="#">
                      <a-icon type="ellipsis" />
                    </router-link>
                  </sdDropdown>
                </sdButton>
                <sdButton class="btn-outlined" :outlined="true" type="error">
                  <a-tooltip title="tooltip" key="leftButton">
                    Tooltip
                  </a-tooltip>
                  <sdDropdown placement="bottomLeft" size="small">
                    <router-link to="#">
                      <a-icon type="ellipsis" />
                    </router-link>
                  </sdDropdown>
                </sdButton>
                <sdButton class="btn-outlined" :outlined="true" type="warning">
                  Warning
                  <sdDropdown placement="bottomLeft" size="small">
                    <router-link to="#">
                      <a-icon type="ellipsis" />
                    </router-link>
                  </sdDropdown>
                </sdButton>
                <sdButton class="btn-outlined" :outlined="true" type="light">
                  Info
                  <sdDropdown placement="bottomLeft" size="small">
                    <router-link to="#">
                      <a-icon type="download" />
                    </router-link>
                  </sdDropdown>
                </sdButton>
              </DropdownIconStyleWrapper>
            </sdCards>
          </a-col>
        </a-row>
      </Main>
    </DropdownStyle>
  </div>
</template>

<script>
import { PlusIcon } from "vue-feather-icons";
import { Main } from "../styled";
import { DropdownStyle, DropdownIconStyleWrapper } from "./ui-elements-styled";

export default {
  name: "Dropdown",
  components: {
    PlusIcon,
    Main,
    DropdownStyle,
    DropdownIconStyleWrapper,
  },
  data() {
    return {};
  },
  methods: {
    handleButtonClick() {
      // this.$message.info("Click on left button.");
    },
  },
};
</script>
