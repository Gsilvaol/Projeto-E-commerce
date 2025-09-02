"use client";
import ProdutoItem from "@/components/produto/ProdutoItem";
import { useEffect, useState } from "react";

export default function Home() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const urlBase = process.env.NEXT_PUBLIC_API_URL;
    fetch(`${urlBase}/produtos`)
      .then((dados) => dados.json())
      .then((dados) => setProdutos(dados));
  }, []);

  return (
    <div>
      {produtos.map((produto: any) => {
        return (
          <ProdutoItem produto={produto}/>
        );
      })}
    </div>
  );
}
