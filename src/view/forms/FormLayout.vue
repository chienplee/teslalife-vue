<template>
  <div>
    <sdPageHeader title="Horizontal Form">
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
        <a-col :lg="12" :xs="24">
          <HorizontalForm />
        </a-col>
        <a-col :lg="12" :xs="24">
          <HorizontalIconForm />
        </a-col>
        <a-col :lg="12" :xs="24">
          <VerticalForm />
        </a-col>
        <a-col :lg="12" :xs="24">
          <VerticalIconForm />
        </a-col>
        <a-col :xs="24">
          <MultiColumnForm />
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script>
import { Main } from "../styled";
import { PlusIcon } from "vue-feather-icons";
import HorizontalForm from "./overview/HorizontalForm";
import HorizontalIconForm from "./overview/HorizontalIconForm";
import VerticalForm from "./overview/VerticalForm";
import VerticalIconForm from "./overview/VerticalIconForm";
import MultiColumnForm from "./overview/MultiColumnForm";
export default {
  name: "Form",
  components: {
    PlusIcon,
    Main,
    HorizontalForm,
    HorizontalIconForm,
    VerticalForm,
    VerticalIconForm,
    MultiColumnForm,
  },
};
</script>
