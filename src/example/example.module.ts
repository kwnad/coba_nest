import { Example } from './entities/example.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ExampleService } from './example.service';
import { ExampleController } from './example.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Example])
  ],
  controllers: [ExampleController],
  providers: [ExampleService]
})
export class ExampleModule {}
