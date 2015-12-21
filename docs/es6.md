# ES6 Frist Step

## はじめに
`JavaScript`は`ECMAScript`という仕様のもとに実装されています。`ECMAScript6(ES6)`は`ECMAScript`の新しい標準仕様です。この仕様は2015年6月に確定しました。
`ES5`から6年ぶりのメジャーアップデートのため最初は違和感があるかもしれません。
しかし、より便利になるアップデートですのでしっかりキャッチアップし積極的に使用していきましょう。

### ES6 or ES2015?
ネットで検索していると`ES6`と`ES2015`を見かけると思いますが、両方とも同じものを指しています。
正確には`ES2015`が正しいです。来年以降も`ES2016`,`ES2017`…とアップデート予定です。
当初は`ES6`として仕様検討が始まったためその名残りが残っています。この資料では`ES6`で統一させていただきます。(短いほうが読みやすいので)

### Babel

**背景**

`ES6`の仕様確定が2015年6月にされましたが、すぐに新仕様が使えるわけではありません。
JavaScriptエンジン(V8,JavaScriptCore,Chakra等)の実装は現在進行中でまだ使えない機能があるためです。
[こちら](https://kangax.github.io/compat-table/es6/)のサイトで各ブラウザに実装済みの機能が確認できます。

ブラウザとJavaScriptエンジンの対応は以下の表のとおりです。

|ブラウザ|JavaScriptエンジン|
|-|-|
|IE|Chakra|
|Chrome|V8|
|Opera|V8|
|Safari|JavaScriptCore|
|FireFox|SpiderMonkey|

**Babel**

上記のようにブラウザに新仕様が追加されるの待っていてはすぐに新仕様を試すことがきません。そこで登場したのが`Babel`で、`Babel`は`ES6`のコードを`ES5`のコードにトランスパイルしてくれるツールです([公式サイト](https://babeljs.io/))。来年以降の`ES2016`,`ES2017`についても先行実装されているので今後も使用され続けると言われています。
実際の開発でも`Babel`を使ってトランスパイルし、ブラウザはトランスパイル後のJavaScriptコードを読み込むことになります。

## ES6新規仕様
ここでは特によく使われている仕様について説明します。参考資料等を用いてさらに学習してください。

### let, const
`let`, `const`はブロックスコープの変数宣言かできます。`const`は再代入不可な値を宣言します。これまで使われていた`var`は使用しないようにしましょう。基本は`const`、どうしても再代入が必要な場合のみ`let`を使用するようにしましょう。
```js
// ES5
var a = 1;

// ES6
let b = 1; // 再代入不可能な値（再代入が必要なときのみ使用する）
const c = 1; // 再代入不可な値（推奨）
```

### Templete Strings
文字列結合が簡単に書けます。バッククォートで囲った文字列の`${}`は展開される。
```js
// ES5
var errorCode = 404;
var errorMessage = `file not found.`;
console.log('Error!! Code: ' + errorCode + ', Message: ' + errorMessage);
// Error!! Code: 404, Message: file not found.

// ES6
const errorCode = 404;
const errorMessage = `file not found.`;
console.log(`Error!! Code: ${errorCode}, Message: ${errorMessage}`);
// Error!! Code: 404, Message: file not found.
```

### Class
クラスの宣言ができます。

```js
class User {
  constructor(name) {
    this.name = name;
  }

  say() {
    return `My name is ${this.name}`;
  }
}

// Userクラスを継承してAdminクラスを作る
class Admin extends User {
  say() {
    return `[Administrator] ${super.say()}`;
  }
}

const user = new User('Alice');
console.log(user.say()); // My name is Alice

const admin = new Admin('Bob');
console.log(admin.say()); // [Administrator] My name is Bob
```

### Default Parameters
関数の引数にデフォルト値を設定できます。
```js
function consoleName(name = 'Taro') {
  console.log(`username: ${name}`);
}

consoleName(); // Taro
consoleName('Masaya'); // Masaya
```

### Arrow Function
functionを`=>`に置換できます。

```js
// ES5
$('.hoge').on('change', function(event) {
  console.log(event);
});

// ES6
$('.hoge').on('change', (event) => {
  console.log(event);
});
// 中身が式なら`{}`を省略可能であるが、関数の結果が`return`される
$('.hoge').on('change', (event) => console.log(event));
```

**※注意点**

`this`の扱いが`function`と`=>`で異なります。
```js
class StatusCode {
  constructor(statusCode) {
    this.statusCode = statusCode;
    
    setTimeout(() => {
      console.log(this.statusCode, 'OK');
    }, 1000);
    
    setTimeout(() => console.log(this.statusCode, 'OK'), 1000);
  
    self = this;
    setTimeout(function() {
      if (this.statusCode === undefined) console.log('`this.statusCode` is `undefined` in function');
      console.log(self.statusCode, 'OK');
    }, 1000);
  }
}

const statusCode = new StatusCode(200);
```
`Allow Function`内の`this`は`StatusCode`クラスの`this`を参照するのに対し、`function()`はグローバオブジェクトの`this`を参照している。グローバルオブジェクトの`this`に`statusCode`は宣言していないので`undefined`となります。


### Enhanced Object Literals
オブジェクトリテラルが拡張されました。
```js
// ES5
var obj = { "name": "Masaya Kamakura" };

// ES6
// keyとvalueが同じ名前であえば省略可能
function getNameObject(name) {
  return { name };
}
console.log(getNameObject('Masaya Kamakura')); // {"name":"Masaya Kamakura"}

// keyを動的に宣言可能
function getNameObject(name) {
  const nameKey = 'fullName';
  return { [nameKey]: name }; // keyに変数を使用
}
console.log(getNameObject('Masaya Kamakura')); // {"fullName":"Masaya Kamakura"}

function getNameObject(name) {
  return { [(() => 'fullName')()]: name }; // keyに関数を使用
}
console.log(getNameObject('Masaya Kamakura')); // {"fullName":"Masaya Kamakura"}
```

### Spread
配列を展開して返します。
配列に要素を追加して、新しい配列を作るときによく利用されます。
```js
const list = [1, 2, 3];
console.log(...list); // 1 2 3

// 先頭に要素を追加する
const newList = [0, ...list];
console.log(newList); // [0, 1, 2, 3]
```

### Import/Export
- `import`: 外部モジュールを読み込む
- `export`: 外部モジュールで利用できるようにする

```js
// a.js
import { hoge1, hoge2 } from "b"; 
import foo from "b";
import * as fuga from "b";
```

```js
// b.js
export function hoge1() {};
export function hoge2() {};
export default function foo() {};
```
`a.js`では`b.js`から`{ hoge }`と`foo`モージュルを`import`している。`{}`は`export`時に`default`がない場合に必要となる。

### Object.assign(target, ...sources)
1つ以上の`source`オブジェクトの保有する全てのプロパティを`target`にコピーします。戻り値は`target`オブジェクトになります。`immutable`な値を設計をする場合に良く利用されます。
```js
const todo = {
  id: 1,
  text: 'catch up es6',
  status: 'pedding'
};

const newTodo = Object.assign({}, todo, {status: 'progress'});
console.log(newTodo);
// { "id": 1, "text": "catch up es6", "status": "progress" }
```

## おまけ:ES5で積極的に使ってほしい機能

### Array.prototype.forEach()
与えられた関数を、配列の各要素に対して一度ずつ実行します。
```js
const data = [1, 2, 3, 4, 5];
data.forEach((val) => console.log(val));
```

for文でも書けますがループ変数が必要であったり、階層が深くなると可読性が下がるので使用しないようにしましょう。

### Array.prototype.map()
与えられた関数を配列のすべての要素に対して呼び出し、その結果からなる新しい配列を生成します。
`Array.prototype.forEach()`と似ていますが、新しい配列を生成するところに違いがあります。
```js
const data = [1, 2, 3, 4, 5];
const square = data.map((val) => val * val);
console.log(square); // [1, 4, 9, 16, 25]
```

### Array.prototype.filter()
引数として与えられたテスト関数を各配列要素に対して実行し、それに合格したすべての配列要素からなる新しい配列を生成します。
```js
const data = [1, 2, 3, 4, 5];
// 要素が4未満の場合のみ2乗した結果を返す
const filterSquare = data.filter((val) => val < 4)
                         .map((val) => val * val);
console.log(filterSquare); // [1, 4, 9]
```

### Array.prototype.reduce()
隣り合う 2 つの配列要素に対して（左から右へ）同時に関数を適用し、単一の値にします。
```js
const data = [1, 2, 3, 4, 5];

const sum = data.reduce((pre, current) => pre + current);
console.log(sum); // 15

const max = data.reduce((pre, current) => Math.max(pre, current));
console.log(max); // 5
```

## おわりに
この資料で紹介した機能はES6の仕様でもごく一部です。さらに勉強したい方のために参考資料を残しておきます。
またES5で便利な関数も紹介しました。`for`,`if`,`switch`等を使わなくても書けることが多いので、ES5の機能で書けないか考えるようにしましょう。

## 参考資料
- https://babeljs.io/
- https://babeljs.io/docs/learn-es2015/
- http://sssslide.com/www.slideshare.net/teppeis/es6-in-practice
- https://kangax.github.io/compat-table/es6/
- https://developer.mozilla.org/ja/docs/Web/JavaScript
- http://azu.github.io/promises-book/