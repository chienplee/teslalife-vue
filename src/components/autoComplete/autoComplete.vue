<template>
  <AutoCompleteStyled
    v-if="customComponent"
    :dataSource="dataSource"
    :style="{ width }"
    @select="onSelect"
    @search="onSearching"
  >
    <slot></slot>
  </AutoCompleteStyled>
  <AutoCompleteStyled
    v-else-if="patterns"
    class="certain-category-search"
    dropdownClassName="certain-category-search-dropdown"
    :dropdownMatchSelectWidth="false"
    :dropdownStyle="{ width: 300 }"
    :style="{ width }"
    :options="content"
    :placeholder="placeholder"
    @search="onSearching"
  >
    <a-input>
      <Button
        v-if="patternButtons"
        slot="suffix"
        class="search-btn"
        :style="{ [rtl ? 'marginLeft' : 'marginRight']: -20 }"
        type="primary"
      >
        <a-icon type="search" />
      </Button>
      <a-icon v-else type="search" />
    </a-input>
  </AutoCompleteStyled>
  <AutoCompleteStyled
    :data-source="searchData"
    :style="{ width }"
    @select="onSelect"
    @search="onSearching"
    :placeholder="placeholder"
    v-model="value"
    v-else
  />
</template>

<script>
import { AutoCompleteStyled } from "./style";
import VueTypes from "vue-types";
import { mapGetters } from "vuex";

export default {
  name: "AutoComplete",
  components: {
    AutoCompleteStyled,
  },
  props: {
    customComponent: VueTypes.bool.def(false),
    patterns: VueTypes.bool.def(false),
    patternButtons: VueTypes.bool.def(false),
    width: VueTypes.string.def("350px"),
    onSearch: VueTypes.func,
    dataSource: VueTypes.array,
    placeholder: VueTypes.string.def("Input here"),
  },
  data() {
    return {
      value: "",
    };
  },
  computed: {
    ...mapGetters(["rtl"]),
    searchData() {
      return this.dataSource;
    },
  },

  methods: {
    onSearching(searchText) {
      this.value = searchText;
      this.$emit("onSearch", searchText);
    },
    onSelect() {},
  },
};
</script>
