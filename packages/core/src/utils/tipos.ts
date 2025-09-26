export interface InfoLogin {
  email: string;
  senha: string;
}

export interface InfoCadastro extends InfoLogin {
  nome: string;
}
