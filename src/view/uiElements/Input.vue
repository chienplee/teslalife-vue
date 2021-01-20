<template>
  <div>
    <sdPageHeader title="Input">
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
        <a-col :md="12" :xs="24">
          <sdCards title="Basic">
            <a-input placeholder="Basic usage" />
          </sdCards>
          <sdCards title="Textarea">
            <a-textarea :rows="4" />
          </sdCards>
        </a-col>
        <a-col :md="12" :xs="24">
          <sdCards title="Three sizes of Input">
            <a-input size="large" placeholder="large size">
              <a-icon slot="prefix" type="user" />
            </a-input>
            <br />
            <br />
            <a-input placeholder="default size"
              ><a-icon slot="prefix" type="user"
            /></a-input>
            <br />
            <br />
            <a-input size="small" placeholder="small size"
              ><a-icon slot="prefix" type="user"
            /></a-input>
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
  name: "Input",
  components: {
    PlusIcon,
    Main,
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
