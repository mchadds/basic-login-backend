import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('login')
  login(): any {
    return {}
  }

  @Get('protected')
  getHello(): string {
    return this.appService.getHello();
  }
  // @Get('hello')
  // getHello(): string {
  //   return this.appService.getHello();
  // }
}
