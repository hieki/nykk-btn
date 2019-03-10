# !!!nykk-btn is DEPRECATED!!!
nykk-btn is Deprecated. Use https://github.com/hieki/hnr-cafe

# 見
https://hieki.github.io/nykk-btn/

# 環境
 - `.node-version` を見ろ
 - ちなみに `v6.0.0` でも動いた

# 作
## ローカルの Node.js でやる
動けば何でもいい人向け

```
$ npm install
$ npm run gen
```

## Docker 上でやる
ローカル環境が汚されたくなくてどうしても Docker 上でやりたい人向け

```
$ docker-compose build
$ docker-compose run npm run gen
```

以後のコマンドは随時読み替えてくれ

# 増
1. `sounds/<台詞>.wav` に wav を追加
2. `npm run gen` で HTML を生成
3. fork なりなんなりしてから PR 投げてください
