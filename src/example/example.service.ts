import { Example } from './entities/example.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateExampleDto } from './dto/create-example.dto';
import { UpdateExampleDto } from './dto/update-example.dto';
import { Repository } from 'typeorm';

@Injectable()
export class ExampleService {
  constructor(
    @InjectRepository(Example)
    private exampleRepository: Repository<Example>,
  ) {}

  // untuk create data
  create(createExampleDto: CreateExampleDto) {
    const example = new Example();
    example.name = createExampleDto.name;

    return this.exampleRepository.save(example);
  }

  // untuk menampilkan data
  findAll(): Promise<Example[]> {
    return this.exampleRepository.find();
  }

  findOne(id: number): Promise<Example> {
    return this.exampleRepository.findOneBy({ id });
  }

  // untuk mengupdate data
  update(id: number, updateExampleDto: UpdateExampleDto) {
    return this.exampleRepository.save({...updateExampleDto, id: Number(id)});
  }

  // untuk delete data
  async remove(id: number): Promise<void> {
    await this.exampleRepository.delete(id);
  }
}
