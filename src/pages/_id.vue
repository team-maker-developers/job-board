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

const functions = require('firebase-functions')

export default {
  layout: 'default',
  components: {
    JobPosting,
    ApplyJob
  },
  head() {
    const meta = { ...this.data.meta }

    return {
      title: meta.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: meta.description
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: meta.ogType
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: meta.ogTitle
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: meta.ogDescription
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `${functions.config().envvalues.baseUrl}/${this.$route.params.id}`
        }
      ]
    }
  },
  async asyncData({ $axios, params, query, store, error }) {
    const referCode = query.refer_code ? `?refer_code=${query.refer_code}` : ''

    try {
      const data = await $axios.$get(`/api/v0/pages/${params.id}${referCode}`)
      const records = data.content.pageable_content.record
      store.commit('headers/setCompanyNameState', data.company.name)

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
  }
}
</script>
