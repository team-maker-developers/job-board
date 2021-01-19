<template>
  <v-app dark>
    <v-app-bar flat id="app-header">
      <v-toolbar-title class="mx-auto">
        <p class="title text-h3 text-center my-0">{{ companyName }}</p>
      </v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({ companyName: 'headers/getCompanyName' })
  }
}
</script>

<style lang="scss" scoped>
#app-header {
  background-color: #fff;
  border-bottom: 1px #f8226a solid;
}
</style>
