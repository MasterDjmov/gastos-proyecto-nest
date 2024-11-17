import { IsEmail, IsNotEmpty } from "class-validator";
import { Entity } from "typeorm";

@Entity()
export class CreateUsuarioDto {
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    nombre: string;

    @IsNotEmpty()
    apellido: string;
}
