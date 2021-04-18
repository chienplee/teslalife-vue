<template>
  <sdPopover placement="bottomRight" title="Search by Calendar" action="click">
    <!-- <DateRangePickerOne slot="content" /> -->
    <template #content
      ><v-calendar :columns="$screens({ default: 1, lg: 2 })" is-expanded v-model="range" is-range
    /></template>
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
  data() {
    return {
      range: {
        start: new Date(2020, 0, 1),
        end: new Date(2020, 0, 5),
      },
    };
  },
};
</script>
