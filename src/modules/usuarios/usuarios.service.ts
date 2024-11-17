import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';
import {hash} from 'bcrypt'
@Injectable()
export class UsuariosService {
  constructor(@InjectRepository(Usuario) private usuarioRepositorio: Repository<Usuario>){}

  create(createUsuarioDto: CreateUsuarioDto) {
    return 'This action adds a new usuario';
  }

  findAll() {
    return this.usuarioRepositorio.find({});
    //return `This action returns all usuarios`;
  }

  findOne(id: number) {
    return this.usuarioRepositorio.find({where:{id}});
    //return `This action returns a #${id} usuario`;
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }

  async register(userObject: CreateUsuarioDto){
    const { password } = userObject; //texto plano
    const plainToHash =  await hash(password,10);
    userObject = {...userObject,password: plainToHash};
    const auth = this.usuarioRepositorio.create(userObject);
    this.usuarioRepositorio.save(auth);
    return {
      message: "Se registro correctamente el usuario",
      auth
    }
  }
}
