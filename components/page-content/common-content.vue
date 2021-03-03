<template>
  <v-container class="post-content-wrapper">
    <v-row>
      <v-col cols="12">
        <v-img v-if="headerImageUrl" :src="headerImageUrl" />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <!-- eslint-disable-next-line vue/no-v-html !-->
        <div id="post-content" v-html="contentBody" />
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

<style lang="scss" scoped>
.post-content-wrapper {
  .v-image {
    margin-top: 40px;
    border-radius: 4px;
  }
}
</style>
