import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  // 日付を表す文字列を返す関数
  getTime(): string {
    let now = Date();
    return now;
  }
}
