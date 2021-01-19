<template>
  <v-card v-if="isShown" flat outlined>
    <v-card-title class="blue-grey lighten-5">契約期間</v-card-title>
    <v-card-text>
      <p class="my-2">
        <span>{{ contractPeriod.value }}</span>
      </p>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  props: {
    contractPeriod: {
      type: Object,
      require: false,
      default: () => ({})
    }
  },
  computed: {
    isShown() {
      if (!('value' in this.contractPeriod)) {
        return false
      }

      return this.contractPeriod.value !== ''
    }
  }
}
</script>
