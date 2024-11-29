import Lista, { useMyContext } from "@/app/context/MeuContexto"


export default function ListaAlmoco(){
     const{listaArray} = useMyContext()

     function listar():Lista[]{
        return listaArray
     }
    
    return{
          listar,
    }
}