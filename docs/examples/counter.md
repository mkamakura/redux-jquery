# Counter

## はじめに
今回のサンプルではデータフローを理解することに重点を置いて説明していきます。
実際にサンプルコードを写経しながら説明を読むと、理解が深まると思います。

イベント発生後のコードを読んでいく順番は以下のとおりです。これを念頭に置いてはじめましょう。

**`store.dispatch()`->`Action`->`Reducer`->`Componet:render()`**

## Component

### BaseComponent
- すべての`Component`は`BaseComponent`を継承する前提でつくられます。

[import](../../examples/utils/BaseComponent.js)

```js
constructor(selector, store, ...stateNames)
```

### constructor()
**役割**
- `store.subscribe()`の定義
- イベントハンドラのセット
- `render()`で使用するセレクタがある場合は定義しておく

[import:5-18](../../examples/counter/js/components/Counter.js)

`store.subscribe()`は`state`の内容に変更があった場合に実行される。
`Component`で使用する`state`に変更があるか監視し変更があった時のみ`render()`を実行する。

イベントハンドラのセットでは`click`イベントが発生したら`store.dispatch()`を実行するようにしている。

### render()
**役割**
- `state`の変更に伴う画面の再描画を行う

[import:20-22](../../examples/counter/js/components/Counter.js)

## Action
**役割**
- `Component`の`constructor`でセットされた`store.dispatch()`によって実行される
- `Reducer`に`ActionType`を渡している

*ActionType*
[import:1-2](../../examples/counter/js/actions/ActionCreator.js)

*ActionCreator*
[import:4-10](../../examples/counter/js/actions/ActionCreator.js)

### Reducer
**役割**
- `Action`から受け取った`ActionType`によって`state`を新規に返す

[import:4-9](../../examples/counter/js/reducers/CounterReducer.js)

`state`の値が変更されると`Component`の`constructor`で定義した`store.subscribe()`が実行される仕組みです。

## おわりに
今回のサンプルではデータフローをわかりやすくするために必要最低限の機能しかもっていませんでした。
他のサンプルでは`Action`にデータを渡して画面に反映させたり、非同期処理を行う場合はどうするかを説明していきますので、引き継ぎ頑張りましょう。
