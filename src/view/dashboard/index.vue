<template>
  <div>
    <sdPageHeader title="Blank Page">
      <div slot="buttons" class="page-header-actions">
        <CalendarButton />
        <ExportButton />
        <ShareButton />
        <Button size="small" type="primary">
          <PlusIcon size="14" />
          Add New
        </Button>
      </div>
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
import { PlusIcon } from "vue-feather-icons";

const SocialMediaOverview = import("./overview/index/SocialMediaOverview");

export default {
  name: "Index",
  components: {
    PlusIcon,
    CalendarButton,
    ExportButton,
    ShareButton,
    Main,
  },
  data() {
    return {};
  },
};
</script>
