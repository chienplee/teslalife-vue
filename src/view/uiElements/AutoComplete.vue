<template>
  <div>
    <sdPageHeader title="Auto Complete">
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
      <AutoCompleteWrapper>
        <a-row :gutter="25">
          <a-col :md="12" :sm="24" :xs="24">
            <sdCards title="Basic Usage">
              <div class="auto-complete-input">
                <sdAutoComplete :dataSource="searchData" @onSearch="onSearch" />
                <sdAutoComplete :dataSource="searchData" @onSearch="onSearch" />
              </div>
            </sdCards>
          </a-col>
        </a-row>
      </AutoCompleteWrapper>
    </Main>
  </div>
</template>

<script>
import { Main, AutoCompleteWrapper } from '../styled';

export default {
  name: 'AutoComplete',
  components: {
    Main,
    AutoCompleteWrapper,
  },
  data() {
    return {
      searchData: [
        {
          id: 1,
          title: 'AntDesign',
          count: 10000,
        },
        {
          id: 2,
          title: 'Design UI',
          count: 10600,
        },

        {
          id: 3,
          title: 'Bootstrap Design UI',
          count: 60100,
        },
        {
          id: 4,
          title: 'Meterial design',
          count: 30010,
        },

        {
          id: 5,
          title: 'AntDesign design language',
          count: 100000,
        },
      ],
    };
  },
  methods: {
    onSearch(searchText) {
      console.log(searchText);
    },
    patternSearch(searchText) {
      const data = this.searchData.filter(item => item.title.toUpperCase().startsWith(searchText.toUpperCase()));
      this.state.notData = data;
    },
  },
};
</script>
