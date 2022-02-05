import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // clarify the OK response from the API
  @ApiOkResponse()
  // indicate optional parameters
  //@ApiQuery({name: 'name', required: false})
  // get all users
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    return req.user;
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
