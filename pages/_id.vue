<template>
  <div>
    <apply-job
      v-if="isApplied"
      :data="records"
      :refer-code="$route.query.refer_code"
      @back="isApplied = false"
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
import JobPosting from '~/components/job-postings/JobPostingList.vue'
import ApplyJob from '~/components/form/ApplyJob.vue'

export default {
  components: {
    ApplyJob,
    JobPosting
  },
  layout: 'default',
  async asyncData({ $axios, params, query, store, error }) {
    const referCode = query.refer_code ? `?refer_code=${query.refer_code}` : ''

    try {
      const data = await $axios.$get(`/api/v0/pages/${params.id}${referCode}`)
      const records = data.content.pageable_content.record
      store.commit('company/setCompany', data.company)

      return {
        data,
        records,
        isApplied: false
      }
    } catch (apiError) {
      error({
        statusCode: apiError.response.status,
        message: apiError.response.data.message
      })
    }
  },
  head() {
    const meta = { ...this.data.meta }
    if (!('title' in meta)) {
      meta.title = this.records.name
    }

    return meta
  }
}
</script>
