import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('loja')
export class Loja {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column('decimal', { precision: 6, scale: 2 })
    preco: number;

    @Column()
    estoque: number;

}
