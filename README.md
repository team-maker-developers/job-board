# team-maker求人票

team-maker求人票のフロントエンド

## firebaseへのデプロイ手順

``` bash
# 環境変数の設定
# コマンド実行前に、firebase-config.jsonのbaseUrlを書き換えておく
$ firebase functions:config:set envvalues="$(cat firebase-config.json)"

# src/ の準備
$ cd src/
$ yarn install
$ yarn build

# functions/ の準備
$ cd functions/
$ yarn install

# デプロイ手順
$ cp -r functions/nuxt/dist/client/* public/ && cp -r src/static/* public/
$ firebase deploy
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
