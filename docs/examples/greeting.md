# Greeting

## はじめに
今回のサンプルでは`store.dispatch()`で画面のデータを渡し、そのデータを`state`にする処理を説明します。`Counter`との差分のみの説明になるので、わからないところは`Counter`の説明を参照してください。

## Component
```js
this.$inputName = this.$selector.find('input[name=name]');
this.$selector.find('.submit').on('click', () => this.dispatch(actions.updateName(this.$inputName.val())));
```

`ActionCreator`の引数にデータを入れることにより、データを渡すことができる。

## Action

```js
export const UPDATE_NAME = 'UPDATE_NAME';

export const updateName = createAction(UPDATE_NAME, (name) => name);
```
`createAction`で`Reducer`に`name`を渡す。

## Reducer

[import:6-8](../../examples/greeting/js/reducers/GreetingReducer.js)

`ActionCreator`から受け取った値は`action.payload`オブジェクトにある。