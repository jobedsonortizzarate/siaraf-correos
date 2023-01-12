import { Controller, HttpCode, Logger, Post, UseFilters } from '@nestjs/common';
import { EventPattern, Payload,  } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';
import { AllExceptionsFilter } from 'src/all-exceptions.filter';
import { CorreoCierresMSG } from '../common/constants';
import { CierreService } from './cierre.service';
import {
  CierreDtoInterface,
  RespaldoDtoInterface,
} from './dtos/cierre.dto.interface';
@ApiTags('cierre')
@Controller('cierre')
@UseFilters(AllExceptionsFilter)
export class CierresController {
  constructor(
    // @Inject('CorreosService')
    private readonly cierreService: CierreService,
  ) { }

  @Post('/inicio-cierre')
  @HttpCode(201)
  //el decorador indica que es un mensaje(este proviene de rabbitMQ)
  @EventPattern(CorreoCierresMSG.INICIO_CIERRE)
  // @EventPattern(CorreoCierresMSG.INICIO_CIERRE)
  inicioCierre(@Payload() cierreDtoInterface: CierreDtoInterface) {
    //
    // const channel = context.getChannelRef();
    // const originalMsg = context.getMessage();

    // channel.ack(originalMsg);
    try {

      return this.cierreService.inicioCierre(cierreDtoInterface);
    } catch (err) {
      Logger.error(err.messge);
      return new Promise<void>((resolve) => { resolve() });
    }
    // return 'ok';
  }
  @Post('/fin-cierre')
  //el decorador indica que es un mensaje(este proviene de rabbitMQ)
  @EventPattern(CorreoCierresMSG.FIN_CIERRE)
  finCierre(@Payload() cierreDtoInterface: CierreDtoInterface) {
    //
    try {
      return this.cierreService.finCierre(cierreDtoInterface);
    } catch (err) {
      Logger.error(err.messge);
      return new Promise<void>((resolve) => { resolve() });
    }
  }
  @Post('/respaldo-cierre')
  @HttpCode(201)
  //el decorador indica que es un mensaje(este proviene de rabbitMQ)
  @EventPattern(CorreoCierresMSG.RESPALDO_CIERRE)
  respaldoCierre(@Payload() respaldoDtoInterface: RespaldoDtoInterface) {
    try {
      return this.cierreService.respaldoCierre(respaldoDtoInterface);
    } catch (err) {
      Logger.error(err.messge);
      return new Promise<void>((resolve) => { resolve() });
    }
  }
}
