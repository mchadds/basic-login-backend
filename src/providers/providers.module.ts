import { Module } from '@nestjs/common';
import { ProvidersService } from './providers.service';
import { ProvidersController } from './providers.controller';

@Module({
  providers: [ProvidersService],
  controllers: [ProvidersController]
})

export class ProvidersModule {}
