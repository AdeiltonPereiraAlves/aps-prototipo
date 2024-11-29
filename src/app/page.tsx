'use client'

import { useState } from "react";
import { useMyContext } from "./context/MeuContexto";
import Form from "./components/Form";

export default function Home() {
  const [alunoOuFuncionario, setAlunoOuFucionario] = useState(false)
  const{CadastroOuLogin,cadastroOuLogin} = useMyContext()
  
  function ativar(){
    
    setAlunoOuFucionario(true)
  }
  function desativar(){
    
    setAlunoOuFucionario(false)
  }
 

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-1 sm:p-20 font-[family-name:var(--font-geist-sans)]">
       <div className="flex w-[300px] gap-4">
       {cadastroOuLogin? <button onClick={()=>CadastroOuLogin()}>Login</button>:<button onClick={()=>CadastroOuLogin()}>cadastrar</button>}
      

       <button onClick={()=>ativar()}>Aluno</button>
       <button onClick={()=>desativar()}>Funcionario</button>
       </div>
       <Form alunoOuFuncionario= {alunoOuFuncionario} cadastroOuLogin={cadastroOuLogin}/>
    </div>
  );
}
