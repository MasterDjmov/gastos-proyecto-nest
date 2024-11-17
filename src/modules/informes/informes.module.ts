import { Module } from '@nestjs/common';
import { InformesService } from './informes.service';
import { InformesController } from './informes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Informe } from './entities/informe.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Informe])],
  controllers: [InformesController],
  providers: [InformesService],
})
export class InformesModule {}
