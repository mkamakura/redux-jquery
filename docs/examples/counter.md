# Counter

## はじめに
今回のサンプルではデータフローを理解することに重点を置いて説明します。
実際にサンプルコードを写経しながら説明を読むと、理解が深まると思います。

イベント発生後のコードを読んでいく順番は以下のとおりです。これを念頭に置いてはじめましょう。

**`store.dispatch()`->`Action`->`Reducer`->`Componet:render()`**

## Component

### BaseComponent
- すべての`Component`は`BaseComponent`を継承する前提でつくられます

[import](../../examples/utils/BaseComponent.js)

`constructor`
```js
constructor(selector, store, ...stateNames)
```
- `selector`: `Component`のDOMのクラス名またはID
- `store`: `rootReducer`
- `...stateNames`: 監視する`state`（文字列）

- `...stateNames`で指定した`state`に変更があったら子クラスで実装した`render()`を実行する機能を提供します

### constructor()
**役割**
- イベントハンドラのセット
- `render()`で使用するセレクタがある場合は定義しておく

```js
this.$result = this.$selector.find('.js-result');
    this.$selector.find('.js-increment').on('click', () => this.dispatch(actions.increment()));
    this.$selector.find('.js-decrement').on('click', () => this.dispatch(actions.decrement()));
```

`super(selector, store, 'result');`は、 `state`の`result`に変更があったら`render()`を実行するように定義している。
イベントハンドラのセットでは`click`イベントが発生したら`store.dispatch()`を実行するようにしている。

### render()
**役割**
- `state`の変更に伴う画面の再描画を行う

[import:13-15](../../examples/counter/js/components/Counter.js)

## Action
**役割**
- `Reducer`に`ActionType`を渡している

*ActionType*
[import:3-4](../../examples/counter/js/actions/ActionCreator.js)

*ActionCreator*
[import:6-7](../../examples/counter/js/actions/ActionCreator.js)

### Reducer
**役割**
- `Action`から受け取った`ActionType`によって`state`を新規に返す

[import:4-9](../../examples/counter/js/reducers/CounterReducer.js)

`state`の値が変更されると`BaseComponent`の`constructor`で定義した`store.subscribe()`が実行される仕組みです。

## おわりに
今回のサンプルではデータフローをわかりやすくするために必要最低限の機能しかもっていませんでした。
他のサンプルでは`Action`にデータを渡して画面に反映させたり、非同期処理を行う場合はどうするかを説明していきますので、引き継ぎ頑張りましょう。
