<<<<<<< HEAD
=======
<template>
  <div>
    <sdPageHeader title="Breadcrumb">
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
      <a-row :gutter="25"> </a-row>
    </Main>
  </div>
</template>

<script>
import { Main } from "../styled";
import { PlusIcon } from "vue-feather-icons";

export default {
  name: "Badge",
  components: {
    PlusIcon,
    Main,
  },
};
</script>
>>>>>>> bd666f3ef0606e12a11d40ebd36c18ead13cb6c6
