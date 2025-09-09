import { Produto } from '@gstore/core';
import { Injectable } from '@nestjs/common';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class ProdutoPrisma {
  constructor(readonly prisma: PrismaProvider) {}

  async obter(): Promise<Produto[]> {
    const produtos = await this.prisma.produto.findMany();
    return produtos as Produto[];
  }

  async obterUm(id: number): Promise<Produto | null> {
    const produto = await this.prisma.produto.findUnique({ where: { id } });
    return (produto as Produto) ?? null
  }
}
