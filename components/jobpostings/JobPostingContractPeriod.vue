<template>
  <span>{{ finishedAt | convertDate }}まで</span>
</template>
<script>
export default {
  props: {
    contractPeriod: {
      type: Object,
      require: false,
      default: () => ({})
    }
  },
  data() {
    return {
      finishedAt: ''
    }
  },
  mounted() {
    this.finishedAt = this.contractPeriod.finished_at
  }
}
</script>
