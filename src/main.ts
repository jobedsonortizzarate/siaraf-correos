import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { AppService } from './app.service';
import { RabbitMQ } from './common/constants';

import * as ESAPI from 'node-esapi';
import * as csurf from 'csurf';
import * as cookieParser from 'cookie-parser';
import * as session from 'cookie-session';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const optionsCors = {
    "origin": [`${process.env.APP_URL}:${process.env.PORT}`],
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204,
    "credentials": true
  }
  app.enableCors(optionsCors);

  app.use(helmet());

  app.use(ESAPI.middleware());
  // app.use(hpp());
  app.use(helmet.hidePoweredBy());
  app.use(helmet.hsts());
  app.use(helmet.frameguard());
  app.use(helmet.xssFilter());
  app.use(helmet.noSniff());

  app.use(
    helmet.contentSecurityPolicy({
      directives: {
        "default-src": ["'self'"],
        // "default-src": ["'self'", `*${process.env.APP_URL ? process.env.APP_URL.split('//')[1] : ''}`],
        "connect-src": ["'self'"],
        "img-src": ["'self'", "data:"],
        "style-src-elem": ["'self'", "data:"],
        "script-src": ["'self'"],
        "object-src": ["'none'"],
      },
    })
  );
  //suscripcion a ciudades
  // const app = await NestFactory.createMicroservice<MicroserviceOptions>(
  //   AppModule,
  //   {
  //     transport: Transport.RMQ,
  //     options: {
  //       urls: [process.env.AMQP_URL],
  //       // queue: RabbitMQ.CiudadesQueue,
  //       queue: RabbitMQ.AsentamientosQueue,
  //       // queues: [RabbitMQ.CiudadesQueue, RabbitMQ.AsentamientosQueue],
  //     },
  //   },
  // );

  // await app.connectMicroservice({
  //   transport: Transport.RMQ,
  //   options: {
  //     urls: [process.env.AMQP_URL],
  //     queue: RabbitMQ.CierresQueue,
  //   },
  // });
  await app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      // urls: [process.env.AMQP_URL],
      urls: [AppService.urlAmqp()],
      queue: RabbitMQ.CorreoCierresQueue,
      // noAck: false,
      // prefetchCount: 1,
      // queueOptions: {
      //   durable: true,
      //   persistent: true,
      // },
    },
  });

  await app.startAllMicroservices();
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('/api-cor/v1');
  //configuracion de swagger
  const options = new DocumentBuilder()
    .setTitle('INDEP-SIARAF CORREOS API')
    .setDescription('Microservicio para las notificaciones de Cierres')
    .setVersion('1.0.0')
    // .addBearerAuth()
    .build();
  //creacion del documento swagger
  const document = SwaggerModule.createDocument(app, options);
  //configuracion de SwaggerModule
  SwaggerModule.setup('/api-cor/docs', app, document, {
    swaggerOptions: {
      filter: true,
    },
  });
  const port = process.env.PORT || 3000;
  await app.listen(port);
  
  app.use(cookieParser('d88f08b5-2ca7-5393-9661-83d9218c6e6e'));
  app.use(session({
    secret: 'b646cc0f-7e41-5160-a5a5-9bf6e3e9c8d8',
    resave: false,
    saveUninitialized: true,
    maxAge: 1000 * 60 * 15,
    cookie: { secure: true }
  }));
  app.use(csurf());

}
bootstrap();
