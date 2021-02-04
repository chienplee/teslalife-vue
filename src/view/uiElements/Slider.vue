<template>
  <div>
    <sdPageHeader title="Slider">
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
    <Main> </Main>
  </div>
</template>

<script>
import { Empty } from "ant-design-vue";
import { Main } from "../styled";
import { PlusIcon } from "vue-feather-icons";
export default {
  name: "Empty",
  components: {
    PlusIcon,
    Main,
  },
  beforeCreate() {
    this.simpleImage = Empty.PRESENTED_IMAGE_SIMPLE;
  },
};
</script>
