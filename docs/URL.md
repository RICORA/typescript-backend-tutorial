# URLとは

_Uniform Resource Locator_

**インターネット上のものの場所を表す文字列** (インターネット上のものは、「リソース」と言うことがあります)

## 構造

```
スキーム://ホスト名/パス名
```

- http://example.com/
- https://ja.wikipedia.org/wiki/Uniform_Resource_Locator

`//` に深い意味は無いです。

### スキーム

**どうやってリソースを取得するかを表す**

- http:
- https:

他にも様々なスキーム・プロトコルがありますが、上記の二個のみ紹介します。

以下の説明は全て`http:`・`https:`に限ったもので、**他のスキームの場合、以下の説明は異なり**ます。

### ホスト名

**保存されている場所を表す** （多くの場合はサーバーを表す）

- example.com
- ja.wikipedia.org

### パス名

**保存されている場所の中でどこにあるかを表す** (たとえばフォルダ名・ファイル名)

- /wiki/Uniform_Resource_Locator
