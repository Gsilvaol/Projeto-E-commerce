import { Produto } from "@gstore/core";
import Image from "next/image";
import Especificacoes from "./Especificacoes";

interface InformacoesProdutoProps {
  produto: Produto;
}

export default function InformacoesProduto({
  produto,
}: InformacoesProdutoProps) {
  return (
    <div className="flex items-center bg-violet-dark rounded-xl p-5">
      <div className="flex-1 relative flex justify-center h-96">
        <Image
          src={produto.imagem}
          fill
          className="object-cover p-7"
          alt={`Imagem do ${produto.nome}`}
        />
      </div>
        <Especificacoes produto={produto} />
    </div>
  );
}
