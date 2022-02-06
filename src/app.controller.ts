import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { LocalAuthGuard } from './auth/local-auth.guard';

@ApiTags('login')
@Controller()
export class AppController {

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
}
