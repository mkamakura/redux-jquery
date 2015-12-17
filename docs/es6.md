# ES6 Frist Step

## はじめに
`ECMAScript 6(ES6)`は`JavaScript`の新しい標準仕様です。この仕様は2015年6月に確定しました。
`ES5`から6年ぶりのメジャーアップデートのため最初は違和感があるかもしれません。
しかし、より便利になるアップデートですのでしっかりキャッチアップし積極的に使用していきましょう。

### ES6 or ES2015?
ネットで検索していると`ES6`と`ES2015`を見かけると思いますが、両方とも同じものを指しています。
正確には`ES2015`が正しいです。来年以降も`ES2016`,`ES2017`・・・とアップデート予定です。
当初は`ES6`として仕様検討が始まったためその名残りが残っています。この資料では`ES6`で統一させていただきます。(短いほうが読みやすいので)

### Babel
`ES6`の仕様確定が2015年6月にされましたが、すぐに新仕様が使えるわけではありません。
JavaScriptエンジン(V8,JavaScriptCore,Chakra等)の実装は現在進行中でまだ使えない機能もあります。
[こちら](https://kangax.github.io/compat-table/es6/)のサイトで各ブラウザに実装済みの機能が確認できます。

ブラウザとJavaScriptエンジンの対応は以下の表のとおりです。

|ブラウザ|JavaScriptエンジン|
|-|-|
|IE|Chakra|
|Chrome|V8|
|Opera|V8|
|Safari|JavaScriptCore|
|FireFox|SpiderMonkey|

`Babel`は`ES6`のコードを`ES5`のコードにトランスパイルしてくれるツールです。[公式サイト](https://babeljs.io/)
来年以降の`ES2016`,`ES2017`についても先行実装されているので今後も使用され続けると言われています。
実際の開発でも`Babel`を使ってトランスパイルしてブラウザはトランスパイル後のJavaScriptコードを読み込むことになります。

## 新規仕様
ここでは特によく使われている仕様について説明します。参考資料等を用いてさらに学習してください。

### Arrow Function
functionを`=>`に置換できます。

```js
// ES5
$('.hoge').on('change', function(event) {
  console.log(event);
}

// ES6
$('.hoge').on('change', (event) => console.log(event));
// 引数が一つの場合は`()`も省略可能
$('.hoge').on('change', event => console.log(event));
```

### let, const
`let`, `const`はブロックスコープの変数宣言かできます。これまで使われていた`var`は使用しないようにしましょう。`let`、`const`のどちらを使うべきかという議論は活発に行われていますが、基本は`const`、どうしても再代入が必要な場合のみ`let`を使用するようにしましょう。

### Templete Strings
文字列結合が簡単に書けます。
```js
// ES5
var errorCode = 404;
var errorMessage = `file not found`;
console.log('Error!! Code: ' + errorCode + ', Message: ' + errorMessage);

// ES6
const errorCode = 404;
const errorMessage = `file not found`;
console.log(`Error!! Code: ${errorCode}, Message: ${errorMessage}`);
```

### Default Parameters
関数の引数にデフォルト値を設定できます。
```js
function consoleName(name = 'Taro') {
  console.log(`username: ${name}`);
}

consoleName(); // console out put 'Taro'
consoleName('Masaya'); // console out put 'Masaya'
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

## おわりに
この資料で紹介した機能はES6の仕様でもごく一部です。
さらに勉強したい方のために参考資料を残しておきます。

## 参考資料
- https://babeljs.io/
- https://babeljs.io/docs/learn-es2015/
- http://sssslide.com/www.slideshare.net/teppeis/es6-in-practice
- https://kangax.github.io/compat-table/es6/