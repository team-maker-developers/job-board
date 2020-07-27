<template>
  <v-card v-if="isShown" flat outlined>
    <v-card-title class="blue-grey lighten-5">
      業界、業種、職種
    </v-card-title>
    <v-card-text>
      <p class="my-2">
        <span>{{ industries.value }}</span>
      </p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    industries: {
      type: Object,
      require: false,
      default: () => ({})
    }
  },
  computed: {
    isShown() {
      return 'value' in this.industries
    }
  }
}
</script>
