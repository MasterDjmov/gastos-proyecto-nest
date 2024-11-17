import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Usuario {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    nombre: string;

    @Column()
    apellido: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({nullable: true})   //permito null
    foto: string

    @CreateDateColumn({type: 'timestamp'})  //automatico
    created_at: Date;

    @UpdateDateColumn({type: 'timestamp'})  //automatico
    updated_at: Date;

}
