import { InfoCadastro, InfoLogin } from "../tipos";
import { Validador } from "./validador";

export function ValidarDadosLogin(dados: InfoLogin) {
  const email = Validador.email(dados.email);
  const senha = Validador.senha(dados.senha);

  return { email, senha };
}

export function ValidarDadosCadastro(dados: InfoCadastro) {
  const nome = Validador.string(dados.nome, {
    nomeCampo: "Nome",
    tamanhoMinimo: 3,
  });
  const { email, senha } = ValidarDadosLogin({
    email: dados.email,
    senha: dados.senha,
  });

  return { nome, email, senha };
}
