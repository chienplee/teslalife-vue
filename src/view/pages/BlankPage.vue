<template>
  <div>
    <sdPageHeader title="Blank Page">
      <template v-slot:buttons>
        <div class="page-header-actions">
          <CalendarButton />
          <ExportButton />
          <ShareButton />
          <sdButton size="small" type="primary">
            <PlusOutlined size="14" />
            Add New
          </sdButton>
        </div>
      </template>
    </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :sm="24" :xs="24">
          <sdCards headless>
            <sdHeading as="h3">Skeleton Page</sdHeading>
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script>
import CalendarButton from "../../components/buttons/CalendarButton";
import ExportButton from "../../components/buttons/ExportButton";
import ShareButton from "../../components/buttons/ShareButton";
import { Main } from "../styled";
import { PlusOutlined } from "@ant-design/icons-vue";

export default {
  name: "BlankPage",
  components: {
    PlusOutlined,
    CalendarButton,
    ExportButton,
    ShareButton,
    Main,
  },
};
</script>
