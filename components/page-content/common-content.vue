<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-img v-if="headerImageUrl" :src="headerImageUrl" />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <div v-html="contentBody" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    headerImageUrl() {
      return this.commonContent.header_image_url
    },
    contentBody() {
      return this.commonContent.body
    },
    ...mapState('record', ['commonContent'])
  }
}
</script>
