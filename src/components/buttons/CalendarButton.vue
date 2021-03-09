<template>
  <sdPopover placement="bottomRight" title="Search by Calendar" action="click">
    <!-- <DateRangePickerOne slot="content" /> -->
    <sdButton size="small" type="white">
      <sdFeatherIcons type="calendar" size="14" />
      Calendar
    </sdButton>
  </sdPopover>
</template>

<script>
// import DateRangePickerOne from "../datePicker/DatePicker";

export default {
  name: 'CalendarButton',
  components: {
    // DateRangePickerOne,
  },
};
</script>
