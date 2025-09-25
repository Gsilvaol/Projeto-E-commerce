import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db/db.module';
import { ProdutoModule } from './produto/produto.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [DbModule, ProdutoModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
