<template>
  <div>
    <PageHeader title="Blank Page">
      <div slot="buttons" class="page-header-actions">
        <CalendarButton />
        <ExportButton />
        <ShareButton />
        <Button size="small" type="primary">
          <PlusIcon size="14" />
          Add New
        </Button>
      </div>
    </PageHeader>
    <Main>
      <div :style="{ height: '100vh' }">
        <Heading as="h5">StrikingDash</Heading>
      </div>
    </Main>
  </div>
</template>

<script>
import { Button } from "../../components/buttons/Buttons";
import CalendarButton from "../../components/buttons/CalendarButton";
import ExportButton from "../../components/buttons/ExportButton";
import ShareButton from "../../components/buttons/ShareButton";
import { Main } from "../styled";
import { PageHeader } from "../../components/pageHeaders/PageHeaders";
import { PlusIcon } from "vue-feather-icons";
import Heading from "../../components/heading/Heading";

export default {
  name: "Sidebar",
  components: {
    PlusIcon,
    Button,
    CalendarButton,
    ExportButton,
    ShareButton,
    Main,
    PageHeader,
    Heading,
  },
  data() {
    return {};
  },
};
</script>
