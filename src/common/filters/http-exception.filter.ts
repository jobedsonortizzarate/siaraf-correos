import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
// import { EntityNotFoundError, QueryFailedError } from 'typeorm';

@Catch()
// @Catch(QueryFailedError, EntityNotFoundError)
export class AllExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionFilter.name);
  catch(exception: any, host: ArgumentsHost) {
    Logger.debug('excepcion detectada');
    const ctx = host.switchToHttp();
    const res = ctx.getResponse();
    const req = ctx.getRequest();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const msg =
      exception instanceof HttpException ? exception.getResponse() : exception;

    this.logger.error(`Status ${status} Error: ${JSON.stringify(msg)}`);
    //generar clase de salida
    res.setHeader('user-agent','none');
    res.status(403).send('Acción no permitida');
  }
}
