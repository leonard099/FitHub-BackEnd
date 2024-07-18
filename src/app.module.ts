import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import typeorm from '../config/typeORMconig'
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load: [typeorm],
  }),
  TypeOrmModule.forRootAsync({
      inject:[ConfigService],
      useFactory: (configService: ConfigService) => {
        const config = configService.get('typeorm')
        return config
      }
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
