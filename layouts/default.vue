<template>
  <v-app dark>
    <v-app-bar id="app-header" flat>
      <v-toolbar-title class="mx-auto">
        <p class="title text-h3 text-center my-0">{{ companyName }}</p>
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
  background-color: #fff;
  border-bottom: 1px #f8226a solid;
}

#app-footer {
  background-color: #373941;

  p {
    color: #fff;
  }
}
</style>
