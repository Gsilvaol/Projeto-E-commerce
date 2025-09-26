export class Validador {
  static string(
    texto: any,
    opcoes?: {
      nomeCampo?: string;
      tamanhoMinimo?: number;
      tamanhoMaximo?: number;
    }
  ) {
    const textoTrim = texto.trim()
    const { nomeCampo, tamanhoMaximo, tamanhoMinimo } = opcoes || {};
    if (typeof textoTrim !== "string") {
      throw new Error(`${nomeCampo ?? "Valor"} não é uma string`);
    }

    if (tamanhoMinimo && textoTrim.length < tamanhoMinimo) {
      throw new Error(`${nomeCampo ?? "Valor"} tem pouco tamanho`);
    }

    if (tamanhoMaximo && textoTrim.length > tamanhoMaximo) {
      throw new Error(`${nomeCampo ?? "Valor"} tem muito tamanho`);
    }

    return textoTrim;
  }

  static email(texto: string) {
    const textoTrim = texto.trim();
    const email = Validador.string(textoTrim, {
      nomeCampo: "Email",
      tamanhoMinimo: 5,
      tamanhoMaximo: 25,
    });

    const [inicio, fim] = texto.split("@");

    if (!inicio?.length || !fim?.length) {
      throw new Error("Email está inválido");
    }

    return textoTrim;
  }

  static senha(texto: string, opcoes?: { nomeCampo?: string }) {
    Validador.string(texto, {
      nomeCampo: opcoes?.nomeCampo ?? "Senha",
      tamanhoMinimo: 6,
    });

    return texto;
  }
}
