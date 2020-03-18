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
              <p class="my-2">
                <industry :industries="data.industry"></industry>
              </p>
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
              <p class="my-2"><place :place="data.place" /></p>
            </v-card-text>
            <v-card-title class="blue-grey lighten-5">
              勤務時間
            </v-card-title>
            <v-card-text>
              <p class="my-2">
                <work-date-time :work-datetime="data.work_datetime" />
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
              <p class="my-2">
                <contract-period :contract-period="data.contract_period" />
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
    <v-footer :fixed="true" :padless="true">
      <v-card flat tile width="100%" class="blue-grey lighten-5">
        <v-card-text>
          <div class="d-flex justify-center pb-5">
            <v-btn
              x-large
              block
              color="amber darken-4"
              dark
              @click="$emit('apply')"
              >応募する</v-btn
            >
          </div>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-layout>
</template>
<script>
import WorkDateTime from '~/components/jobpostings/JobPostingWorkDateTime.vue'
import ContractPeriod from '~/components/jobpostings/JobPostingContractPeriod.vue'
import Place from '~/components/jobpostings/JobPostingPlace.vue'
import Industry from '~/components/jobpostings/JobPostingIndustry.vue'
export default {
  components: {
    WorkDateTime,
    ContractPeriod,
    Industry,
    Place
  },
  props: {
    referCode: {
      type: String,
      require: false,
      default: () => ''
    },
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
      content: '',
      salary: '',
      welfare: '',
      jobContent: ''
    }
  },
  mounted() {
    this.title = this.data.name
    this.category = this.data.employment_category.name || ''
    this.jobContent = this.data.job_content || ''
    this.content = this.data.job_content || ''
    this.salary = this.data.salary.hourly || ''
    this.welfare = this.data.welfare || ''
  }
}
</script>
