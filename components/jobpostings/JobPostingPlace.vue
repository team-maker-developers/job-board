<template>
  <span>{{ address }}</span>
</template>
<script>
export default {
  props: {
    place: {
      type: Object,
      require: false,
      default: () => ({})
    }
  },
  data() {
    return {
      address: ''
    }
  },
  mounted() {
    this.address = this.place.address
  }
}
</script>
