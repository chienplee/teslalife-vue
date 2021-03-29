<template>
  <div>
    <sdPageHeader title="Steps">
      <template v-slot:buttons>
        <div class="page-header-actions">
          <sdCalendarButton />
          <sdExportButton />
          <sdShareButton />
          <sdButton size="small" type="primary">
            <PlusIcon size="14" />
            Add New
          </sdButton>
        </div>
      </template>
    </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :md="12" :sm="24" :xs="24">
          <sdCards title="Basic" caption="The simplest use of slider"> </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script>
import { Main } from '../styled';
export default {
  name: 'Steps',
  components: {
    Main,
  },
};
</script>
