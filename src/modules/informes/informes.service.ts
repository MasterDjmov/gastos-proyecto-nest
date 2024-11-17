import { Injectable } from '@nestjs/common';
import { CreateInformeDto } from './dto/create-informe.dto';
import { UpdateInformeDto } from './dto/update-informe.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Informe } from './entities/informe.entity';

@Injectable()
export class InformesService {
  constructor(@InjectRepository(Informe) private informeRepositorio: Repository<Informe>){}
  
  create(createInformeDto: CreateInformeDto) {
    return 'This action adds a new informe';
  }

  findAll() {
    return `This action returns all informes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} informe`;
  }

  update(id: number, updateInformeDto: UpdateInformeDto) {
    return `This action updates a #${id} informe`;
  }

  remove(id: number) {
    return `This action removes a #${id} informe`;
  }
}
