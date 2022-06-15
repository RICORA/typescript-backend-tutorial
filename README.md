# RICORA Web Backend Tutorial

NestJSを使ってバックエンドを学びます。

## 必要なもの
  
- Node.js

## 環境構築（新たなプロジェクトを作るとき）

### 1. プロジェクトディレクトリ（フォルダ）を作り移動する

```
mkdir プロジェクト名
cd プロジェクト名
```

### 2. プロジェクトディレクトリにプロジェクトを作成する

```
npm init -y
```

### 3. TypeScriptをインストールする

```
npm install typescript ts-node --save-dev
npm install @types/node --save-dev
```

### 4. TypeScriptの設定をする

プロジェクトディレクトリに`tsconfig.json`というファイルを作り、次のように書く。

```json
{
    "compilerOptions": {
        "module": "CommonJS",
        "strict": true,
    }
}
```

## 環境構築（既存のプロジェクトを使うとき）

### 1. プロジェクトディレクトリ（フォルダ）に移動する

```
cd プロジェクト名
```

### 2. 必要なパッケージ・ライブラリをインストールする

```
npm install
```

### 3. TypeScriptの設定をする

プロジェクトディレクトリに`tsconfig.json`というファイルを作り、次のように書く。

```json
{
  "compilerOptions": {
    "module": "CommonJS",
    "strict": true,
  }
}
```

## 実行方法

```
npx ts-node 実行ファイル.ts
```

上記のコマンドを実行すると、実行ファイル.tsが`ts-node`コマンドによって実行されます。
`npx`は`ts-node`を見つけてくるコマンドで、実行に直接の関わりがあるわけではありません。
