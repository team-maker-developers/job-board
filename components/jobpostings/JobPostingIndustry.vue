<template>
  <span>{{ industry }}、{{ occupation }}</span>
</template>
<script>
export default {
  props: {
    industries: {
      type: Object,
      require: false,
      default: () => ({})
    }
  },
  data() {
    return {
      industry: '',
      occupation: ''
    }
  },
  mounted() {
    this.industry = this.industries.industry || ''
    this.occupation = this.industries.occupation || ''
  }
}
</script>
