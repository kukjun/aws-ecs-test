import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('hello api execute');
    return 'Hello World!, Code Pipeline';
  }
  getHealthCheck(): number {
    console.log('health check execute');
    return 200;
  }
}
