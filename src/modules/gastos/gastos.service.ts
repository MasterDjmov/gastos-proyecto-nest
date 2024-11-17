import { Injectable } from '@nestjs/common';
import { CreateGastoDto } from './dto/create-gasto.dto';
import { UpdateGastoDto } from './dto/update-gasto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Gasto } from './entities/gasto.entity';

@Injectable()
export class GastosService {
  constructor(@InjectRepository(Gasto) private gastoRepositorio: Repository<Gasto>){}

  create(createGastoDto: CreateGastoDto) {
    return 'This action adds a new gasto';
  }

  findAll() {
    return `This action returns all gastos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gasto`;
  }

  update(id: number, updateGastoDto: UpdateGastoDto) {
    return `This action updates a #${id} gasto`;
  }

  remove(id: number) {
    return `This action removes a #${id} gasto`;
  }
}
