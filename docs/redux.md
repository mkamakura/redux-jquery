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
||
