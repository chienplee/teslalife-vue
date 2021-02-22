<script>
import * as Icons from "vue-feather-icons";
import { Row, Col } from "ant-design-vue";
import { Icon, IconWrapper } from "./IconStyled";

export default {
  name: "FeatherIcon",
  components: {
    Icon,
    IconWrapper,
  },
  data() {
    return {
      Icons,
    };
  },
  render() {
    return (
      <Row gutter={15}>
        {Object.keys(Icons).map((icon) => {
          const CustomTag = Icons[icon];
          return (
            <Col xl={6} md={12} xs={24} key={icon}>
              <Icon className="icon-single">
                <CustomTag size="14" />
                <span> {icon}</span>
              </Icon>
            </Col>
          );
        })}
      </Row>
    );
  },
};
</script>
