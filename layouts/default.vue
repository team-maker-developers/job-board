<template>
  <v-app dark>
    <v-app-bar app>
      <v-toolbar-title>
        <!-- TODO: pagesで取得したデータをlayoutで表示する。実現方法が複数案あり迷うのでいったん保留 -->
        <!-- storeで実現するか？Vue Routerでマッチしたコンポーネントを取得する？ -->
        <p class="pa-0 ma-0">{{ title }}</p>
        <!-- TODO: 施設名が求人票のスキームに存在しない。問題ないか？ -->
        <p class="pa-0 ma-0 caption">{{ name }}</p>
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
export default {
  data() {
    return {
      title: '',
      name: ''
    }
  },
  created() {
    this.setListener()
  },
  methods: {
    setListener() {
      // emitで発火させたイベント名にする
      this.$nuxt.$on('updateHeader', this.setHeader)
    },
    setHeader(title, name) {
      this.title = title || ''
      this.name = name || ''
    }
  }
}
</script>
