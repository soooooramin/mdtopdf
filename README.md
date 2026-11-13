# MDtoPDF

##　概要
markdownファイルをpdfに変換するためのCLIツールです。

### 利用方法
```
tsc main.ts
node main.js [example].md
```

出力されたファイルはすべて`output.pdf`として出力されます。(後日直す予定)

デザインや機能については開発中です

## 使用ライブラリ
- commander.js: Node.jsでCLIツールを作成するためのライブラリ[tj/commander.js](https://github.com/tj/commander.js/)
- marked: MarkdownファイルをHTMLに変換するツール[Marked Documentation](https://marked.js.org/)