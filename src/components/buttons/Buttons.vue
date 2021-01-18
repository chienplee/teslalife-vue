<script>
import { ButtonStyled, ButtonStyledGroup } from "./styled";
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
  props: [
    "type",
    "shape",
    "icon",
    "size",
    "outlined",
    "ghost",
    "transparented",
    "raised",
    "squared",
    "color",
    "social",
    "load",
    "default",
    "block",
    "disabled",
  ],
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
        onClick={() => this.load && this.enterLoading}
        loading={this.loading}
        block={this.block}
        disabled={this.disabled}
      >
        {this.$slots.default}
      </ButtonStyled>
    );
  },
};

export const BtnGroup = {
  components: {
    ButtonStyledGroup,
  },

  render() {
    return <ButtonStyledGroup>{this.$slots.default}</ButtonStyledGroup>;
  },
};
export default Button;
</script>
