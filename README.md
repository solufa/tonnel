# Tonnel

## 開発手順

### Node.js のインストール

ローカルマシンに直接インストールする

https://nodejs.org/ja/ の左ボタン、LTS をダウンロードしてインストール

### npm モジュールのインストール

```sh
$ npm i
$ npm i --prefix packages/client
$ npm i --prefix packages/server
```

### 環境変数ファイルの作成

```sh
$ cp packages/server/.env.example packages/server/.env
```

### 開発サーバー起動

次回以降は以下のコマンドだけで開発できる

```sh
$ npm run notios
```

開発時のターミナル表示は [notios](https://github.com/frouriojs/notios) で制御している

[Node.js モノレポ開発のターミナルログ混雑解消のための新作 CLI ツール notios](https://zenn.dev/luma/articles/nodejs-new-cli-tool-notios)

閉じるときは `Ctrl + C` を 2 回連続で入力
