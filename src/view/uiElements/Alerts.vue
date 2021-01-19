<template>
  <div>
    <sd-PageHeader title="Blank Page">
      <div slot="buttons" class="page-header-actions">
        <sd-CalendarButton />
      </div>
    </sd-PageHeader>
    <Main>
        <h2 class="">Hello</h2>
    </Main>
  </div>
</template>

<script>
import config from "../../config/config";
// @Todo merge with global register
import { Main } from "../styled";
const { theme } = config;

export default {
  name: "Buttons",
  components: {
    Main,
  },
  data() {
    return {
      theme,
    };
  },
};
</script>
