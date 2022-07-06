# プレーンなTypeScriptの環境構築

## 必要なもの

- Node.js

## 環境構築

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

## 実行方法

```
npx ts-node ファイル名.ts
```
