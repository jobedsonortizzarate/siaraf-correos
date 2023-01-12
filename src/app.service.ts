import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class AppService implements OnModuleInit  {
  getHello(): string {
    return 'Hello World!';
  }

  async onModuleInit(): Promise<void> {
    // Hack para UTC
    process.env.TZ = process.env.TZ || 'UTC';
  }
  
  static urlAmqp(): string {
    const { AMQP_URL } = process.env;
    const url = AMQP_URL ? AMQP_URL : 'amqp://root:test@rabbitmq:5672';
    
    return url;
  }
}
