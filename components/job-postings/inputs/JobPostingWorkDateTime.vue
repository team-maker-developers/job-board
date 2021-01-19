<template>
  <v-card v-if="isShown" flat outlined>
    <v-card-title class="blue-grey lighten-5">勤務時間</v-card-title>
    <v-card-text>
      <p class="my-2">
        <span>{{ workDatetime.value }}</span>
      </p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    workDatetime: {
      type: Object,
      require: false,
      default: () => ({})
    }
  },
  computed: {
    isShown() {
      return 'value' in this.workDatetime
    }
  }
}
</script>
