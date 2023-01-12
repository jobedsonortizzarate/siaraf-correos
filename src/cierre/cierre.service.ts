import { Injectable } from '@nestjs/common';
import { CorreoDTO } from '../common/correo/correo.dto';
import {
  CierreDtoInterface,
  RespaldoDtoInterface,
} from './dtos/cierre.dto.interface';
import { MailService } from '../common/correo/correo.service';
import { EmailTemplates } from '../common/constants';

@Injectable()
export class CierreService {
  constructor(private mailService: MailService) { }

  public async inicioCierre(
    cierreDtoInterface: CierreDtoInterface,
  ): Promise<void> {
    try {

      let dateToday = this.formatDate(new Date());
      let context = {
        dateToday: dateToday.toString(),
        ...cierreDtoInterface,
      };

      let correoDto = new CorreoDTO(
        'de',
        cierreDtoInterface.too,
        cierreDtoInterface.cc,
        cierreDtoInterface.cco,
        EmailTemplates.INICIA_CIERRE,
        cierreDtoInterface.asunto + ' ' + cierreDtoInterface.ambiente,
        context,
      );
      return this.mailService.enviarNotificacion(correoDto);
    } catch (error) {

    }
  }

  public async finCierre(
    cierreDtoInterface: CierreDtoInterface,
  ): Promise<void> {
    try {
      let dateToday = this.formatDate(new Date());
      let context = {
        dateToday: dateToday.toString(),
        ...cierreDtoInterface,
      };
      let correoDto = new CorreoDTO(
        'de',
        cierreDtoInterface.too,
        cierreDtoInterface.cc,
        cierreDtoInterface.cco,
        EmailTemplates.FIN_DE_CIERRE,
        cierreDtoInterface.asunto + ' ' + cierreDtoInterface.ambiente,
        context,
      );
      return this.mailService.enviarNotificacion(correoDto);
    } catch (error) {

    }
  }

  private formatDate(date) {
    var dateStr =
      ('00' + date.getDate()).slice(-2) +
      '/' +
      ('00' + (date.getMonth() + 1)).slice(-2) +
      '/' +
      date.getFullYear() +
      ' ' +
      ('00' + date.getHours()).slice(-2) +
      ':' +
      ('00' + date.getMinutes()).slice(-2) +
      ':' +
      ('00' + date.getSeconds()).slice(-2);
    return dateStr;
  }

  public async respaldoCierre(
    respaldoDtoInterface: RespaldoDtoInterface,
  ): Promise<void> {
    //
    try {
      let dateToday = this.formatDate(new Date());
      let context = {
        dateToday: dateToday.toString(),
        ...respaldoDtoInterface,
      };
      let correoDto = new CorreoDTO(
        'de',
        respaldoDtoInterface.too,
        respaldoDtoInterface.cc,
        respaldoDtoInterface.cco,
        EmailTemplates.NOTIFICACION_CIERRE,
        respaldoDtoInterface.asunto + ' ' + respaldoDtoInterface.ambiente,
        context,
      );
      return this.mailService.enviarNotificacion(correoDto);
    } catch (error) {

    }
  }
}
