import { Controller, Get, UseFilters } from '@nestjs/common';
import { AllExceptionsFilter } from './all-exceptions.filter';
import { AppService } from './app.service';

@Controller()
@UseFilters(AllExceptionsFilter)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
