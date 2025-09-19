"use client";
import ProdutoItem from "@/components/produto/ProdutoItem";
import { Produto } from "@gstore/core";
import { useEffect, useState } from "react";
import ProdutoNaoEncontrado from "./ProdutoNaoEncontrado";

export default function ListaProdutos() {
  const [produtos, setProdutos] = useState([]);
  useEffect(() => {
    const urlBase = process.env.NEXT_PUBLIC_API_URL;
    fetch(`${urlBase}/produtos`)
      .then((dados) => dados.json())
      .then((dados) => setProdutos(dados));
  }, []);

  if (produtos.length === 0) {
    return <ProdutoNaoEncontrado />;
  }

  return (
    <div
      className={`
      grid gap-5 grid-cols-1 
      sm:grid-cols-2 md:grid-cols-3 
      lg:grid-cols-4
    `}
    >
      {produtos.map((produto: Produto) => {
        return <ProdutoItem produto={produto} key={produto.id} />;
      })}
    </div>
  );
}
