<template>
  <v-app dark>
    <v-app-bar id="app-header" flat height="74px">
      <v-toolbar-title class="mx-auto">
        <p class="title text-h3 text-center my-3">{{ companyName }}</p>
      </v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer id="app-footer">
      <v-row>
        <v-col class="mt-4 text-center">
          <p class="text-h5">{{ companyName }}</p>
        </v-col>
      </v-row>
    </v-footer>
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
