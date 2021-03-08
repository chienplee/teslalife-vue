<template>
  <div>
    <sdPageHeader title="Social Media Dashboard">
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
      <a-row justify="center" :gutter="25">
        <a-col :xxl="8" :lg="24" :xs="24">
          <SocialMediaOverview />
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script>
import { Main } from "../styled";
import SocialMediaOverview from "./overview/index/SocialMediaOverview";

export default {
  name: "BlankPage",
  components: {
    Main,
    SocialMediaOverview,
  },
  async setup() {},
};
</script>
