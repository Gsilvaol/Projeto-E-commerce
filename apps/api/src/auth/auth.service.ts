import { Injectable } from '@nestjs/common';
import { LogarDto } from './dto/logar.dto';
import { CadastrarDto} from './dto/cadastrar.dto';

@Injectable()
export class AuthService {
  cadastro(CadastrarDto: CadastrarDto) {
    return 'Essa é a função de cadastro';
  }

  login(logarDto:LogarDto) {
    return `Essa é a função de logar um usuário`;
  }

}
