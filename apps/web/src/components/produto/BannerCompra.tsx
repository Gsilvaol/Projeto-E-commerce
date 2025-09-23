import useParcelamento from "@/data/hooks/useParcelamento";
import { Moeda, Produto } from "@gstore/core";
import { IconCreditCard, IconShoppingCart } from "@tabler/icons-react";

interface BannerCompraProps {
  produto: Produto;
}

export default function BannerCompra({ produto }: BannerCompraProps) {
  const parcelamento = useParcelamento(produto.precoPromocional);
  return (
    <div className="flex">
      <div className="flex flex-col border-r border-zinc-500 pr-5">
        <div className="line-through text-zinc-500">
          de {Moeda.formatar(produto.precoBase)}
        </div>
        <div className="text-2xl font-semibold">
          <span className="text-base text-zinc-300">por</span>
          <span className="text-emerald-500 mx-2">
            {Moeda.formatar(produto.precoPromocional)}
          </span>
          <span className="text-base text-zinc-300">á vista</span>
        </div>
      </div>
      <div className="flex-1 flex flex-col text-2xl font-semibold text-zinc-400 pl-5">
        <span className="text-base text-zinc-300">
          {parcelamento.qtdeParcelas}x de
        </span>
        {Moeda.formatar(parcelamento.valorParcela)}
      </div>
      <div className="flex gap-2 items-center">
        <button className="flex-1 botao bg-pink-600">
          <IconShoppingCart size={20} />
          <span>Adicionar</span>
        </button>
        <button className="flex-1 botao bg-violet-700">
          <IconCreditCard size={20} />
          <span>Comprar</span>
        </button>
      </div>
    </div>
  );
}
