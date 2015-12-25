# Greeting

## はじめに
今回のサンプルでは`store.dispatch()`で画面のデータを渡し、そのデータを`state`にする処理を説明します。`Counter`との差分のみの説明になるので、わからないところは`Counter`の説明を参照してください。

## Component
[import:9-10](../../examples/greeting/js/components/Greeting.js)

`ActionCreator`の引数にデータを入れることにより、データを渡すことができる。

## Action

[import:9-10](../../examples/greeting/js/actions/ActionCreator.js)
`createAction`で`Reducer`に`name`を渡す。

## Reducer

[import:6-8](../../examples/greeting/js/reducers/GreetingReducer.js)

`ActionCreator`から受け取った値は`action.payload`オブジェクトにある。