# Reduxの概要

初歩的な概念しか記載していませんが、以下の用語やデータフローは最低限理解しておきましょう。

- [公式サイト](http://rackt.org/redux/index.html)

## 3原則
http://rackt.org/redux/docs/introduction/ThreePrinciples.html

|1.Single source of truth(ソースは1つだけ)|
|-|
|アプリケーション全体の状態(`state`)はツリーの形で1つのオブジェクトで作られ、1つのストアに保存される。`state`が保存しやすいので、ユニバーサルアプリケーションがつくりやすい。`state`が1つだから、デバッグしやすい、開発しやすい。|

|2.State is read-only(状態は読み取り専用)|
|-|
|状態を変更する手段は、変更内容をもったActionオブジェクトを発行して実行するだけ。ビューやコールバックが状態を直接変更させることはできない。変更は一つずつ順番に行なわれる。Actionはオブジェクトなので、保存可能であり、テストしやすい。|

|3.Mutations are written as pure functions(変更はすべてpureな関数で書かれる)|
|-|
|アクションがどのように状態を変更するかを`Reducer`で行う。`Reducer`は状態とアクションを受けて新しい状態を返す関数である。現在の`state`を変更することはせずに、新しい`state`オブジェクトを作って返すというのがポイント。最初はアプリケーションで一つの`Reducer`を用意して、巨大化してきたら`Reducer`を分割していく。|

## 用語

### Action
- アプリケーションからの情報を`store`へ送る為のオブジェクト
- `store.dispatch()`で`store`へ送られる
- 何を行なうものかを識別するために`type`プロパティを必ず持つ。この`type`を`ActionType`と呼ぶ。

```js
const ADD_TODO = 'ADD_TODO';
{
  type: ADD_TODO,
  text: 'Build my first Redux app'
};
```

### ActionCreator


### Store

### Reducer

### Middleware