import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Gasto {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    usuario_id: number;

    @Column({type: 'text'})
    descripcion: string;

    @Column()
    fecha: Date;

    @Column()
    categoria_id: number;

    @CreateDateColumn({type: 'timestamp'})  //automatico
    created_at: Date;

    @UpdateDateColumn({type: 'timestamp'})  //automatico
    updated_at: Date;
}
