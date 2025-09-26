import { BadRequestException, Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';
import { AuthPrisma } from './auth.prisma';
import { ValidarDadosCadastro } from '@gstore/core';
import { InfoLogin, InfoCadastro } from '@gstore/core';

@Injectable()
export class AuthService {
  constructor(private readonly authPrisma: AuthPrisma) {}
  async cadastro(infoCadastro: InfoCadastro) {
    const { nome, email, senha } = ValidarDadosCadastro(infoCadastro);

    const usuarioExiste = await this.authPrisma.usuarioExiste(email);

    if (usuarioExiste) {
      throw new BadRequestException('Usuário já cadastrado');
    }

    const senhaHash = await hash(senha, 5);
    await this.authPrisma.salvar({
      nome,
      email,
      senha: senhaHash,
    });

    return {mensagem: "Usuário criado com sucesso"}
  }

  async pegar() {
    return this.authPrisma.pegarTodos();
  }

  login(infoLogin: InfoLogin) {
    return `Essa é a função de logar um usuário`;
  }
}
