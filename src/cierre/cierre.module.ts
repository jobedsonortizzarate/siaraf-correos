import { Module } from '@nestjs/common';
import { CierreService } from '../cierre/cierre.service';
import { CierresController } from '../cierre/cierre.controller';
import { MailModule } from '../common/correo/correo.module';
import { MailService } from '../common/correo/correo.service';

@Module({
  imports: [MailModule],
  providers: [CierreService],
  controllers: [CierresController],
  exports: [CierreService],
})
export class CierreModule {}
