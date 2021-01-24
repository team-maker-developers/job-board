<template>
  <v-container id="job_board">
    <v-row>
      <v-col cols="12">
        <h2 class="content_title">求人情報</h2>
      </v-col>
    </v-row>
    <job-content :job="job" />
    <v-row>
      <v-col cols="12">
        <h2 class="content_title">応募フォーム</h2>
      </v-col>
    </v-row>
    <job-form :job-id="job.id" />
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import jobContent from './job-content'
import jobForm from './job-form'

export default {
  components: { jobContent, jobForm },
  computed: {
    job() {
      return this.pagableContent.record
    },
    ...mapState('record', ['pagableContent'])
  }
}
</script>

<style lang="scss" scoped>
#job_board {
  .content_title {
    text-align: center;
    color: $sub-color;
    font-weight: bold;
    margin: 2rem 0;
  }

  .content_title::before,
  .content_title::after {
    content: 'ー';
    margin: 0.2rem;
    font-weight: bold;
  }
}
</style>
