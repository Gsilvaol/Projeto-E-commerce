import { JwtService } from '@nestjs/jwt';
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class JwtGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req: Request = context.switchToHttp().getRequest();
    const token = req.headers.authorization?.split(' ')[1] ?? '';

    try {
      const tokenDecodificacao = this.jwtService.decode(token);
      if (tokenDecodificacao.exp < Math.round(Date.now() / 1000)) {
        throw Error();
      }
    } catch {
      throw new UnauthorizedException(
        'Você não está logado. Faça login novamente.',
      );
    }

    return true;
  }
}
