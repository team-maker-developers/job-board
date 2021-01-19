<template>
  <v-card v-if="isShown" flat outlined>
    <v-card-title class="blue-grey lighten-5">勤務地</v-card-title>
    <v-card-text>
      <p class="my-2">
        <span>{{ place.value }}</span>
      </p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    place: {
      type: Object,
      require: false,
      default: () => ({})
    }
  },
  computed: {
    isShown() {
      return 'value' in this.place
    }
  }
}
</script>
