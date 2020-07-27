<template>
  <v-layout column justify-center align-center>
    <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-card>
            <v-card-text class="pb-1">
              <div class="d-flex flex-row">
                <v-chip color="primary mx-1">中途採用（正社員）</v-chip>
              </div>
            </v-card-text>
            <v-card-title class="mb-0 font-weight-black">
              港区で働く訪問看護師
            </v-card-title>
            <v-card-text class="caption">
              BCC訪問看護ステーション
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
                      :rules="nameRules"
                      label="性"
                      required
                    ></v-text-field>
                    <v-text-field
                      v-model="nameSeiKana"
                      :rules="nameRules"
                      label="セイ"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                      v-model="nameMeiKanji"
                      :rules="nameRules"
                      label="名"
                      required
                    ></v-text-field>
                    <v-text-field
                      v-model="nameMeiKana"
                      :rules="nameRules"
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
                    @click.stop="validate"
                    x-large
                    color="amber darken-4"
                    block
                    dark
                    >応募する</v-btn
                  >
                </div>
                <v-dialog v-model="dialog" max-width="500">
                  <v-card>
                    <v-card-title class="headline"
                      >求人に応募しました</v-card-title
                    >

                    <v-card-text>
                      3営業日中に返信いたします。<br />
                      誠に恐縮ですが、少々お待ち下さい。
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn @click="dialog = false" color="primary">
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
export default {
  data: () => ({
    valid: true,
    name: '',
    email: '',
    nameRules: [(v) => !!v || '名前を入力してください'],
    emailRules: [
      (v) => !!v || 'メールアドレスを入力してください',
      (v) => /.+@.+\..+/.test(v) || '有効なメールアドレスを入力してください'
    ],
    checkbox: false,
    dialog: false
  }),
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true
        this.dialog = true
      }
    }
  }
}
</script>
