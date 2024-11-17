import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { GastosModule } from './modules/gastos/gastos.module';
import { CategoriasModule } from './modules/categorias/categorias.module';
import { InformesModule } from './modules/informes/informes.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    AuthModule,
    UsuariosModule,
    GastosModule,
    CategoriasModule,
    InformesModule,
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'djmov669',
      database: 'nestjs',
      synchronize: true,
      //entities: [Item],
      autoLoadEntities: true
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
