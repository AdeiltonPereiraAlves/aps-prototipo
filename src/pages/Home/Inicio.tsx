'use client'

import Listar from "@/app/components/Lista"
import { MeuContextoProvider } from "@/app/context/MeuContexto"
export default function Tela(){
    return(
        <div>

            Pagina da lista de almoço
            <MeuContextoProvider>
            <Listar/>
            </MeuContextoProvider>
        </div>
    )
}