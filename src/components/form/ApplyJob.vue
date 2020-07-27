<template>
  <v-layout column justify-center align-center>
    <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-card>
            <v-card-text class="pb-1">
              <div class="d-flex flex-row">
                <v-chip color="primary mx-1">
                  {{ category }}
                </v-chip>
              </div>
            </v-card-text>
            <v-card-text class="caption">
              {{ title }}
            </v-card-text>
            <v-card-title class="justify-center blue-grey lighten-5">
              応募内容の登録
            </v-card-title>
            <v-card-text>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model="name"
                      :rules="nameRules"
                      label="お名前"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="メールアドレス"
                  required
                ></v-text-field>
                <div class="d-flex justify-end">
                  <v-checkbox
                    v-model="checkbox"
                    :rules="[
                      (v) => !!v || '応募には利用規約への同意が必要です'
                    ]"
                    label="利用規約に同意しますか?"
                    required
                  ></v-checkbox>
                </div>
                <div class="d-flex justify-center pb-5">
                  <v-btn
                    @click.stop="validate"
                    x-large
                    color="amber darken-4"
                    block
                    dark
                    >応募する</v-btn
                  >
                </div>
                <v-dialog v-model="dialog" max-width="500">
                  <v-card :loading="loading">
                    <v-card-title class="headline">{{
                      dialogTitle
                    }}</v-card-title>

                    <v-card-text>
                      {{ dialogText }}
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn @click="clickDialogButton" color="primary">
                        OK
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <a @click="$emit('back')">求人情報に戻る</a>
  </v-layout>
</template>

<script>
export default {
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
  data: () => ({
    dialogTitle: '',
    dialogText: '',
    title: '',
    category: '',
    valid: true,
    name: '',
    email: '',
    nameRules: [(v) => !!v || '名前を入力してください'],
    emailRules: [
      (v) => !!v || 'メールアドレスを入力してください',
      (v) => /.+@.+\..+/.test(v) || '有効なメールアドレスを入力してください'
    ],
    checkbox: false,
    dialog: false,
    loading: false
  }),
  mounted() {
    this.title = this.data.name
    this.category = this.data.employment_category.name || ''
  },
  methods: {
    async validate() {
      if (this.$refs.form.validate()) {
        this.dialog = true
        this.loading = true
        this.dialogTitle = 'データを送信中です。'
        this.dialogText = 'お手数ですが、少々お待ち下さいませ。'

        try {
          await this.$axios.post('/api/v0/applicants', {
            email: this.email,
            name: this.name,
            job_id: this.data.id,
            refer_code: this.referCode
          })

          this.dialogTitle = '求人に応募しました'
          this.dialogText =
            '3営業日中に返信いたします。\n 誠に恐縮ですが、少々お待ち下さい。'
        } catch (err) {
          this.dialogTitle = 'エラーが発生しました。'
          this.dialogText =
            '応募できませんでした。\n 誠に恐縮ですが、再度お試しください。'
        } finally {
          this.loading = false
        }
      }
    },
    clickDialogButton() {
      this.dialog = false
    }
  }
}
</script>
