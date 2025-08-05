import { IsNumber, IsString } from "class-validator";

export class CreateLojaDto {
    @IsString()
    nome: string;

    @IsNumber()
    preco: number;

    @IsNumber()
    estoque: number;
}
