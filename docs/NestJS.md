# NestJSの簡単な概要

> **Warning**
> 
> 当然のことながら、公式ドキュメントである [Documentation | NestJS - A progressive Node.js framework](https://docs.nestjs.com/) が最も正確ですから、
可能な限りそちらを読んでください。

僕自身初めてやるライブラリなので勉強しながら書いていきます。

ご指摘は[@kakudo415](https://twitter.com/kakudo415)か、PRで是非。

## 構造

まとめ方がわからん。

### 処理の流れ

#### Controller

クライアントからのHTTPリクエストを最初に処理する部分。
リクエストに応じて、処理を各`Service`に振り分ける。

### Class群

- NestFactory (@nestjs/core)
  - アプリそのもののインスタンスを作るメソッド等を持つ。
  - そのインスタンスは`INestApplication`インターフェースを実装していて、いろいろ便利なメソッドを持つ。（TODO: 説明の解像度を上げる）
- 
