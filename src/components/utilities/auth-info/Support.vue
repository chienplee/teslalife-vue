<template>
  <div class="support">
    <sdPopover placement="bottomLeft" action="click">
      <template v-slot:content>
        <NestedDropdwon>
          <div class="support-dropdwon">
            <ul>
              <Heading as="h5">Documentation</Heading>
              <li>
                <a to="#">How to customize admin</a>
              </li>
              <li>
                <a to="#">How to use</a>
              </li>
              <li>
                <a to="#">The relation of vertical spacing</a>
              </li>
            </ul>
            <ul>
              <Heading as="h5">Payments</Heading>
              <li>
                <a to="#">How to customize admin</a>
              </li>
              <li>
                <a to="#">How to use</a>
              </li>
            </ul>
            <ul>
              <Heading as="h5">Content Planner</Heading>
              <li>
                <a to="#">How to customize admin</a>
              </li>
              <li>
                <a to="#">How to use</a>
              </li>
            </ul>
          </div>
        </NestedDropdwon>
      </template>
      <a to="#" class="head-example">
        <sdFeatherIcons type="help-circle" size="20" />
      </a>
    </sdPopover>
  </div>
</template>

<script>
import { NestedDropdwon } from "./auth-info-style";
import * as icons from "@ant-design/icons-vue";

export default {
  name: "Support",
  components: {
    NestedDropdwon,
  },
  data() {
    console.log(icons);
  },
};
</script>
