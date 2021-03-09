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
      <template v-slot:suffix>
        <Button
          v-if="patternButtons"
          class="search-btn"
          :style="{ [rtl ? 'marginLeft' : 'marginRight']: -20 }"
          type="primary"
        >
          <a-icon type="search" />
        </Button>
        <a-icon v-else type="search" />
      </template>
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
import { mapGetters } from 'vuex';

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
      state: {
        dataSource: [],
        notData: this.dataSource,
      },
    };
  },
  computed: {
    ...mapGetters(['rtl']),
  },
  methods: {
    onSearching(searchText) {
      this.value = searchText;
      this.$emit('onSearch', searchText);
      let arrayData = [];
      const data = this.dataSource.filter(item => item.title.toUpperCase().startsWith(searchText.toUpperCase()));
      if (data.length) {
        data.map(item => arrayData.push(item.title));
      } else {
        arrayData = ['Data Not Found!'];
      }
      this.state.dataSource = !searchText ? [] : arrayData;
    },
    onSelect() {},
  },
};
</script>
