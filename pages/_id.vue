<template>
  <div>
    <apply-job
      v-if="isApplied"
      :data="records"
      :refer-code="$route.query.refer_code"
    />
    <job-posting
      v-else
      :data="records"
      :refer-code="$route.query.refer_code"
      @apply="isApplied = true"
    />
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
  async asyncData({ $axios, env, params, query, store, error }) {
    try {
      const referCode = query.refer_code
        ? `?refer_code=${query.refer_code}`
        : ''
      const data = await $axios.$get(`/api/jobs/${params.id}${referCode}`)
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
