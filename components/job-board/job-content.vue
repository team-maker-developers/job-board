<template>
  <v-row class="job_content">
    <v-col cols="12">
      <h3>概要</h3>
      <p>{{ job.job_content }}</p>
    </v-col>
    <v-col cols="12">
      <h3>雇用形態</h3>
      <p>{{ job.employment_category.name }}</p>
    </v-col>
    <v-col cols="12">
      <h3>給与</h3>
      <p>{{ job.salary.value }}</p>
    </v-col>
    <v-col cols="12">
      <h3>勤務地</h3>
      <p>{{ job.place.value }}</p>
    </v-col>
    <v-col cols="12">
      <h3>勤務時間</h3>
      <p>{{ job.work_datetime.value }}</p>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    job: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.job_content {
  h3 {
    color: $sub-color;
    font-weight: bold;
  }

  p {
    margin: 0.2rem 0;
  }
}
</style>
