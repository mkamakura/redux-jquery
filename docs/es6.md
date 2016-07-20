# ES2015 Frist Step

## はじめに

`JavaScript`は`ECMAScript`という仕様のもとに実装されています。`ECMAScript2015(ES2015)`は`ECMAScript`の新しい標準仕様です。この仕様は2015年6月に確定しました。
`ES5`から6年ぶりのメジャーアップデートのため最初は違和感があるかもしれません。
しかし、より便利になるアップデートですのでしっかりキャッチアップし積極的に使用していきましょう。

### ES6 or ES2015?

ネット上で`ES6`と`ES2015`を見かけると思いますが、両方とも同じものを指しています。正確には`ES2015`が正しいです。来年以降も`ES2016`,`ES2017`…とアップデート予定です。当初は`ES6`として仕様検討が始まったためその名残りです。

### Babel

**背景**

`ES2015`の仕様確定が2015年6月にされましたが、すぐに新仕様が使えるわけではありません。JavaScriptエンジン\(V8,JavaScriptCore,Chakra等\)の実装は現在進行中でまだ使えない機能があるためです。[こちら](https://kangax.github.io/compat-table/es6/)のサイトで各ブラウザに実装済みの機能が確認できます。

ブラウザとJavaScriptエンジンの対応は以下の表のとおりです。

| ブラウザ | JavaScriptエンジン |
| :--- | :--- |
| IE | Chakra |
| Chrome | V8 |
| Opera | V8 |
| Safari | JavaScriptCore |
| FireFox | SpiderMonkey |

**Babel**

ブラウザに新仕様が追加されるまで新仕様を導入することがきません。そこで登場したのが`Babel(6to5)`で、`Babel`は`ES2015,ES Next`のコードを`ES5`のコードにトランスパイルしてくれるツールです\([公式サイト](https://babeljs.io/)\)。`ES2016`,`ES2017`の様な次期仕様を`ES Next`と呼んでいます。ブラウザはトランスパイル後のJavaScriptコードを読み込むことになります。

## ES2015新規仕様

ここでは特によく使われている仕様を説明します。

### let, const

`let`, `const`はブロックスコープの変数宣言かできます。`const`は再代入不可な値を宣言します。これまで使われていた`var`は使用しないようにしましょう。基本は`const`、再代入が必要な場合のみ`let`を使用するようにしましょう。

```js
// ES5
var a = 1;

// ES2015
let b = 1; // 再代入不可能な値（再代入が必要なときのみ使用する）
const c = 1; // 再代入不可な値（推奨）
```

`let`, `const`は`var`とはスコープのルールが違います。

```js
function varTest() {
  var x = 1;
  if (true) {
    var x = 2; // same variable! 
    console.log(x); // 2 
  } 
  console.log(x); // 2
} 

function letTest() { 
  let x = 1; 
  if (true) { 
    let x = 2; // different variable 
    console.log(x); // 2
  } 
  console.log(x); // 1 
}
```

これは`var`がグローバルオブジェクトの`property`となるためです。(ブラウザの場合は`window object`)

```js
var x = 'global';
let y = 'global';
console.log(this.x); // "global" 
console.log(this.y); // undefined
```

### Templete Strings

バッククォートを使った文字列の宣言ができます。メリットは文字列結合が簡単に書けることです。バッククォートで囲った文字列の`${}`は展開されます。またバッククォート内は改行できます。

```js
// ES5
var errorCode = 404;
var errorMessage = `file not found.`;
console.error('Error!! Code: ' + errorCode + ', Message: ' + errorMessage);
// Error!! Code: 404, Message: file not found.

// ES2015
const errorCode = 404;
const errorMessage = `file not found.`;
console.error(`Error!! Code: ${errorCode}, Message: ${errorMessage}`);
// Error!! Code: 404, Message: file not found.
```

### Class

クラスの宣言ができます。`extends`による継承や、`instance object`が生成直後に実行される`constructor`が使用できます。

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

// ES2015
$('.hoge').on('change', (event) => {
  console.log(event);
});
// 中身が式なら`{}`を省略可能
$('.hoge').on('change', (event) => console.log(event));
// 引数が1つの場合は`()`を省略可能
$('.hoge').on('change', event => console.log(event));

// 式で書いた場合は、結果がreturnされます
const multify = val => val * val;
console.log(multify(5)); // 25
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

    const self = this;
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

// ES2015
// key名とvalueの変数名が同じであれば省略可能
function getNameObject(name) {
  return { name };
}
console.log(getNameObject('Masaya Kamakura')); // {"name":"Masaya Kamakura"}

// key名を動的に宣言可能
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

### String Object APIs

APIがいくつか追加されました。ここでは`includes`と`repeat`、`startsWith`を紹介します。その他の機能は[こちら](https://kangax.github.io/compat-table/es6/#test-String.prototype_methods)を参考にしてください。

```
"abcde".includes("cd") // true 
"abc".repeat(3) // "abcabcabc"
"abcde".startsWith("abc") // true
```

- includes()
 - 引数に指定した文字列が含まれていれば`true`、以外は`false`を返す
- repeat()
 - 引数に指定した回数だけ繰り返した文字列を返す
- startWith()
 - 引数に指定した文字列で開始していれば`true`、以外は`false`を返す

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

* `import`: 外部モジュールを読み込む
* `export`: 外部モジュールで利用できるようにする

```js
// a.js
import * as fuga from "b"; // exportされたすべてのモジュールを読み込む
import { hoge1, hoge2 } from "b"; // hoge1, hoge2を読み込む
import foo from "b"; // `{}`をつけないとexport defaultされたモジュールを読み込む
```

```js
// b.js
export default function foo() {};
export function hoge1() {};
export function hoge2() {};
```



### Object.assign\(target, ...sources\)

1つ以上の`source`オブジェクトの保有する全てのプロパティを`target`にコピーします。戻り値は`target`オブジェクトになります。

```js
const todo = {
  id: 1,
  text: 'catch up es6',
  status: 'pending'
};

const newTodo = Object.assign({}, todo, {status: 'progress'});
console.log(newTodo);
// { "id": 1, "text": "catch up es6", "status": "progress" }
```

### Promise

`callback`のような非同期プログラミングで使用します。まずは、ウェブサイトからデータを取得する非同期処理を`callback`を使った場合と、`Promise`を使った場合で比較してみましょう。

`callback`を使った例
```js
getAsync("https://github.com", (error, result) => {
  if(error){// 取得失敗時の処理
    throw error;
  }
  // 取得成功の処理
});
```

`Promise`を使った例
```js
const promise = getAsyncPromise("https://github.com");
promise.then((result) => {
  // 取得成功の処理
}).catch((error) => {
  // 取得失敗時の処理
});
```

`getAsyncPromise()`は`Promise Object`を返す`function`です。処理が成功した場合は`then()`、失敗した場合は`catch()`が実行されます。

次に、`getAsyncPromise()`の中身を見てみましょう。
```js
function getAsyncPromise(url) {
  return new Promise((resolve, reject) => {
    request(url).end((err, res) => { // request()は指定したURLからデータを取得する架空の関数です
      if (err) {
        reject(err); // catch()が実行されます
      } else {
        resolve(res); // then()が実行されます
      }
    });
  }
}
```

`Promise`には`Promise.all()`,`Promise.race()`という機能が用意されています。どちらも並列に非同期処理を実行させることができます。違いは`then`,`catch`が実行されるタイミングです。

```
// Promise.all()のthen()はすべての処理が完了(resolve/reject)したら実行される
Promise.all([getAsyncPromise(url1), getAsyncPromise(url2), getAsyncPromise(url3)])
  .then(results => console.log(results))
  .catch(error => console.log(error));

// Promise.race()のthen()はどれか一つでも完了(resolve/reject)したら実行される（他の処理が中断されることではない）
Promise.race([getAsyncPromise(url1), getAsyncPromise(url2), getAsyncPromise(url3)])
  .then(results => console.log(results))
  .cache(error => console.log(error)); 
```

このような機能のおかげで`callback地獄`になりにくいコード書くことができます。上記の`Promise.all()`の例を`callback`で書くこと以下のようになります。(error処理は省略)

```
getAsync(url1, (err, res) => {
  getAsync(url2, (err, res) => {
    getAsync(url3, (err, res) => {
      //  すべてのデータを取得後の処理 
    });
  });
});
```

*※補足*
*`Promise`以外にも`generator(ES2015)`や`aync function(ES Next)`のような非同期プログラミングをするための機能があります。*

## おまけ:ES5で積極的に使ってほしい機能

### Array.prototype.forEach\(\)

与えられた関数を、配列の各要素に対して一度ずつ実行します。

```js
const data = [1, 2, 3, 4, 5];
data.forEach((val) => console.log(val));
```

for文だとループ変数が必要であったり、階層が深くなると可読性が下がるので使用しないようにしましょう。

### Array.prototype.map\(\)

与えられた関数を配列のすべての要素に対して呼び出し、その結果からなる新しい配列を生成します。
`Array.prototype.forEach()`と似ていますが、新しい配列を生成するところに違いがあります。

```js
const data = [1, 2, 3, 4, 5];
const square = data.map((val) => val * val);
console.log(square); // [1, 4, 9, 16, 25]
```

### Array.prototype.filter\(\)

引数として与えられたテスト関数を各配列要素に対して実行し、それに合格したすべての配列要素からなる新しい配列を生成します。

```js
const data = [1, 2, 3, 4, 5];
// 要素が4未満の場合のみ2乗した結果を返す
const filterSquare = data.filter((val) => val < 4)
                         .map((val) => val * val);
console.log(filterSquare); // [1, 4, 9]
```

### Array.prototype.reduce\(\)

隣り合う 2 つの配列要素に対して（左から右へ）同時に関数を適用し、単一の値にします。

```js
const data = [1, 2, 3, 4, 5];

const sum = data.reduce((pre, current) => pre + current);
console.log(sum); // 15

const max = data.reduce((pre, current) => Math.max(pre, current));
console.log(max); // 5
```

**sumの例**

| | pre | current | return |
| :--- | :--- | :--- |
| 1st | 1 | 2 | 3 |
| 2nd | 3 | 3 | 6 |
| 3rd | 6 | 4 | 10 |
| 4th | 10 | 5 | 15 |

結果: 15

**maxの例**

| | pre | current | return |
| :--- | :--- | :--- |
| 1st | 1 | 2 | 2 |
| 2nd | 2 | 3 | 3 |
| 3rd | 3 | 4 | 4 |
| 4th | 4 | 5 | 5 |

結果: 5

## おわりに

この資料で紹介した機能はES2015の仕様でもごく一部です。さらに勉強したい方のために参考資料を残しておきます。
またES5で便利な関数も紹介しました。`for`,`if`,`switch`等を使わなくても書けることが多いので、ES5の機能で書けないか考えるようにしましょう。

## 参考資料

* [https:\/\/babeljs.io\/](https://babeljs.io/)
* [https:\/\/babeljs.io\/docs\/learn-es2015\/](https://babeljs.io/docs/learn-es2015/)
* [http:\/\/sssslide.com\/www.slideshare.net\/teppeis\/es6-in-practice](http://sssslide.com/www.slideshare.net/teppeis/es6-in-practice)
* [https:\/\/kangax.github.io\/compat-table\/es6\/](https://kangax.github.io/compat-table/es6/)
* [https:\/\/developer.mozilla.org\/ja\/docs\/Web\/JavaScript](https://developer.mozilla.org/ja/docs/Web/JavaScript)
* [http:\/\/azu.github.io\/promises-book\/](http://azu.github.io/promises-book/)

