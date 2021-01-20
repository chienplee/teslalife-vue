<template>
  <div>
    <sdPageHeader title="List">
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
          <sdCards title="Simple list">
            <a-list bordered :data-source="data">
              <a-list-item slot="renderItem" slot-scope="item">
                {{ item }}
              </a-list-item>
              <div slot="header">
                Header
              </div>
              <div slot="footer">
                Footer
              </div>
            </a-list>
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
  name: "List",
  components: {
    PlusIcon,
    Main,
  },
  data() {
    return {
      data: [
        "Racing car sprays burning fuel into crowd.",
        "Japanese princess to wed commoner.",
        "Australian walks 100km after outback crash.",
        "Man charged over missing wedding girl.",
        "Los Angeles battles huge wildfires.",
      ],
    };
  },
  methods: {},
};
</script>
