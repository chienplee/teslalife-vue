<script>
import { ButtonStyled, ButtonStyledGroup } from "./styled";
import VueTypes from "vue-types";
export const Button = {
  components: {
    ButtonStyled,
  },
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    enterLoading: function() {
      this.loading = true;
    },
  },
  props: {
    type: VueTypes.oneOf([
      "primary",
      "secondary",
      "success",
      "info",
      "warning",
      "danger",
      "link",
      "dark",
      "light",
      "white",
      "dashed",
      "error",
      "default",
    ]).def("default"),
    shape: VueTypes.string,
    icon: VueTypes.string,
    size: VueTypes.oneOf(["large", "default", "small"]),
    color: VueTypes.string,
    outlined: VueTypes.bool.def(false),
    block: VueTypes.bool.def(false),
    disabled: VueTypes.bool.def(false),
    transparented: VueTypes.bool.def(false),
    raised: VueTypes.bool.def(false),
    squared: VueTypes.bool.def(false),
    social: VueTypes.bool.def(false),
    load: VueTypes.bool.def(false),
    ghost: VueTypes.bool.def(false),
  },
  render() {
    return (
      <ButtonStyled
        squared={this.squared}
        outlined={this.outlined ? true : false}
        ghost={this.ghost}
        transparent={this.transparented ? true : false}
        raised={this.raised ? true : false}
        data={this.type}
        size={this.size}
        shape={this.shape}
        type={this.type}
        icon={this.icon}
        color={this.color}
        social={this.social}
        click={() => this.load && this.enterLoading}
        loading={this.loading}
        block={this.block}
        disabled={this.disabled}
      >
        {this.$slots.default()}
      </ButtonStyled>
    );
  },
};

export const BtnGroup = {
  components: {
    ButtonStyledGroup,
  },

  render() {
    return <ButtonStyledGroup>{this.$slots.default()}</ButtonStyledGroup>;
  },
};
export default Button;
</script>
