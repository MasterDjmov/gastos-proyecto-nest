import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { GastosModule } from './modules/gastos/gastos.module';
import { CategoriasModule } from './modules/categorias/categorias.module';
import { InformesModule } from './modules/informes/informes.module';

@Module({
  imports: [
    AuthModule,
    UsuariosModule,
    GastosModule,
    CategoriasModule,
    InformesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
