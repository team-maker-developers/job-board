<template>
  <v-app dark>
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({ companyName: 'company/getCompanyName' })
  }
}
</script>

<style lang="scss" scoped>
#app-header {
  background-color: $main-color;
  border-bottom: 1px $sub-color solid;
}

#app-footer {
  background-color: $footer-color;

  p {
    color: $main-color;
  }
}
</style>
