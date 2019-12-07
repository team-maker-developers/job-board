<template>
  <v-layout column justify-center align-center>
    <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-card>
            <v-card-text class="pb-1">
              <div class="d-flex flex-row">
                <v-chip color="primary mx-1">中途採用（正社員）</v-chip>
              </div>
            </v-card-text>
            <v-card-title class="mb-4">
              <h1 class="display-1 font-weight-black">
                港区・渋谷区で働く訪問看護師
              </h1>
            </v-card-title>
            <v-card-title class="blue-grey lighten-5">
              仕事内容
            </v-card-title>
            <v-card-text>
              <p class="my-2">
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
              </p>
            </v-card-text>
            <v-card-title class="blue-grey lighten-5">
              応募資格・条件
            </v-card-title>
            <v-card-text>
              <p class="my-2">
                正看護師資格をお持ちの方（准看護師の方も応募可）<br />
                その他、アロマセラピストやマッサージの資格などダブルライセンスをお持ちの方大歓迎<br />
              </p>
            </v-card-text>
            <v-card-title class="blue-grey lighten-5">
              勤務地
            </v-card-title>
            <v-card-text>
              <p class="my-2">
                東京都港区西麻布●-●-● ●●ビル●F（最寄駅：六本木）
              </p>
            </v-card-text>
            <v-card-title class="blue-grey lighten-5">
              勤務時間
            </v-card-title>
            <v-card-text>
              <p class="my-2">
                9:00 ～ 18:00(フレックスタイム制)<br />
                ※ライフスタイルに合わせて相談可能です。<br />
                最短30分からの依頼もあります。<br />
                夜間の依頼等もあるためお気軽にご相談下さい。<br />
              </p>
            </v-card-text>
            <v-card-title class="blue-grey lighten-5">
              給与
            </v-card-title>
            <v-card-text>
              <p class="my-2">
                年収 3,600,000円 ～ 7,200,000円（※想定月給 300,000円 ～
                600,000円）<br />
                ※ 経験・能力を考慮の上、決定します。<br />
                週3日から常勤採用してます。<br />
              </p>
            </v-card-text>
            <v-card-title class="blue-grey lighten-5">
              年収例
            </v-card-title>
            <v-card-text>
              <p class="my-2">5,600,000円 / 入社10年目・所長</p>
            </v-card-text>
            <v-card-title class="blue-grey lighten-5">
              休日休暇
            </v-card-title>
            <v-card-text>
              <p class="my-2">
                週休２日（月プラス1日休みです）、シフト制<br />
                特別休暇、有給休暇<br />
                ※ 働き方は自由ですのでご相談ください。<br />
                ◇ 年間休日120日以上<br />
              </p>
            </v-card-text>
            <v-card-title class="blue-grey lighten-5">
              福利厚生
            </v-card-title>
            <v-card-text>
              <p class="my-2">
                ◇ 労災保険<br />
                ◇ 健康保険<br />
                ◇ 厚生年金<br />
                ◇ 雇用保険<br />
              </p>
            </v-card-text>
            <div class="d-flex justify-center pb-5">
              <v-btn x-large color="amber darken-4" dark>求人に応募する</v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-footer v-bind="localAttrs" :padless="padless">
      <v-card flat tile width="100%" class="red lighten-1 text-center">
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>

    <v-row align="center" justify="center" class="ma-12">
      <v-col cols="12" md="8">
        <v-select
          v-model="variant"
          :items="items"
          clearable
          label="Variant"
        ></v-select>

        <v-checkbox v-model="padless" hide-details label="Padless"></v-checkbox>
      </v-col>
    </v-row>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    icons: ['mdi-home', 'mdi-email', 'mdi-calendar', 'mdi-delete'],
    items: ['default', 'absolute', 'fixed'],
    padless: false,
    variant: 'default'
  }),
  computed: {
    localAttrs() {
      const attrs = {}

      if (this.variant === 'default') {
        attrs.absolute = false
        attrs.fixed = false
      } else {
        attrs[this.variant] = true
      }
      return attrs
    }
  }
}
</script>
