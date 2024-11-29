import Image from "next/image"
import file from "../../../public/ifpb-1.png"
export default function Cabecalho(){
    return (
        <div className="p-4">
            <Image src={file} alt={"imagem-if"} width={80}/>
        </div>
    )
}