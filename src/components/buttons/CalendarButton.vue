<template>
  <Popover placement="bottomRight" title="Search by Calendar" action="click">
    <DateRangePickerOne slot="content" />
    <Button size="small" type="white">
      <CalendarIcon size="14" />
      Calendar
    </Button>
  </Popover>
</template>

<script>
import Popover from "../popup/Popup";
import { Button } from "./Buttons";
import { CalendarIcon } from "vue-feather-icons";
import DateRangePickerOne from "../datePicker/DatePicker";

export default {
  name: "CalendarButton",
  components: {
    Button,
    Popover,
    CalendarIcon,
    DateRangePickerOne,
  },
};
</script>
