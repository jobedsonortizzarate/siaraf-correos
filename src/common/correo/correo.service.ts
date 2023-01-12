import { Injectable, Logger } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { CorreoDTO } from './correo.dto';
import { json } from 'node:stream/consumers';
//import { User } from '../../src/auth/entities/user.entity';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) { }
  //User
  async sendUserConfirmation(user: string, token: string) {
    try {

      const url = `example.com/auth/confirm?token=${token}`;

      await this.mailerService.sendMail({
        to: 'test@gmail.com',
        subject: 'Welcome to Nice App! Confirm your Email',
        template: '/confirmation',
        context: {
          name: user,
          url,
        },
      });
    }
    catch (err) {
      Logger.error(err.message);
    }
  }

  async enviarNotificacion(correoDto: CorreoDTO): Promise<void> {
    try {
      return this.mailerService
        .sendMail({
          from: correoDto.de,
          to: correoDto.para,
          //to:
          //  JSON.parse(process.env.ISTESTING) === true
          //    ? process.env.TESTING_EMAILS
          //    : 'fervado_tese@hotmail.com', //TODO:reemplazar por correoDto.para
          subject: correoDto.asunto,
          template: correoDto.template,
          context: correoDto.context,
          cc: correoDto.cc,
          bcc: correoDto.cco,
        })
    } catch (err) {
      Logger.error(err.message);
      return new Promise<void>((resolve) => { resolve() })
    }
  }
}
