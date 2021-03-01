<template>
  <div>
    <sdPageHeader title="Pricing Table">
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
      <ErrorWrapper>
        <img :src="require(`../../static/img/pages/404.svg`)" alt="404" />
        <sdHeading class="error-text" as="h3">
          404
        </sdHeading>
        <p>Sorry! the page you are looking for doesn't exist.</p>
        <router-link to="/admin">
          <Button size="default" type="primary" to="/admin">
            Return Home
          </Button>
        </router-link>
      </ErrorWrapper>
    </Main>
  </div>
</template>

<script>
import { Button } from "../../components/buttons/Buttons";
import CalendarButton from "../../components/buttons/CalendarButton";
import ExportButton from "../../components/buttons/ExportButton";
import ShareButton from "../../components/buttons/ShareButton";
import { Main } from "../styled";
import { ErrorWrapper } from './style';
import { PlusIcon } from "vue-feather-icons";
export default {
  name: "Sidebar",
  components: {
    PlusIcon,
    Button,
    CalendarButton,
    ExportButton,
    ShareButton,
    Main,
    ErrorWrapper
  },
  data() {
    return {};
  },
};
</script>
