import { Produto } from '@gstore/core';
import { Injectable } from '@nestjs/common';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class ProdutoPrisma {
    constructor(readonly prisma:PrismaProvider){}

    async obter(): Promise<Produto[]>{
        const produtos = await this.prisma.produto.findMany()
        return produtos as Produto[]
    }
}
