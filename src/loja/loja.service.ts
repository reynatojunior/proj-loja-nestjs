import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Loja } from './entities/loja.entity';
import { CreateLojaDto } from './dto/create-loja.dto';
import { UpdateLojaDto } from './dto/update-loja.dto';


@Injectable()
export class LojaService {

  constructor(
    @InjectRepository(Loja)
    private readonly repository: Repository<Loja>){}


  create(dto: CreateLojaDto) {
    const loja = this.repository.create(dto);
    return this.repository.save(loja);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id });
  }

  async update(id: number, dto: UpdateLojaDto): Promise<Loja> {
    const loja = await this.repository.findOneBy({ id });
    
    if (!loja) {
        throw new NotFoundException(`Loja com ID ${id} não encontrada`);
    }

    

    const lojaAtualizada = this.repository.merge(loja, dto);
    return await this.repository.save(lojaAtualizada);
}

  async remove(id: number) {
     const loja = await this.repository.findOneBy({ id });
    
    if (!loja) {
        throw new NotFoundException(`Loja com ID ${id} não encontrada`);
    }

    return await this.repository.remove(loja);
    
  }
}
