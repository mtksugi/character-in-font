# Character in font file

True Typeフォントファイルに含まれる文字を一覧で表示するアプリ

## Spec

- フォントファイルに含まれる文字をテーブルで表示する
- データはサーバの静的ファイル（json形式）を使用する
- Reactを使ったSPAアプリ
- コンポーネントはMaterial UIを使用する
- 文字データはダウンロードできる
- 用意するフォント種類は、MSゴシック、MS明朝、Meirio、Yu GthicなどWindows標準のフォントデータなど
- テーブルの文字は選択したフォントで表示する（CSSでクライアントのフォントを指定）
- フォントの追加を受け付ける
- 問い合わせページはJetFormへのリンク

## Usage

- webpack devserver
```
npm run dev-server
```

- build for development
```
npm build:dev
```

- build for production
```
npm build:prod
```

- serve build（live-server）
```
npm serve
```
