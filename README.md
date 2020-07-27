# team-maker求人票

team-maker求人票のフロントエンド

## firebaseへのデプロイ手順

``` bash
# 環境変数の設定
# コマンド実行前に、firebase-config.jsonのbaseUrlをc書き換えておく
$ firebase functions:config:set envvalues="$(cat firebase-config.json)"

# src/ の準備
$ cd src/
$ yarn install
$ yarn build
$ cd ../

# functions/ の準備(一時的にnodeを10.xにする必要があります)
$ cd functions/
$ yarn install
$ cd ../

# デプロイ手順
$ mkdir public
$ cp -r functions/nuxt/dist/client/* public/ && cp -r src/static/* public/
$ firebase deploy
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
