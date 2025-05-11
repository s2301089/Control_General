# gitコマンドの使い方  

バージョン管理ツール`git`の簡易的な使用方法をメモ。導入部分は省く。

## tagを作成してみよう  

`git tag -a [タグ名] -m "タグメッセージ"`  
`git push origin [タグ名]`

```bash
git tag -d [タグ名]
git push origin --delete [タグ名]
```
