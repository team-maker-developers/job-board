<template>
  <v-form id="job_form" ref="jobForm" lazy-validation>
    <v-row>
      <v-col cols="12">
        <label class="required">お名前</label>
        <v-text-field
          v-model="name"
          :rules="[(name) => !!name || 'お名前は入力必須です']"
          placeholder="田中太郎"
          outlined
          validate-on-blur
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <label class="required">メールアドレス</label>
        <v-text-field
          v-model="email"
          :rules="[
            (email) => !!email || 'メールアドレスは入力必須です',
            validateEmail
          ]"
          placeholder="mail@address.co.jp"
          outlined
          validate-on-blur
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <label class="required">メールアドレス（確認）</label>
        <v-text-field
          v-model="confirmEmail"
          :rules="[
            (email) => !!email || 'メールアドレス（確認）は入力必須です',
            validateConfirmEmail
          ]"
          placeholder="mail@address.co.jp"
          outlined
          validate-on-blur
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row justify="center" class="submit_button_row">
      <v-col class="submit_button_wrapper">
        <v-btn x-large :disabled="isLoading" @click="submit">送信</v-btn>
      </v-col>
    </v-row>
    <v-dialog v-model="isShowDialog" max-width="500">
      <v-card>
        <v-card-title class="headline">送信完了</v-card-title>

        <v-card-text>
          入力された応募情報を送信いたしました。<br />
          2-3営業日中に連絡いたしましたので、お待ち下さいませ。
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="closeDialog">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-form>
</template>

<script>
export default {
  props: {
    jobId: {
      type: Number,
      required: true
    }
  },
  data: () => ({
    name: '',
    email: '',
    confirmEmail: '',
    isShowDialog: false,
    isLoading: false
  }),
  computed: {
    referCode() {
      if ('refer_code' in this.$route.query) {
        return this.$route.query.refer_code
      }

      return null
    }
  },
  methods: {
    validateEmail() {
      const reg = /\S+@\S+\.\S+/
      if (reg.test(this.email)) {
        return true
      }

      return 'メールアドレスの値が不正です'
    },
    validateConfirmEmail() {
      if (this.email === this.confirmEmail) {
        return true
      }

      return 'メールアドレスとメールアドレス（確認）の値が違います'
    },
    closeDialog() {
      this.$refs.jobForm.reset()
      this.isShowDialog = false
    },
    async submit() {
      if (!this.$refs.jobForm.validate()) {
        return
      }

      try {
        this.isLoading = true
        await this.$axios.post('/api/v0/applicants', {
          email: this.email,
          name: this.name,
          job_id: this.jobId,
          refer_code: this.referCode
        })

        this.isShowDialog = true
      } catch (error) {
        this.$nuxt.error({
          statusCode: 500,
          message: 'エラーが発生しました。お手数ですが、再度お試しください。'
        })
      } finally {
        this.isLoading = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#job_form {
  label {
    display: block;
    margin-bottom: 0.5rem;
  }
  label.required::after {
    content: '必須';
    margin: 0 0.5rem;
    padding: 0.2rem 0.6rem;
    border-radius: 1rem;
    color: $main-color;
    background-color: $sub-color;
  }
  .v-text-field--outlined {
    border-radius: 16px;
  }

  .submit_button_row {
    margin: 2rem 0 8rem;

    .submit_button_wrapper {
      text-align: center;

      button {
        background-color: $sub-color;
        color: $main-color;
        min-width: 16rem;
        border-radius: 0.8rem;
        height: 4rem;
      }
    }
  }
}
</style>
