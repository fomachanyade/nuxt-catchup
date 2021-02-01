# nuxt-catchup

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate

# run e2e
yarn test:e2e
```

## e2e
jest/playwrightを使用
コードはtest/e2e
### テスト対象
- page/index.vue
- page/todos.vue
  - フォームにテキスト入力してエンターを押すとリストにtodoを追加
  - チェックボックスでdone=打ち消し線がでる
  - [テストファイル](./test/e2e/todos.spec.js)
### 所感
- query-selectorで基本的な動作はかける
- 重いので基本CIで走らせた方が良さそう
  - 改修したページ単位ならローカルでもありかも
### 参考
- https://qiita.com/Hassan/items/3e9959fae34c958017fe
- https://qiita.com/vicugna-pacos/items/a52e22d08856d1041316