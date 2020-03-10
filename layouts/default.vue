<template>
  <v-app dark>
    <v-app-bar app>
      <v-toolbar-title>
        <p class="pa-0 ma-0 caption">{{ companyName }}</p>
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
