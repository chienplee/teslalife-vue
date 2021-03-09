<template>
  <ModalStyled
    :title="title"
    :visible="visible"
    :confirmLoading="confirmLoading"
    @ok="onOk"
    @cancel="onCancel"
    :type="color ? this.type : false"
    :width="width"
    :class="className"
  >
    <template v-slot:footer>
      <sdButton type="white" :outlined="color ? false : true" key="back" @click="onCancel">
        Return
      </sdButton>
      <sdButton
        key="submit"
        :type="color ? 'white' : type"
        :outlined="type !== 'white' ? false : true"
        :loading="confirmLoading"
        @click="handleOk"
      >
        Submit
      </sdButton>
    </template>
    <slot></slot>
  </ModalStyled>
</template>

<script>
import { ModalStyled } from './styled';
import VueTypes, { object } from 'vue-types';
export default {
  name: 'Modal',
  components: {
    ModalStyled,
  },
  props: {
    onCancel: VueTypes.func,
    onOk: VueTypes.func,
    visible: VueTypes.bool.def(false),
    confirmLoading: VueTypes.bool.def(false),
    title: VueTypes.string,
    className: VueTypes.string.def('atbd-modal'),
    type: VueTypes.oneOf(['primary', 'secondary', 'success', 'error', 'danger', 'info', 'white', 'warning']).def(
      'white',
    ),
    footer: VueTypes.arrayOf(object),
    width: VueTypes.number.def(620),
    color: VueTypes.oneOfType([VueTypes.bool, VueTypes.string]).def(false),
  },
};
</script>
