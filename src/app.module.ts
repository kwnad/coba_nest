import { Example } from './example/entities/example.entity';

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilekitaModule } from './filekita/filekita.module';
// import { Repository } from 'typeorm';
import { ExampleModule } from './example/example.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PW,
      database: process.env.DB_NAME,
      entities: [Example],
      synchronize: true,
      autoLoadEntities: true
    }),
    FilekitaModule,
    ExampleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  // constructor(private Repository: Repository) {}
}
