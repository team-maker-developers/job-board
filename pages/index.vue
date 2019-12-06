<template>
  <v-layout column justify-center align-center>
    <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-card>
            <v-card-title class="headline">仕事内容</v-card-title>
            <v-card-text>
              ご利用者様の自宅に訪問し、訪問看護業務を行っていただきます。保険内、保険外のサービスを組み合わせて、ご利用者様の満足度の高いケアを提供します。できるかどうか不安な方もまずはお気軽にご相談ください。（フリーダイヤル：0120-972-884）<br />
              <br />
              ＜保険内＞<br />
              ・健康状態の観察<br />
              ・⽇常⽣活の⽀援<br />
              ・薬の管理と指導<br />
              ・床ずれの予防、処置<br />
              ・介護相談<br />
              ・医療器具の管理（⼈⼯呼吸器、胃瘻、⼈⼯肛⾨、在宅酸素など）<br />
              ・⾝体の清潔（清拭、⼊浴等）<br />
              ・終末期医療（ターミナルケア）の実施 等 ＜保険外＞<br />
              ・美容、マッサージ<br />
              ・家族の精神的ケアやグリーフケア<br />
              ・外出や旅行の同行 等<br />
              <br />
              ●計画書や報告書の作成<br />
              ●ご利用者様宅の担当者会議や地域会議参加<br />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-flex xs12 sm8 md6>
      <v-banner single-line>
        仕事内容
      </v-banner>
      <v-banner single-line>
        応募資格・条件
      </v-banner>
      <v-banner single-line>
        募集人数・募集背景
      </v-banner>
      <div class="text-center">
        <logo />
        <vuetify-logo />
        <Card />
      </div>
      <v-card>
        <v-card-title class="headline"
          >Welcome to the Vuetify + Nuxt.js template</v-card-title
        >
        <v-card-text>
          <p>
            Vuetify is a progressive Material Design component framework for
            Vue.js. It was designed to empower developers to create amazing
            applications.
          </p>
          <p>
            For more information on Vuetify, check out the
            <a href="https://vuetifyjs.com" target="_blank">documentation</a>.
          </p>
          <p>
            If you have questions, please join the official
            <a href="https://chat.vuetifyjs.com/" target="_blank" title="chat"
              >discord</a
            >.
          </p>
          <p>
            Find a bug? Report it on the github
            <a
              href="https://github.com/vuetifyjs/vuetify/issues"
              target="_blank"
              title="contribute"
              >issue board</a
            >.
          </p>
          <p>
            Thank you for developing with Vuetify and I look forward to bringing
            more exciting features in the future.
          </p>
          <div class="text-xs-right">
            <em>
              <small>&mdash; John Leider</small>
            </em>
          </div>
          <hr class="my-3" />
          <a href="https://nuxtjs.org/" target="_blank">Nuxt Documentation</a>
          <br />
          <a href="https://github.com/nuxt/nuxt.js" target="_blank"
            >Nuxt GitHub</a
          >
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/inspire">Continue</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import Card from '~/components/Card.vue'

export default {
  components: {
    Logo,
    VuetifyLogo,
    Card
  }
}
</script>
