# ES6 Frist Step

## はじめに
`ECMAScript 6(ES6)`は`JavaScript`の新しい標準仕様です。この仕様は2015年6月に確定しました。
`ES5`から6年ぶりのメジャーアップデートのため最初は違和感があるかもしれません。
しかし、より便利になるアップデートですのでしっかりキャッチアップし積極的に使用していきましょう。

### ES6 or ES2015?
ネットで検索していると`ES6`と`ES2015`を見かけると思いますが、両方とも同じものを指しています。
正確には`ES2015`が正しいです。来年以降も`ES2016`,`ES2017`…とアップデート予定です。
当初は`ES6`として仕様検討が始まったためその名残りが残っています。この資料では`ES6`で統一させていただきます。(短いほうが読みやすいので)

### Babel

**背景**

`ES6`の仕様確定が2015年6月にされましたが、すぐに新仕様が使えるわけではありません。
JavaScriptエンジン(V8,JavaScriptCore,Chakra等)の実装は現在進行中でまだ使えない機能が。
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

上記のようにブラウザに新仕様が追加されるの待っていてはすぐに新仕様を試すことがきません。そこで登場したのが`Babel`で、`Babel`は`ES6`のコードを`ES5`のコードにトランスパイルしてくれるツールです。([公式サイト](https://babeljs.io/)
)来年以降の`ES2016`,`ES2017`についても先行実装されているので今後も使用され続けると言われています。
実際の開発でも`Babel`を使ってトランスパイルし、ブラウザはトランスパイル後のJavaScriptコードを読み込むことになります。

## 新規仕様
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
文字列結合が簡単に書けます。
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
}

// ES6
$('.hoge').on('change', (event) => {
  console.log(event));
}
// 中身が式なら`{}`を省略可能で、結果が`return`される
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
      console.log(self.statusCode, 'OK')
    }, 1000)
  }
}

const statusCode = new StatusCode(200);
```
`Allow Function`内の`this`は`StatusCode`クラスの`this`を参照するのに対し、`function()`はグローバオブジェクトの`this`を参照している。グローバルオブジェクトの`this`に`statusCode`は宣言していないので`undefined`となります。


### Enhanced Object Literals
オブジェクトリテラルが拡張されました。
```js
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
const list = [1, 2, 3];
const newList = [0, ...list];
console.log(newList); // [0, 1, 2, 3]
```

## おわりに
この資料で紹介した機能はES6の仕様でもごく一部です。
さらに勉強したい方のために参考資料を残しておきます。

## 参考資料
- https://babeljs.io/
- https://babeljs.io/docs/learn-es2015/
- http://sssslide.com/www.slideshare.net/teppeis/es6-in-practice
- https://kangax.github.io/compat-table/es6/