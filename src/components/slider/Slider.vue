<template>
  <div>
    <a-row v-if="input">
      <a-col :xl="20" :xs="24">
        <a-slider
          :min="min"
          :max="max"
          @change="onChanges"
          :v-model="typeof inputValue === 'number' ? inputValue : 0"
          :step="step"
        />
      </a-col>
      <a-col :xl="4" :xs="24">
        <a-input-number :min="min" :max="max" :v-model="inputValue" @change="onChanges" :step="step" />
      </a-col>
    </a-row>
    <IconWrapper v-else-if="icon">
      <!-- <a-icon type="frown" :style="{ color: preColor }" />
    <a-slider :min="mini" :max="maxi" @change="handleChange" :v-model="value" />
    <a-icon type="frown" :style="{ color: nextColor }" /> -->
    </IconWrapper>
    <a-slider
      :range="range"
      :step="10"
      v-else
      id="test"
      :default-value="defaultValue || defaultValues"
      :max="defaultValue || defaultValues[1]"
      @change="onChanges"
    />
  </div>
</template>

<script>
import VueTypes from 'vue-types';
import { IconWrapper } from './style';
export default {
  name: 'Slider',
  components: {
    IconWrapper,
  },
  props: {
    defaultValue: VueTypes.number,
    defaultValues: VueTypes.array,
    range: VueTypes.bool.def(false),
    step: VueTypes.number.def(2),
    input: VueTypes.bool.def(false),
    icon: VueTypes.bool.def(false),
    marks: VueTypes.object,
    vertical: VueTypes.bool.def(false),
    min: VueTypes.number.def(0),
    max: VueTypes.number.def(100),
    onAfterChange: VueTypes.func,
  },
  data() {
    return {
      inputValue: 1,
      mini: this.min,
      maxi: this.max,
      value: '',
      mid: ((this.maxi - this.mini) / 2).toFixed(5),
      preColor: this.value >= this.mid ? '' : 'rgba(0, 0, 0, .45)',
      nextColor: this.value >= this.mid ? 'rgba(0, 0, 0, .45)' : '',
    };
  },
  methods: {
    onChanges(value) {
      this.inputValue = this.value;
      this.$emit('onChange', value);
    },
    handleChange(value) {
      this.value = value;
      if (this.onChange) this.onChange(value);
    },
    onAfterChanges(values) {
      this.$emit('onAfterChange', values);
    },
  },
};
</script>
