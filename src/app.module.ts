import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardModule } from './board/board.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './config/typeorm.config.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    // forRoot -> 데이터베이스 설정내용을 전역으로 적용
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),

    BoardModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
