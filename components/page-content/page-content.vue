<template>
  <v-container>
    <common-content />
    <component :is="component" />
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import commonContent from './common-content'
import jobBoard from '~/components/job-board/job-board'

export default {
  components: { commonContent },
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
