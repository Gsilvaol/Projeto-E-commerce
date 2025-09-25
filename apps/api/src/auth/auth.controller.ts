import { Controller, Post, Body, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LogarDto } from './dto/logar.dto';
import { CadastrarDto } from './dto/cadastrar.dto';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("login")
  login(@Body() logarDto: LogarDto) {
    return this.authService.login(logarDto);
  }

  @Post("cadastro")
  cadastro(@Body() cadastrarDto: CadastrarDto) {
    return this.authService.cadastro(cadastrarDto);
  }

  @Get("teste")
    pegarTodos(){
      return this.authService.pegar()
    }
  
 
}
