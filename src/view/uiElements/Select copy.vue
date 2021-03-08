<template>
  <div>
    <sdPageHeader title="Select">
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
      <a-row :gutter="25">
        <a-col :md="12" xs="24">
          <sdCards title="Basic">
            <SelectWrapperStyle>
              <a-select
                default-value="lucy"
                style="width: 120px"
                @change="handleChange"
              >
                <a-select-option value="jack"> Jack </a-select-option>
                <a-select-option value="lucy"> Lucy </a-select-option>
                <a-select-option value="disabled" disabled>
                  Disabled
                </a-select-option>
                <a-select-option value="Yiminghe"> yiminghe </a-select-option>
              </a-select>
              <a-select default-value="lucy" style="width: 120px" disabled>
                <a-select-option value="lucy"> Lucy </a-select-option>
              </a-select>
              <a-select default-value="lucy" style="width: 120px" loading>
                <a-select-option value="lucy"> Lucy </a-select-option>
              </a-select>
            </SelectWrapperStyle>
          </sdCards>
          <sdCards title="Search and select">
            <a-select
              show-search
              placeholder="Select a person"
              option-filter-prop="children"
              style="width: 200px"
              :filter-option="filterOption"
              @focus="handleFocus"
              @blur="handleBlur"
              @change="SearchChange"
            >
              <a-select-option value="jack"> Jack </a-select-option>
              <a-select-option value="lucy"> Lucy </a-select-option>
              <a-select-option value="tom"> Tom </a-select-option>
            </a-select>
          </sdCards>
          <sdCards title="Select Size">
            <SelectRadioStyle>
              <a-radio-group v-model="size">
                <a-radio-button value="large"> Large </a-radio-button>
                <a-radio-button value="default"> Default </a-radio-button>
                <a-radio-button value="small"> Small </a-radio-button>
              </a-radio-group>
            </SelectRadioStyle>
            <br /><br />
            <a-select
              :size="size"
              default-value="a1"
              style="width: 200px"
              @change="sizeChange"
            >
              <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
                {{ (i + 9).toString(36) + i }}
              </a-select-option>
            </a-select>
            <br />
            <a-select
              mode="multiple"
              :size="size"
              placeholder="Please select"
              :default-value="['a1', 'b2']"
              style="width: 200px"
              @change="sizeChange"
              @popupScroll="popupScroll"
            >
              <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
                {{ (i + 9).toString(36) + i }}
              </a-select-option>
            </a-select>
            <br />
            <a-select
              mode="tags"
              :size="size"
              placeholder="Please select"
              :default-value="['a1', 'b2']"
              style="width: 200px"
              @change="sizeChange"
            >
              <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
                {{ (i + 9).toString(36) + i }}
              </a-select-option>
            </a-select>
          </sdCards>
          <sdCards title="Custom">
            <a-select default-value="lucy" style="width: 120px">
              <template v-slot:dropdownRender:menu>
                <div>
                  <v-nodes :vnodes="menu" />
                  <a-divider style="margin: 4px 0" />
                  <div
                    style="padding: 4px 8px; cursor: pointer"
                    @mousedown="(e) => e.preventDefault()"
                    @click="addItem"
                  >
                    <a-icon type="plus" /> Add item
                  </div>
                </div>
              </template>
              <a-select-option v-for="item in items" :key="item" :value="item">
                {{ item }}
              </a-select-option>
            </a-select>
          </sdCards>
          <sdCards title="Hide Already Selected">
            <a-select
              mode="multiple"
              placeholder="Inserted are removed"
              :value="selectedItems"
              style="width: 100%"
              @change="alreadyChange"
            >
              <a-select-option
                v-for="item in filteredOptions"
                :key="item"
                :value="item"
              >
                {{ item }}
              </a-select-option>
            </a-select>
          </sdCards>
        </a-col>
        <a-col :md="12" xs="24">
          <sdCards title="Select Coordinate">
            <SelectWrapperStyle>
              <a-select
                :default-value="provinceData[0]"
                style="width: 120px"
                @change="handleProvinceChange"
              >
                <a-select-option
                  v-for="province in provinceData"
                  :key="province"
                >
                  {{ province }}
                </a-select-option>
              </a-select>
              <a-select v-model="secondCity" style="width: 120px">
                <a-select-option v-for="city in cities" :key="city">
                  {{ city }}
                </a-select-option>
              </a-select>
            </SelectWrapperStyle>
          </sdCards>
          <sdCards title="Multiple select">
            <a-select
              mode="multiple"
              :default-value="['a1', 'b2']"
              style="width: 100%"
              placeholder="Please select"
              @change="multipleChange"
            >
              <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
                {{ (i + 9).toString(36) + i }}
              </a-select-option>
            </a-select>
          </sdCards>
          <sdCards title="Tags select">
            <a-select
              mode="tags"
              style="width: 100%"
              placeholder="Tags Mode"
              @change="tagChange"
            >
              <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
                {{ (i + 9).toString(36) + i }}
              </a-select-option>
            </a-select>
          </sdCards>
          <sdCards title="Group">
            <a-select
              default-value="lucy"
              style="width: 200px"
              @change="groupChange"
            >
              <a-select-opt-group>
                <template v-slot:label>
                  <span><a-icon type="user" />Manager</span>
                </template>
                <a-select-option value="jack"> Jack </a-select-option>
                <a-select-option value="lucy"> Lucy </a-select-option>
              </a-select-opt-group>
              <a-select-opt-group label="Engineer">
                <a-select-option value="Yiminghe"> yiminghe </a-select-option>
              </a-select-opt-group>
            </a-select>
          </sdCards>
          <sdCards title="Automatic Completion">
            <a-select
              mode="tags"
              style="width: 100%"
              :token-separators="[',']"
              @change="automaticChange"
            >
              <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
                {{ (i + 9).toString(36) + i }}
              </a-select-option>
            </a-select>
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script>
import { Main } from "../styled";
import { SelectWrapperStyle, SelectRadioStyle } from "./ui-elements-styled";
let index = 0;
const OPTIONS = ["Apples", "Nails", "Bananas", "Helicopters"];
const provinceData = ["Zhejiang", "Jiangsu"];
const cityData = {
  Zhejiang: ["Hangzhou", "Ningbo", "Wenzhou"],
  Jiangsu: ["Nanjing", "Suzhou", "Zhenjiang"],
};
export default {
  name: "Select",
  components: {
    Main,
    SelectWrapperStyle,
    SelectRadioStyle,
    VNodes: {
      functional: true,
      render: (h, ctx) => ctx.props.vnodes,
    },
  },
  data: () => ({
    items: ["jack", "lucy"],
    size: "default",
    selectedItems: [],
    provinceData,
    cityData,
    cities: cityData[provinceData[0]],
    secondCity: cityData[provinceData[0]][0],
  }),
  computed: {
    filteredOptions() {
      return OPTIONS.filter((o) => !this.selectedItems.includes(o));
    },
  },
  methods: {
    handleChange(value) {
      console.log(`selected ${value}`);
    },
    SearchChange(value) {
      console.log(`selected ${value}`);
    },
    handleBlur() {
      console.log("blur");
    },
    handleFocus() {
      console.log("focus");
    },
    filterOption(input, option) {
      return (
        option.componentOptions.children[0].text
          .toLowerCase()
          .indexOf(input.toLowerCase()) >= 0
      );
    },
    sizeChange(value) {
      console.log(`Selected: ${value}`);
    },
    popupScroll() {
      console.log("popupScroll");
    },
    addItem() {
      console.log("addItem");
      this.items.push(`New item ${index++}`);
    },
    alreadyChange(selectedItems) {
      this.selectedItems = selectedItems;
    },
    handleProvinceChange(value) {
      this.cities = cityData[value];
      this.secondCity = cityData[value][0];
    },
    multipleChange(value) {
      console.log(`selected ${value}`);
    },
    tagChange(value) {
      console.log(`selected ${value}`);
    },
    groupChange(value) {
      console.log(`selected ${value}`);
    },
    automaticChange(value) {
      console.log(`selected ${value}`);
    },
  },
};
</script>
