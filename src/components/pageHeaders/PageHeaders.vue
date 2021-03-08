<script>
import { PageHeaderStyle } from "./style";
import VueTypes from "vue-types";
export const PageHeader = {
  components: {
    PageHeaderStyle,
  },
  props: {
    title: VueTypes.oneOfType([VueTypes.string, VueTypes.object]),
    subTitle: VueTypes.oneOfType([VueTypes.string, VueTypes.object]),
    bgColor: VueTypes.string,
    classes: VueTypes.string,
    routes: VueTypes.object,
    buttons: VueTypes.array,
    ghost: VueTypes.bool,
  },

  render() {
    return (
      <div>
        <div
          style={{
            backgroundColor: this.bgColor || "#F4F5F7",
          }}
        >
          <PageHeaderStyle
            style={{
              backgroundColor: "rgb(244, 245, 247)",
            }}
            class={this.classes}
            title={this.title}
            subTitle={this.subTitle}
            breadcrumb={this.routes && this.routes}
            ghost={this.ghost}
            extra={ this.$slots.buttons && this.$slots.buttons()}
          ></PageHeaderStyle>
        </div>
      </div>
    );
  },
};

export default PageHeader;
</script>
