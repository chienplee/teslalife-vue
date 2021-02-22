<script>
import { Row, Col } from "ant-design-vue";
import { AnIcon, IconWrapper } from "./IconStyled";
import * as Icons from "@ant-design/icons";

export default {
  name: "AntdIcon",
  components: {
    AnIcon,
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
        {Object.values(Icons)
          .filter(
            (item) =>
              item.name !== "default" &&
              item.name !== "setTwoToneColor" &&
              item.name !== "getTwoToneColor" &&
              item.name !== "canlendar" &&
              item.name !== "interation" &&
              item.name !== "colum-height" &&
              item.name !== "createFromIconfontCN"
          )
          .map((icon, key) => {
            return (
              <Col xl={6} md={12} xs={24} key={key + 1}>
                <AnIcon className="icon-single">
                  <a-icon type={icon.name} />
                  <span> {icon.name}</span>
                </AnIcon>
              </Col>
            );
          })}
      </Row>
    );
  },
};
</script>
