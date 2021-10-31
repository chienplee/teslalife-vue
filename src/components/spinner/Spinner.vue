<template>
  <div>
    <a-spin>
      <a-icon type="loading" style="font-size: 24px" spin />
    </a-spin>
    <a-spin :indicator="indicator" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      indicator: <a-icon type="loading" style="font-size: 28px" spin />,
    }
  },
}
</script>
