"use client"
import { useEffect, useState, use } from "react";

export default function PaginaProduto(props:any){
    const { id }: { id: string } = use (props.params)

    const [produto, setProduto] = useState(null);
      useEffect(() => {
        const urlBase = process.env.NEXT_PUBLIC_API_URL;
        fetch(`${urlBase}/produtos/${id}`)
          .then((dados) => dados.json())
          .then((dados) => setProduto(dados));
      }, []);

    return(
        <div>{JSON.stringify(produto)}</div>
    )
}