<template>
  <span>{{ workStartAt | convertTime }}〜{{ workEndAt | convertTime }}</span>
</template>
<script>
export default {
  props: {
    workDatetime: {
      type: Object,
      require: false,
      default: () => ({})
    }
  },
  data() {
    return {
      workStartAt: '',
      workEndAt: ''
    }
  },
  mounted() {
    this.workStartAt = this.workDatetime.start_at.date
    this.workEndAt = this.workDatetime.end_at.date
  }
}
</script>
