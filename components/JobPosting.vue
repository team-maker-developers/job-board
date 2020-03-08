<template>
  <v-layout column justify-center align-center>
    <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-card>
            <v-card-text class="pb-1">
              <div v-if="category" class="d-flex flex-row">
                <v-chip color="primary mx-1">
                  {{ category }}
                </v-chip>
              </div>
            </v-card-text>
            <v-card-text class="caption">
              {{ title }}
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
                {{ jobContent }}
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
                {{ workStartAt | convertTime }}〜{{ workEndAt | convertTime }}
              </p>
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
              <p class="my-2">{{ contractPeriod | convertDate }}まで</p>
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
  props: {
    data: {
      type: Object,
      require: false,
      default: () => ({})
    }
  },
  data() {
    return {
      title: '',
      category: '',
      industry: '',
      occupation: '',
      content: '',
      workStartAt: '',
      workEndAt: '',
      salary: '',
      welfare: '',
      place: '',
      jobContent: '',
      contractPeriod: ''
    }
  },
  mounted() {
    this.title = this.data.name
    this.category = this.data.employment_category.name || ''
    this.jobContent = this.data.job_content || ''
    this.industry = this.data.industry.industry || ''
    this.occupation = this.data.industry.occupation || ''
    this.content = this.data.job_content || ''
    this.workStartAt = this.data.work_datetime.start_at.date
    this.workEndAt = this.data.work_datetime.end_at.date
    this.contractPeriod = this.data.contract_period.finished_at
    this.salary = this.data.salary.hourly || ''
    this.welfare = this.data.welfare || ''
    this.place = this.data.place.address
  }
}
</script>
