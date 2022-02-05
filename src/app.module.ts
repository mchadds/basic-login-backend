import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProvidersModule } from './providers/providers.module';

@Module({
  imports: [UsersModule, ProvidersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
