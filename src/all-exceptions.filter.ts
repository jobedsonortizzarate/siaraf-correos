import { Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';


@Catch()
export class AllExceptionsFilter extends BaseExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const httpAdapterHostInstance = this.httpAdapterHost;
    const httpAdapter = httpAdapterHostInstance?.httpAdapter!;
    const ctx = host.switchToHttp();
    const res = ctx.getResponse();
    res.setHeader('user-agent','none');
    httpAdapter.reply(res, 'Acción no permitida', 403);
    if (exception) console.error(exception.message, exception.stack)
    else { console.error('Error filtrado, sin descripción disponible'); }
  }
}
