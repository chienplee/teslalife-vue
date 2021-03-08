<template>
  <div>
    <sdPageHeader title="Slider">
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
          <sdCards title="Basic" caption="The simplest use of slider">
            <Slider :min="0" :max="100" :defaultValue="30" />
            <Slider
              :onChange="onChange"
              :range="true"
              :defaultValues="[20, 50]"
            />
          </sdCards>
          <sdCards title="With Input" caption="The simplest use of slider">
            <div class="slider-with-input">
              <div class="slider-with-input__single">
                <h3>With integer</h3>
                <Slider input :min="1" :max="100" />
              </div>
              <div class="slider-with-input__single">
                <h3>With Decimal</h3>
                <Slider input :min="0" :max="1" :step="0.01" />
              </div>
            </div>
          </sdCards>
          <!-- 
          <sdCards title="Range" caption="The simplest use of slider">
            <Slider
              range
              :step="10"
              :default-values="[20, 50]"
              :onChange="onChange"
              :onAfterChange="onAfterChange"
            />
          </sdCards>
          <sdCards
            title="Graduated slider vertical"
            caption="The simplest use of slider"
          >
            <div>
              <div :style="style">
                <Slider vertical :default-value="30" />
              </div>
              <div :style="style">
                <Slider vertical range :step="10" :default-values="[20, 50]" />
              </div>
              <div :style="style">
                <Slider
                  vertical
                  range
                  :marks="marks"
                  :default-values="[26, 27]"
                />
              </div>
            </div>
          </sdCards> -->
        </a-col>
        <!-- <a-col :md="12" :sm="24" :xs="24">
          <sdCards title="with Icon" caption="The simplest use of slider">
            <Slider :onChange="onChange" icon :min="1" :max="100" />
          </sdCards>
          <sdCards
            title="Graduated slider"
            caption="The simplest use of slider"
          >
            <div>
              <h4>included=true</h4>
              <Slider :marks="marks" :default-value="37" />
              <Slider range :marks="marks" :default-values="[26, 37]" />

              <h4>included=false</h4>
              <Slider :marks="marks" :included="false" :default-value="37" />

              <h4>marks & step</h4>
              <Slider :marks="marks" :step="10" :default-value="37" />

              <h4>step=null</h4>
              <Slider :marks="marks" :step="null" :default-value="37" />
            </div>
          </sdCards>
        </a-col> -->
      </a-row>
    </Main>
  </div>
</template>

<script>
import { Main } from "../styled";
import Slider from "../../components/slider/Slider";
export default {
  name: "Sliders",
  components: {
    Main,
    Slider,
  },
  data() {
    return {
      onChangeValue: null,
      afterChangeValue: null,
      style: {
        display: "inline-block",
        height: 300,
        marginLeft: 70,
      },
      marks: {
        0: "0°C",
        26: "26°C",
        37: "37°C",
        100: {
          style: {
            color: "#f50",
          },
          label: <strong>100°C</strong>,
        },
      },
    };
  },
  methods: {
    onChange(value) {
      console.log(value);
      this.onChangeValue = value;
    },
    onAfterChange(value) {
      this.afterChangeValue = value;
    },
  },
};
</script>
