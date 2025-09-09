import { IconDevicesPcOff } from "@tabler/icons-react";

export default function ProdutoNaoEncontrado(){
    return(
        <div className="flex-1 flex flex-col justify-center items-center text-violet-300">
            <IconDevicesPcOff size={300} stroke={0.3} />
            <span className="text-violet-300 font-light text-xl">Produto não encontrado</span>
        </div>
    )
}