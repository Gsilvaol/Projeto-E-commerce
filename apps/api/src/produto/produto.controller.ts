import { Controller, Get } from '@nestjs/common';
import { ProdutoPrisma } from './produto.prisma';

@Controller('produtos')
export class ProdutoController {
  constructor(readonly produtoPrisma: ProdutoPrisma) {}

  @Get()
  async obterTodos() {
    return this.produtoPrisma.obter()
  }
}
