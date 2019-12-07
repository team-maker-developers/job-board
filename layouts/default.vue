<template>
  <v-app dark>
    <v-app-bar app>
      <v-toolbar-title v-text="title" />
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      title: '港区で働く訪問看護師'
    }
  }
}
</script>
