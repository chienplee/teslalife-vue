<template>
  <div>
    <sdPageHeader title="Profile Settings">
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
        <a-col :xxl="6" :lg="8" :md="10" :xs="24">
          <AuthorBox />
        </a-col>
        <a-col :xxl="18" :lg="16" :md="14" :xs="24">
          <SettingWrapper> </SettingWrapper>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script>
import { Button } from "../../../components/buttons/Buttons";
import CalendarButton from "../../../components/buttons/CalendarButton";
import ExportButton from "../../../components/buttons/ExportButton";
import ShareButton from "../../../components/buttons/ShareButton";
import { Main } from "../../styled";
import { PlusIcon } from "vue-feather-icons";
import { SettingWrapper } from "./overview/style";
import AuthorBox from "./overview/ProfileAuthorBox";

export default {
  name: "Settings",
  components: {
    PlusIcon,
    Button,
    CalendarButton,
    ExportButton,
    ShareButton,
    Main,
    SettingWrapper,
    AuthorBox,
  },
  data() {
    return {};
  },
};
</script>
