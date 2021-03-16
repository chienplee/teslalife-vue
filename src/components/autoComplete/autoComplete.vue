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
    v-model:value="value"
    class="certain-category-search"
    dropdownClassName="certain-category-search-dropdown"
    :dropdownMatchSelectWidth="false"
    :dropdownStyle="{ width: 300 }"
    :style="{ width }"
    :options="content"
    :placeholder="placeholder"
    @search="onSearching"
  >
    <template v-if="myData.length" #dataSource>
      <a-select-opt-group v-for="item in myData" :key="item.title">
        {{ item.title }}
      </a-select-opt-group>
    </template>
    <a-input>
      <template #suffix><sdFeatherIcons type="search"/></template>
    </a-input>
  </AutoCompleteStyled>

  <AutoCompleteStyled
    :data-source="state.dataSource"
    :style="{ width }"
    @select="onSelect"
    @search="onSearching"
    :placeholder="placeholder"
    :value="value"
    v-else
  />
</template>

<script>
import { AutoCompleteStyled } from './style';
import VueTypes from 'vue-types';

export default {
  name: 'AutoComplete',
  components: {
    AutoCompleteStyled,
  },
  props: {
    customComponent: VueTypes.bool.def(false),
    patterns: VueTypes.bool.def(false),
    patternButtons: VueTypes.bool.def(false),
    width: VueTypes.string.def('350px'),
    onSearch: VueTypes.func,
    dataSource: VueTypes.array,
    placeholder: VueTypes.string.def('Input here'),
  },
  data() {
    return {
      value: '',
      myData: [],
    };
  },
  computed: {
    rtl() {
      return this.$store.state.themeLayout.rtlData;
    },
  },
  methods: {
    onSearching(searchText) {
      this.value = searchText;
      const data = this.dataSource.filter(item => item.title.toUpperCase().startsWith(searchText.toUpperCase()));
      this.myData = !searchText ? [] : data;
    },
    onSelect() {},
  },
};
</script>
