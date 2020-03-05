<template>
  <v-layout column justify-center align-center>
    <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-card>
            <v-card-text class="pb-1">
              <div class="d-flex flex-row">
                <v-chip color="primary mx-1">
                  正社員
                </v-chip>
              </div>
            </v-card-text>
            <v-card-title class="mb-0 font-weight-black">
              {{ title }}
            </v-card-title>
            <v-card-text class="caption">
              {{ name }}
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
              <p class="my-2">{{ industry }}、{{ occupation }}</p>
            </v-card-text>
            <v-card-title class="blue-grey lighten-5">
              仕事内容
            </v-card-title>
            <v-card-text>
              <p class="my-2">
                {{ job_content }}
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
              <p class="my-2">{{ work_start_at }}〜{{ work_end_at }}</p>
            </v-card-text>
            <v-card-title class="blue-grey lighten-5">
              給与
            </v-card-title>
            <v-card-text>
              <p class="my-2">時給{{ salary }}円</p>
            </v-card-text>
            <v-card-title class="blue-grey lighten-5">
              契約期間
            </v-card-title>
            <v-card-text>
              <p class="my-2">{{ contract_period }}まで</p>
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
    <v-footer :fixed="true" :padless="true">
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
  layout: 'default',
  async asyncData({ $axios, env, params }) {
    const data = await $axios.$get(`${env.apiDomain}/api/jobs/${params.id}`)
    const workStartAt =
      `${new Date(
        data.content.pageable_content.record.work_datetime.start_at.date
      ).getHours()}:${new Date(
        data.content.pageable_content.record.work_datetime.start_at.date
      ).getMinutes()}` || ''
    const workEndAt =
      `${new Date(
        data.content.pageable_content.record.work_datetime.end_at.date
      ).getHours()}:${new Date(
        data.content.pageable_content.record.work_datetime.end_at.date
      ).getMinutes()}` || ''
    const finishedAt =
      `${new Date(
        data.content.pageable_content.record.contract_period.finished_at.date
      ).getMonth() + 1}月${new Date(
        data.content.pageable_content.record.contract_period.finished_at.date
      ).getDay()}日` || ''

    const title = data.meta.title || ''
    const name = data.company.name || ''
    const code = data.content.pageable_content.record.code || ''
    const jobContent = data.content.pageable_content.record.job_content || ''
    const industry =
      data.content.pageable_content.record.industry.industry || ''
    const occupation =
      data.content.pageable_content.record.industry.occupation || ''
    const content = data.content.common_content || ''
    const salary = data.content.pageable_content.record.salary.hourly || ''
    const welfare = data.content.pageable_content.record.welfare || ''
    const place = data.content.pageable_content.record.place
    return {
      title,
      name,
      code,
      job_content: jobContent,
      industry,
      occupation,
      content,
      work_start_at: workStartAt,
      work_end_at: workEndAt,
      salary,
      contract_period: finishedAt,
      welfare,
      place
    }
  },
  mounted() {
    this.updateHeader()
  },
  methods: {
    updateHeader() {
      this.$nuxt.$emit('updateHeader', this.title, this.name)
    }
  }
}
</script>
