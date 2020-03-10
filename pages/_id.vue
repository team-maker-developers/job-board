<template>
  <div><job-posting :data="records" /></div>
</template>

<script>
import JobPosting from '~/components/jobpostings/JobPostingList.vue'

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
      const data = await $axios.$get(
        `https://jsondata.okiba.me/v1/json/1ERa7200309124631`
      )
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
