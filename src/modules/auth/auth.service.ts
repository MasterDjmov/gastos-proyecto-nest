import { HttpException, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Auth } from './entities/auth.entity';
import { JwtService } from '@nestjs/jwt';
import { hash,compare } from 'bcrypt';
import { LoginAuthDto } from './dto/login-auth.dto';

@Injectable()
export class AuthService {
  constructor(@InjectRepository(Auth) private usuarioRepositorio: Repository<Auth>,private jwtService: JwtService){}

  create(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }

  async login(userObject: LoginAuthDto){
    //aqui valido y uso token
    //primero consulto si existe
    const { email, password } =  userObject;
    const findUser = await this.authRepository.findOne({
      where: {email}
    });

    //sino existe retorno error
    if(!findUser){
      throw new HttpException("No existe el Usuario", 404);      
    }

    //comparo las claves planas con la convertida
    const checkPassword =  await compare(password, findUser.password);

    if(!checkPassword){
      throw new HttpException("Password Incorrecto", 403);      
    }

    //si todo va bien
    const payload = {id: findUser.id, name: findUser.name};

    const token = await this.jwtService.sign(payload);
    const data = {
      user: findUser,
      token
    }
    //aqui lo del token

    return data;
  }
}
