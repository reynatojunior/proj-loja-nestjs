import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LojaModule } from './loja/loja.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234qwe.',
      database: 'loja',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      driver: require('mysql2'),
    }),
    LojaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
