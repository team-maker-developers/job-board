<template>
  <page-content />
</template>

<script>
import pageContent from '~/components/page-content/page-content'

export default {
  components: { pageContent },
  async asyncData({ $axios, params, query, store, error }) {
    const referCode = query.refer_code ? `?refer_code=${query.refer_code}` : ''

    try {
      const data = await $axios.$get(`/api/v0/pages/${params.id}${referCode}`)
      store.commit('company/setCompany', data.company)
      store.commit('record/setPageData', data.content)

      return { data }
    } catch (apiError) {
      error({
        statusCode: apiError.response.status,
        message: apiError.response.data.message
      })
    }
  },
  head() {
    const meta = { ...this.data.meta }
    return meta
  }
}
</script>
