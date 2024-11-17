import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository,Connection } from 'typeorm';
import {hash} from 'bcrypt'
@Injectable()
export class UsuariosService {
  constructor(@InjectRepository(Usuario) private usuarioRepositorio: Repository<Usuario>,private readonly connection: Connection){}

  create(createUsuarioDto: CreateUsuarioDto) {
    //return 'This action adds a new usuario';
    return this.usuarioRepositorio.create(createUsuarioDto);
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
    const datosAuth = await this.usuarioRepositorio.save(auth);
    console.log(datosAuth)
    //aplico el proceso almacenado a la tabla de login
    await this.connection.query('CALL insertarLoginAuth(?, ?, ?)', [plainToHash,datosAuth.id, userObject.email]);

    return {
      message: "Se registro correctamente el usuario",
      auth
    }
  }
}
