<template>
  <div><job-posting :data="records" /></div>
</template>

<script>
import JobPosting from '~/components/JobPosting.vue'

export default {
  layout: 'default',
  components: {
    JobPosting
  },
  head() {
    return {
      title: this.data.meta.title
    }
  },
  async asyncData({ $axios, env, params, store, error }) {
    try {
      const data = await $axios.$get(`/api/jobs/${params.id}`)
      const records = data.content.pageable_content.record
      store.commit('headers/setCompanyNameState', data.company.name)
      return {
        data,
        records
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
