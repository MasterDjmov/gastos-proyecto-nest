import { Gasto } from "src/modules/gastos/entities/gasto.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Categoria {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    nombre: string;

    @Column({type: 'text'})
    descripcion: string;

    @CreateDateColumn({type: 'timestamp'})  //automatico
    created_at: Date;

    @UpdateDateColumn({type: 'timestamp'})  //automatico
    updated_at: Date;

    @OneToMany(()=> Gasto, (gasto)=> gasto.categoria)
    gastos: Gasto[];
}
