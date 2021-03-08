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
          <Suspense>
            <template #default>
              <SocialMediaOverview />
            </template>
            <template #fallback>
              <sdCards headless>
                <a-skeleton active />
              </sdCards>
            </template>
          </Suspense>
        </a-col>
        <a-col :xxl="16" :xs="24">
          <Suspense>
            <template #default>
              <FacebookOverview />
            </template>
            <template #fallback>
              <sdCards headless>
                <a-skeleton active />
              </sdCards>
            </template>
          </Suspense>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script>
import { Main } from "../styled";
import { defineAsyncComponent } from "vue";
import FacebookOverview from "./overview/index/FacebookOverview";

const SocialMediaOverview = defineAsyncComponent(() =>
  import("./overview/index/SocialMediaOverview")
);
// const FacebookOverview = defineAsyncComponent(() =>
//   import("./overview/index/FacebookOverview")
// );

export default {
  name: "BlankPage",
  components: {
    Main,
    SocialMediaOverview,
    FacebookOverview,
  },
  async setup() {},
};
</script>
