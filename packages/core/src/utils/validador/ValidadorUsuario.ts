import { InfoCadastro } from "../tipos";
import { Validador } from "./validador";


export function ValidarDadosCadastro(dados: InfoCadastro) {
  const nome = Validador.string(dados.nome, {
    nomeCampo: "Nome",
    tamanhoMinimo: 3,
  });
  const email = Validador.email(dados.email);
  const senha = Validador.senha(dados.senha);

  return {nome, email, senha}
}
