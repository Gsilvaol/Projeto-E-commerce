import { Controller, Get } from '@nestjs/common';
import { ProdutoPrisma } from './produto.prisma';
import { Produto } from '@gstore/core';

@Controller('produtos')
export class ProdutoController {
  constructor(readonly produtoPrisma: ProdutoPrisma) {}

  @Get()
  async obterTodos(): Promise <Produto[]>{
    return this.produtoPrisma.obter()
  }
}
