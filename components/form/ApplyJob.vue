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
                  <v-col cols="6">
                    <v-text-field
                      v-model="nameSeiKanji"
                      :rules="nameSeiKanjiRules"
                      label="姓"
                      required
                    ></v-text-field>
                    <v-text-field
                      v-model="nameSeiKana"
                      :rules="nameSeiKanaRules"
                      label="セイ"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                      v-model="nameMeiKanji"
                      :rules="nameMeiKanjiRules"
                      label="名"
                      required
                    ></v-text-field>
                    <v-text-field
                      v-model="nameMeiKana"
                      :rules="nameMeiKanaRules"
                      label="メイ"
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
                    x-large
                    color="amber darken-4"
                    block
                    dark
                    @click.stop="validate"
                    >応募する</v-btn
                  >
                </div>
                <v-dialog v-model="dialog" max-width="500">
                  <v-card>
                    <v-card-title class="headline">{{
                      dialogTitle
                    }}</v-card-title>

                    <v-card-text>
                      {{ dialogText }}
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="primary" @click="clickDialogButton">
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
  </v-layout>
</template>

<script>
import axios from 'axios'

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
    nameSeiKanji: '',
    nameMeiKanji: '',
    nameSeiKana: '',
    nameMeiKana: '',
    valid: true,
    name: '',
    email: '',
    nameSeiKanjiRules: [(v) => !!v || '姓を入力してください'],
    nameMeiKanjiRules: [(v) => !!v || '名を入力してください'],
    nameSeiKanaRules: [
      (v) => !!v || '姓を入力してください',
      (v) => /^([ァ-ン]|ー)+$/.test(v) || '全角カタカナで入力してください'
    ],
    nameMeiKanaRules: [
      (v) => !!v || '名を入力してください',
      (v) => /^([ァ-ン]|ー)+$/.test(v) || '全角カタカナで入力してください'
    ],
    emailRules: [
      (v) => !!v || 'メールアドレスを入力してください',
      (v) => /.+@.+\..+/.test(v) || '有効なメールアドレスを入力してください'
    ],
    checkbox: false,
    dialog: false
  }),
  mounted() {
    this.title = this.data.name
    this.category = this.data.employment_category.name || ''
  },
  methods: {
    async validate() {
      if (this.$refs.form.validate()) {
        this.dialog = true
        try {
          await axios.post('/api/v0/applicants', {
            email: this.email,
            name: `${this.nameSeiKanji} ${this.nameMeiKanji}`,
            job_id: this.data.code,
            refer_code: this.referCode
          })
          this.dialogTitle = '求人に応募しました'
          this.dialogText =
            '3営業日中に返信いたします。\n 誠に恐縮ですが、少々お待ち下さい。'
        } catch (err) {
          this.dialogTitle = 'エラーが発生しました。'
          this.dialogText =
            '応募できませんでした。\n 誠に恐縮ですが、再度お試しください。'
        }
      }
    },
    clickDialogButton() {
      this.dialog = false
    }
  }
}
</script>
