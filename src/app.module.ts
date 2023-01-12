import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { CierreModule } from './cierre/cierre.module';
import { MailModule } from './common/correo/correo.module';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RabbitMQ } from './common/constants';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development'],
      isGlobal: true,
    }),
    ClientsModule.register([
      {
        name: 'CIERRES_MAILER',
        transport: Transport.RMQ,
        options: {
          urls: [AppService.urlAmqp()],
          queue: RabbitMQ.CorreoCierresQueue,
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
    MailModule,
    CierreModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
