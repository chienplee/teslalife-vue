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
      <AutoCompleteWrapper>
        <a-row :gutter="25">
          <a-col :md="12" :sm="24" :xs="24">
            <Cards title="Basic Usage">
              <div class="auto-complete-input">
                <AutoComplete
                  :dataSource="state.dataSource"
                  @onSearch="onSearch"
                />
                <AutoComplete
                  :dataSource="state.dataSource"
                  @onSearch="onSearch"
                />
              </div>
            </Cards>
          </a-col>
        </a-row>
      </AutoCompleteWrapper>
    </Main>
  </div>
</template>

<script>
import { Button } from "../../components/buttons/Buttons";
import CalendarButton from "../../components/buttons/CalendarButton";
import ExportButton from "../../components/buttons/ExportButton";
import ShareButton from "../../components/buttons/ShareButton";
import { Main, AutoCompleteWrapper } from "../styled";
import { PageHeader } from "../../components/pageHeaders/PageHeaders";
import { PlusIcon } from "vue-feather-icons";
import Cards from "../../components/cards/frame/CardsFrame";
import AutoComplete from "../../components/autoComplete/autoComplete";

export default {
  name: "Buttons",
  components: {
    PlusIcon,
    Button,
    CalendarButton,
    ExportButton,
    ShareButton,
    Main,
    PageHeader,
    Cards,
    AutoCompleteWrapper,
    AutoComplete,
  },
  data() {
    return {
      searchData: [
        {
          id: 1,
          title: "AntDesign",
          count: 10000,
        },
        {
          id: 2,
          title: "Design UI",
          count: 10600,
        },

        {
          id: 3,
          title: "Bootstrap Design UI",
          count: 60100,
        },
        {
          id: 4,
          title: "Meterial design",
          count: 30010,
        },

        {
          id: 5,
          title: "AntDesign design language",
          count: 100000,
        },
      ],
      state: {
        dataSource: this.searchData,
        notData: this.searchData,
      },
    };
  },
  methods: {
    onSearch(searchText) {
      let arrayData = [];
      const data = this.searchData.filter((item) =>
        item.title.toUpperCase().startsWith(searchText.toUpperCase())
      );
      if (data.length) {
        data.map((item) => arrayData.push(item.title));
      } else {
        arrayData = ["Data Not Found!"];
      }
      this.state.dataSource = !searchText ? [] : arrayData;
    },
    patternSearch(searchText) {
      const data = this.searchData.filter((item) =>
        item.title.toUpperCase().startsWith(searchText.toUpperCase())
      );

      this.state.notData = data;
    },
  },
};
</script>
