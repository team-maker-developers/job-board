<template>
  <v-container>
    <component :is="component" />
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import jobBoard from '~/components/job-board/job-board'

export default {
  computed: {
    component() {
      switch (this.pageType) {
        case 'App\\Models\\Job':
          return jobBoard
      }

      return null
    },
    ...mapGetters('record', ['pageType'])
  }
}
</script>
