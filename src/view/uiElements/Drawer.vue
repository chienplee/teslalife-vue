<template>
  <div>
    <sdPageHeader title="Drawer">
      <template v-slot:buttons>
        <div class="page-header-actions">
          <sdCalendarButton />
          <sdExportButton />
          <sdShareButton />
          <sdButton size="small" type="primary">
            <sdFeatherIcons type="plus" size="14" />
            Add New
          </sdButton>
        </div>
      </template>
    </sdPageHeader>
    <Main>
      <a-row :gutter="25"> </a-row>
    </Main>
  </div>
</template>
<script>
import { Main } from "../styled";

export default {
  name: "Badge",
  components: {
    Main,
  },
};
</script>
