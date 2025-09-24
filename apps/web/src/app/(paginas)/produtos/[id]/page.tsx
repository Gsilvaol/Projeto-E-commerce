"use client";
import { useEffect, useState, use } from "react";
import TituloProduto from "@/components/produto/TituloProduto";
import InformacoesProduto from "@/components/produto/InformacoesProduto";
import BannerCompra from "@/components/produto/BannerCompra";
import MedidorDePreco from "@/components/produto/MedidorDePreco";
import AvaliacoesUsuarios from "@/components/produto/AvaliacoesUsuarios";
import AvaliacaoEspecializada from "@/components/produto/AvaliacaoEspecializada";
import ProdutoNaoEncontrado from "@/components/produto/ProdutoNaoEncontrado";

export default function PaginaProduto(props: any) {
  const { id }: { id: string } = use(props.params);

  const [produto, setProduto] = useState(null);
  useEffect(() => {
    const urlBase = process.env.NEXT_PUBLIC_API_URL;
    fetch(`${urlBase}/produtos/${id}`)
      .then((dados) => dados.json())
      .then((dados) => setProduto(dados));
  }, []);

  return produto ? (
    <div className="flex flex-col gap-20 container py-10 ">
      <div className="flex flex-col gap-10">
        <TituloProduto produto={produto} />
        <InformacoesProduto produto={produto} />
        <BannerCompra produto={produto} />
        <MedidorDePreco produto={produto} />
      </div>
      <AvaliacoesUsuarios produto={produto} />
      <AvaliacaoEspecializada produto={produto} />
    </div>
  ) : (
    <ProdutoNaoEncontrado botaoVoltar />
  );
}
