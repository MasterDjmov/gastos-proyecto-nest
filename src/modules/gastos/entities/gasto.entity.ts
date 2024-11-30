import { Categoria } from "src/modules/categorias/entities/categoria.entity";
import { Usuario } from "src/modules/usuarios/entities/usuario.entity";
import { Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    categoria_id: number;

    @CreateDateColumn({type: 'timestamp'})  //automatico
    created_at: Date;

    @UpdateDateColumn({type: 'timestamp'})  //automatico
    updated_at: Date;

    @ManyToOne(()=>Usuario, (usuario)=>usuario.gastos,{onDelete:'CASCADE'})
    usuario: Usuario;

    @ManyToOne(()=>Categoria, (categoria)=>categoria.gastos,{onDelete:'CASCADE'})
    categoria: Categoria;
}
