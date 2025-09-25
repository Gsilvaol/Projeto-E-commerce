import { Produto } from '@gstore/core';
import { Injectable } from '@nestjs/common';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class AuthPrisma {
  constructor(readonly prisma: PrismaProvider) {}

  async salvar(nome: string, email: string, senha: string) {
    const usuario = await this.prisma.usuario.create({
      data: {
        nome,
        email,
        senha,
      },
    });
    return usuario;
  }

  async pegarTodos(){
    return this.prisma.usuario.findMany()
  }

  async usuarioExiste(email:string){
    const usuario = await this.prisma.usuario.findUnique({
        where:{email}
    })
    return !!usuario
  }
}
