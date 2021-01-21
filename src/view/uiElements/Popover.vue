<template>
  <div>
    <sdPageHeader title="Popover">
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
            <sdCards title="Basic Popover">
              <sdPopover placement="bottomLeft">
                <router-link to="#">Hover me</router-link>
              </sdPopover>
            </sdCards>
            <sdCards title="Event menu">
              <sdPopover action="hover" placement="bottomLeft">
                <router-link to="#">hover me </router-link>
              </sdPopover>
              <sdPopover action="click" placement="bottom">
                <router-link to="#">click </router-link>
              </sdPopover>
            </sdCards>
          </a-col>
          <a-col :md="12" :xs="24">
            <sdCards title="Placement">
              <sdPopover placement="bottomLeft">
                <sdButton
                  class="btn-outlined"
                  size="small"
                  :outlined="true"
                  type="light"
                >
                  Bottom Left
                </sdButton>
              </sdPopover>
              <sdPopover placement="bottom">
                <sdButton
                  class="btn-outlined"
                  size="small"
                  :outlined="true"
                  type="light"
                >
                  Bottom Center
                </sdButton>
              </sdPopover>
              <sdPopover placement="bottomRight">
                <sdButton
                  class="btn-outlined"
                  size="small"
                  :outlined="true"
                  type="light"
                >
                  Bottom Right
                </sdButton>
              </sdPopover>
              <br />
              <sdPopover placement="topLeft">
                <sdButton
                  class="btn-outlined"
                  size="small"
                  :outlined="true"
                  type="light"
                >
                  Top Left
                </sdButton>
              </sdPopover>
              <sdPopover placement="top">
                <sdButton
                  class="btn-outlined"
                  size="small"
                  :outlined="true"
                  type="light"
                >
                  Top Center
                </sdButton>
              </sdPopover>
              <sdPopover placement="topRight">
                <sdButton
                  class="btn-outlined"
                  size="small"
                  :outlined="true"
                  type="light"
                >
                  Top Right
                </sdButton>
              </sdPopover>
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
import { DropdownStyle } from "./ui-elements-styled";

export default {
  name: "Popover",
  components: {
    PlusIcon,
    Main,
    DropdownStyle,
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
