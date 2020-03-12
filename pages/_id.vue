<template>
  <div>
    <apply-job
      v-if="isApplied"
      :data="records"
      :refer-code="$route.query.refer_code"
    />
    <job-posting v-else :data="records" @apply="isApplied = true" />
  </div>
</template>

<script>
import JobPosting from '~/components/jobpostings/JobPostingList.vue'
import ApplyJob from '~/components/form/ApplyJob.vue'

export default {
  layout: 'default',
  components: {
    JobPosting,
    ApplyJob
  },
  head() {
    return {
      title: this.data.meta.title
    }
  },
  async asyncData({ $axios, env, params, store, error }) {
    try {
      const data = await $axios.$get(
        `https://jsondata.okiba.me/v1/json/1ERa7200309124631`
      )
      const records = data.content.pageable_content.record
      store.commit('headers/setCompanyNameState', data.company.name)
      return {
        data,
        records,
        isApplied: false
      }
    } catch (err) {
      error({
        statusCode: err.response.status,
        message: err.response.data.message
      })
    }
  }
}
</script>
