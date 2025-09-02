import { Module } from '@nestjs/common';
import { ProdutoPrisma } from './produto.prisma';
import { ProdutoController } from './produto.controller';
import { PrismaProvider } from 'src/db/prisma.provider';


@Module({
  providers: [ProdutoPrisma, PrismaProvider],
  controllers: [ProdutoController]
})
export class ProdutoModule {}
