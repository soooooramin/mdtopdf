# MDtoPDF
##　概要

## 使用ライブラリ
- commander.js: Node.jsでCLIツールを作成するためのライブラリ[tj/commander.js](https://github.com/tj/commander.js/)
- marked: MarkdownファイルをHTMLに変換するツール[Marked Documentation](https://marked.js.org/)

TypeScriptは node:fs のような組み込みモジュールの型情報を最初から持っていないため、@types/node というパッケージで補う必要がある
```
npm install -D @types/node
```
## `json`　ファイル
typescript開発の際に以下２つのコマンドを入力しておく必要がある
```
// package.jsonの作成
npm init
// tsconfig.jsonの作成
npx tsc --init
```
それぞれの役割は以下の通り
|ファイル|役割|記法解説ページ|
|---|---|---|
|package.json|プロジェクトの依存パッケージ、npm スクリプト、プロジェクト情報の管理|[CoddyDocs](https://coddy.tech/docs/ja/typescript/tsconfig)|
|tsconfig.json|typescriptのコンパイラの設定(（対象の JS バージョン、型定義、出力先、strict など）)|[サバイバルTypeScript](https://typescriptbook.jp/reference/packages/package-json)|

## `program`部分について
`.name`: コマンドの名前
~~~

~~~
`.description`: コマンドの説明
~~~

~~~
`.version`: バージョン情報
~~~

~~~
`.argument`: コマンドの引数の指定
~~~
.argument('<input>','説明')
<input>はヘルプオプション用のラベル
「<>」内のものは必須の項目、「[]」内のものは任意の項目
コマンドの引数は左から順番に.actionの関数に渡される
~~~
`.action`: コマンドの実際の動作を記載する場所
~~~
.action(function()=>{
    console.log('Hello, World!');
})
~~~


##　ファイル処理
commander.jsには標準でファイルを開く機能は存在しないため、Nodeの標準ライブラリである`fs` を利用する。

- ファイルの読み込みが完了してから、後続の処理を行いたい場合
```
const fs = require('fs');
let text = fs.readFileSync("sample.txt");
```
ここでの`text`に該当する部分は型指定がない場合バイト列を返す。ファイルの中身を文字データとして利用したい場合は下記のようにする。
```
let text:string = fs.readFileSync("sample.txt",'utf-8');
```

## markedの使い方
Markdown形式で記載された文字列を

## 詰まったところ
### 1.コンパイル時に`node:fs`部分で`Cannot find name`が出力される
古い互換寄りの設定（module が CommonJS 相当、moduleResolution が node10 相当）で型チェックを行うことが原因。
そのため、下記のコマンドを入力して`tsconfig.json`を作成する必要がある。
```
npx tsc --init
```

### 2. コンパイル時にモジュールのエラーが発生する
以前は`"type" = "commonjs"`と設定していたがcommonjsは古い互換の設定のため、`import {} from `の形式が利用できない。
`package.json`を`"type" = "module"`に変更することで最新の互換の設定に変更できる。


## 参考サイト
commander系
- https://github.com/tj/commander.js
- https://clig.dev/#the-basics
- https://note.shiftinc.jp/n/n26daf5a434b5

node / Typescript系
- https://qiita.com/shirokuman/items/509b159bf4b8dd1c41ef
- https://nodejs.org/ja