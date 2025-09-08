import { Produto, Moeda } from "@gstore/core";
import { IconShoppingCartPlus } from "@tabler/icons-react";
import Image from "next/image";
import NotaReview from "../shared/NotaReview";
import useParcelamento from "@/data/hooks/useParcelamento";
interface ProdutoItemProps {
  produto: Produto;
}

export default function ProdutoItem({ produto }: ProdutoItemProps) {
  const parcelamento = useParcelamento(produto.precoBase);

  return (
    <div
      className={`
    flex flex-col bg-violet-dark rounded-xl relative max-w-[350px] border  border-white/10
  `}
    >
      <div className="absolute flex justify-end top-2.5 right-2">
        <NotaReview nota={produto.nota} />
      </div>
      <div className="w-full h-48 relative">
        <Image
          src={produto.imagem}
          fill
          className="object-contain"
          alt="{`Imagem do produto ${produto.nome}`}"
        />
      </div>
      <div className="flex-1 flex flex-col gap-3 p-5 border-t border-white/10">
        <span className="text-lg font-semibold">{produto.nome}</span>
        <div className="self-start text-sm border-b border-dashed">
          {produto.especificacoes.destaque}
        </div>
        <div className="flex-1"></div>
        <div className="flex flex-col">
          <span className="text-sm text-gray-400 line-through">
            de {Moeda.formatar(produto.precoBase)}
          </span>
          <span className="text-xl font-semibold text-emerald-400">
            por {Moeda.formatar(produto.precoPromocional)}
          </span>
          <span className="text-zinc-400 text-xs">
            até {parcelamento.qtdeParcelas}x de{""} 
            {Moeda.formatar(parcelamento.valorParcela)}
          </span>
        </div>
        <button
          className={`flex justify-center items-center gap-2 
            h-8 bg-violet-600 hover:border-2
           border-emerald-500 rounded-full`}
        >
          <IconShoppingCartPlus size={20} />
          <span>Adicionar</span>
        </button>
      </div>
    </div>
  );
}
