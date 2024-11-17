import { IsEmail, MaxLength, MinLength } from "class-validator";
import { Entity } from "typeorm";

@Entity()
export class LoginAuthDto {
    @IsEmail()
   email: string;
   
   @MinLength(4)
   @MaxLength(12)
   password: string;
}
