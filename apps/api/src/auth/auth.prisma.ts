import { InfoCadastro, Produto } from '@gstore/core';
import { Injectable } from '@nestjs/common';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class AuthPrisma {
  constructor(readonly prisma: PrismaProvider) {}

  async salvar(infoCadastro:InfoCadastro) {
    const usuario = await this.prisma.usuario.create({
      data: infoCadastro
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
