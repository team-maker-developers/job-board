<template>
  <v-layout column justify-center align-center>
    <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-card>
            <v-card-text class="pb-1">
              <div class="d-flex flex-row">
                <v-chip color="primary mx-1">
                  <!-- TODO: IDに対応する文字列を取得して表示する -->
                  （就業形態）
                </v-chip>
              </div>
            </v-card-text>
            <v-card-title class="mb-0 font-weight-black">
              {{ name }}
            </v-card-title>
            <v-card-text class="caption">
              <!-- TODO: 施設名が求人票のスキームに存在しない。問題ないか？ -->
              （施設名）
            </v-card-text>
            <v-card-title class="blue-grey lighten-5">
              求人コード
            </v-card-title>
            <v-card-text>
              <p class="my-2">
                {{ code }}
              </p>
            </v-card-text>
            <v-card-title class="blue-grey lighten-5">
              業界、業種、職種
            </v-card-title>
            <v-card-text>
              <p class="my-2">
                {{ industry }}
              </p>
            </v-card-text>
            <v-card-title class="blue-grey lighten-5">
              仕事内容
            </v-card-title>
            <v-card-text>
              <p class="my-2">
                {{ content }}
              </p>
            </v-card-text>
            <v-card-title class="blue-grey lighten-5">
              勤務地
            </v-card-title>
            <v-card-text>
              <p class="my-2">
                {{ place }}
              </p>
            </v-card-text>
            <v-card-title class="blue-grey lighten-5">
              勤務時間
            </v-card-title>
            <v-card-text>
              <p class="my-2">
                <!-- TODO: jsonデータを整形して表示する -->
                {{ work_datetime }}
              </p>
            </v-card-text>
            <v-card-title class="blue-grey lighten-5">
              給与
            </v-card-title>
            <v-card-text>
              <p class="my-2">
                <!-- TODO: jsonデータを整形して表示する -->
                {{ salary }}
              </p>
            </v-card-text>
            <v-card-title class="blue-grey lighten-5">
              契約期間
            </v-card-title>
            <v-card-text>
              <p class="my-2">
                <!-- TODO: jsonデータを整形して表示する -->
                {{ contract_period }}
              </p>
            </v-card-text>
            <v-card-title class="blue-grey lighten-5">
              福利厚生
            </v-card-title>
            <v-card-text>
              <p class="my-2">
                {{ welfare }}
              </p>
            </v-card-text>
            <div class="d-flex justify-center pb-5">
              <v-btn x-large block color="amber darken-4" dark>応募する</v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-footer fixed="true" padless="true">
      <v-card flat tile width="100%" class="blue-grey lighten-5">
        <v-card-text>
          <div class="d-flex justify-center pb-5">
            <v-btn x-large block color="amber darken-4" dark to="form"
              >応募する</v-btn
            >
          </div>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-layout>
</template>

<script>
export default {
  async asyncData({ $axios, env, params }) {
    const data = await $axios.$get(`${env.apiDomain}/api/jobs/${params.id}`)
    return { ...data }
  }
}
</script>
