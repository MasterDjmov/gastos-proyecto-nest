import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Auth {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    usuario_id: number;

    @CreateDateColumn({type: 'timestamp'})  //automatico
    created_at: Date;

    @UpdateDateColumn({type: 'timestamp'})  //automatico
    updated_at: Date;
}
