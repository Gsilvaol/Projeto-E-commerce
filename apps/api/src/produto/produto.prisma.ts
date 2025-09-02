import { Injectable } from '@nestjs/common';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class ProdutoPrisma {
    constructor(readonly prisma:PrismaProvider){}

    async obter(){
        const produtos = await this.prisma.produto.findMany()
        return produtos
    }
}
