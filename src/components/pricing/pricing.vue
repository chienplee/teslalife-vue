<script>
import { ListStyle } from "./style";
import VueTypes from "vue-types";
import { CheckIcon } from "vue-feather-icons";

export default {
  name: "List",
  props: {
    text: VueTypes.oneOfType([VueTypes.string, VueTypes.object, VueTypes.node]),
  },
  components: {
    CheckIcon,
    ListStyle,
  },
  render() {
    return (
      <ListStyle class="list-single">
        <span class="icon">
          <CheckIcon size="14" />
        </span>
        <span>{this.text}</span>
      </ListStyle>
    );
  },
};
</script>
