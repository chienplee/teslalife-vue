<template>
  <div>
    <sdPageHeader title="Pricing Table">
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
import { Main } from "../styled";
import { ErrorWrapper } from './style';
export default {
  name: "Sidebar",
  components: {
    Button,
    Main,
    ErrorWrapper
  },
  data() {
    return {};
  },
};
</script>
