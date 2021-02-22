<template>
  <div>
    <sdPageHeader title="FeatherIcons">
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
          <sdCards title="Simply beautiful open source icons">
            <sdHeading as="h3">Skeleton Page</sdHeading>
            <p v-for="(Icon, key) in Object.keys(Icons)" :key="key + 1"></p>
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script>
import { Button } from "../../components/buttons/Buttons";
import CalendarButton from "../../components/buttons/CalendarButton";
import ExportButton from "../../components/buttons/ExportButton";
import ShareButton from "../../components/buttons/ShareButton";
import { Main } from "../styled";
import { PlusIcon } from "vue-feather-icons";
import * as Icons from "vue-feather-icons";

export default {
  name: "FeatherIcons",
  components: {
    PlusIcon,
    Button,
    CalendarButton,
    ExportButton,
    ShareButton,
    Main,
  },
  data() {
    return {
      Icons,
    };
  },
};
</script>
