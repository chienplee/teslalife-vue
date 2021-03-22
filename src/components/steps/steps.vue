<template>
  <StepsStyle
    v-if="!isSwitch"
    :type="navigation && 'navigation'"
    :style="navigation && stepStyle"
    :size="size"
    :current="navigation ? currents : current"
    :direction="direction"
    :status="status"
    progressDot="progressDot"
    @change="onChanges"
  >
    <slot></slot>
  </StepsStyle>

  <template v-else>
    <StepsStyle
      v-if="steps !== undefined"
      :current="currents"
      :direction="direction"
      :status="status"
      :progressDot="progressDot"
      :size="size"
    >
      <a-step
        v-for="item in steps"
        :class="item.class && item.class"
        :icon="item.icon && item.icon"
        :key="item.title"
        :title="item.title"
      />
    </StepsStyle>

    <div v-if="isVertical" class="steps-wrapper">
      <div
        class="steps-content"
        :style="{ minHeight: height, display: 'flex', justifyContent: 'center', marginTop: 100 }"
      >
        {{ steps[currents].content }}
      </div>
      <ActionWrapper v-if="!isFinished">
        <div class="step-action-wrap">
          <div class="step-action-inner">
            <a-row>
              <a-col :xs="24">
                <div class="steps-action">
                  <sdButton v-if="currents > 0" class="btn-prev" type="light" @click="() => prev()">
                    <sdFeatherIcons type="arrow-left" size="16" />
                    Previous
                  </sdButton>

                  <sdButton v-if="currents < steps.length - 1" class="btn-next" type="primary" @click="() => next()">
                    Save & Next
                    <sdFeatherIcons type="arrow-right" size="16" />
                  </sdButton>

                  <sdButton v-if="currents === steps.length - 1" type="primary" @click="onDone">
                    Done
                  </sdButton>
                </div>
              </a-col>
            </a-row>
          </div>
        </div>
      </ActionWrapper>
    </div>
    <template v-else>
      <div
        class="steps-content"
        :style="{ minHeight: height, display: 'flex', justifyContent: 'center', marginTop: 100 }"
      >
        {{ steps[currents].content }}
      </div>
      <ActionWrapper v-if="!isFinished">
        <div class="step-action-wrap">
          <div class="step-action-inner">
            <a-row>
              <a-col :xs="24">
                <div class="steps-action">
                  <sdButton v-if="currents > 0" class="btn-prev" type="light" @click="() => prev()">
                    <sdFeatherIcons type="arrow-left" size="16" />
                    Previous
                  </sdButton>
                  <sdButton v-if="currents < steps.length - 1" class="btn-next" type="primary" @click="() => next()">
                    Save & Next
                    <sdFeatherIcons type="arrow-right" size="16" />
                  </sdButton>
                  <sdButton v-if="currents === steps.length - 1" type="primary" @click="onDone">
                    Done
                  </sdButton>
                </div>
              </a-col>
            </a-row>
          </div>
        </div>
      </ActionWrapper>
    </template>
  </template>
</template>
<script>
import { toRefs, ref } from 'vue';
import PropTypes from 'vue-types';
import { StepsStyle, ActionWrapper } from './style';

const stepStyle = {
  marginBottom: 60,
  boxShadow: '0px -1px 0 0 #e8e8e8 inset',
};

const Steps = {
  name: 'Steps',
  components: { StepsStyle, ActionWrapper },
  props: {
    size: PropTypes.string,
    current: PropTypes.number.def(0),
    direction: PropTypes.string,
    status: PropTypes.string,
    progressDot: PropTypes.func,
    steps: PropTypes.arrayOf(PropTypes.object),
    isSwitch: PropTypes.bool.def(false),
    navigation: PropTypes.bool.def(false),
    isFinished: PropTypes.bool.def(false),
    height: PropTypes.number.def(150),
  },
  emits: {
    onNext: null,
    onPrev: null,
    onChange: null,
  },
  setup(props, { emit }) {
    const { current } = toRefs(props);

    const currents = ref(current);
    const next = () => {
      currents.value = currents.value + 1;
      emit('onNext', currents);
    };

    const prev = () => {
      currents.value = currents.value - 1;
      emit('onPrev', currents);
    };
    const onChanges = curr => {
      currents.value = curr;
      emit('onChange', curr);
    };
    return {
      onChanges,
      prev,
      next,
      currents,
      stepStyle,
    };
  },
};

export default Steps;
</script>
