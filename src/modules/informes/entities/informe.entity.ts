import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Informe {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    usuario_id: number;

    @Column()
    fecha_desde: Date;

    @Column()
    fecha_hasta: Date;

    @Column()
    filtro: string;

    @CreateDateColumn({type: 'timestamp'})  //automatico
    created_at: Date;

    @UpdateDateColumn({type: 'timestamp'})  //automatico
    updated_at: Date;
}
