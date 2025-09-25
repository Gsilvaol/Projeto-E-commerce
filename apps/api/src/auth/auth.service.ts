import { BadRequestException, Injectable } from '@nestjs/common';
import { LogarDto } from './dto/logar.dto';
import { CadastrarDto } from './dto/cadastrar.dto';
import { hash } from 'bcrypt';
import { AuthPrisma } from './auth.prisma';

@Injectable()
export class AuthService {
  constructor(private readonly authPrisma: AuthPrisma) {}
  async cadastro(cadastrarDto: CadastrarDto) {
    const usuarioExiste = await this.authPrisma.usuarioExiste(cadastrarDto.email
    )

    if (usuarioExiste){
      throw new BadRequestException("Usuário já cadastrado")
    }

    const senhaHash = await hash(cadastrarDto.senha, 5);
    return this.authPrisma.salvar(
      cadastrarDto.nome,
      cadastrarDto.email,
      senhaHash,
    );
  }

  async pegar(){
    return this.authPrisma.pegarTodos()
  }

  login(logarDto: LogarDto) {
    return `Essa é a função de logar um usuário`;
  }
}
