<template>
  <v-layout column justify-center align-center>
    <v-container class="job-container">
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
            <work-industry :industries="data.industry" />
            <v-card v-if="salary" flat outlined>
              <v-card-title class="blue-grey lighten-5">
                仕事内容
              </v-card-title>
              <v-card-text>
                <p class="my-2">
                  {{ jobContent }}
                </p>
              </v-card-text>
            </v-card>
            <work-place :place="data.place" />
            <work-date-time :work-datetime="data.work_datetime" />
            <v-card v-if="salary" flat outlined>
              <v-card-title class="blue-grey lighten-5">給与</v-card-title>
              <v-card-text>
                <p class="my-2">{{ salary }}</p>
              </v-card-text>
            </v-card>
            <contract-period :contract-period="data.contract_period" />
            <v-card if="welfare" falt outlined>
              <v-card-title class="blue-grey lighten-5">
                福利厚生
              </v-card-title>
              <v-card-text>
                <p class="my-2">
                  {{ welfare }}
                </p>
              </v-card-text>
            </v-card>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-footer fixed padless>
      <v-card flat tile height="5.5em" width="100%" class="blue-grey lighten-5">
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
import WorkDateTime from './inputs/JobPostingWorkDateTime.vue'
import ContractPeriod from './inputs/JobPostingContractPeriod.vue'
import WorkPlace from './inputs/JobPostingPlace.vue'
import WorkIndustry from './inputs/JobPostingIndustry.vue'

export default {
  components: {
    WorkDateTime,
    ContractPeriod,
    WorkIndustry,
    WorkPlace
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

<style scoped>
.job-container {
  margin-bottom: 5.5em;
}
</style>
