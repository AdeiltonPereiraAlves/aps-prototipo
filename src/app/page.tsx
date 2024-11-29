"use client";

import { useState } from "react";
import { useMyContext } from "./context/MeuContexto";
import Form from "./components/Form";
import Cabecalho from "./components/Cabecalho";

export default function Home() {
  const [alunoOuFuncionario, setAlunoOuFucionario] = useState(false);
  const { CadastroOuLogin, cadastroOuLogin } = useMyContext();

  function ativar() {
    setAlunoOuFucionario(true);
  }
  function desativar(){
    setAlunoOuFucionario(false)
  }

  return (
    <div className="flex flex-col  ">
      <div className="w-full h-[100px] ">
        <Cabecalho />
      </div>
      <div className="flex items-center justify-center flex-col w-full h-full mt-20">
        <div className="flex py-2 w-[500px] gap-4 items-center justify-center">
          <div className="w-auto">
            <span>Cadastre-se como: </span>
            <button onClick={() => ativar() } className="text-[#18852B] gap-2"> Aluno</button>
            <span className="mx-1">Ou</span>
            <button onClick={() => desativar()} className="text-[#18852B]">Funcionario</button>
          </div>
        </div>
        <div className="bg-[#EDEFF1] w-[320px] h-[350px] p-10 rounded-md shadow-md">
          {cadastroOuLogin ? (
           <div>
            <span>Já tem uma conta?</span>
            <button onClick={() => CadastroOuLogin()} className="text-[#18854B]">Login</button>
           </div>
          ) : (
            <div className="">

              <span>Não tem uma conta?</span>
              <button onClick={() => CadastroOuLogin()} className="text-[#18854B]">Cadastre-se</button>
            </div>
          )}
          <Form
            alunoOuFuncionario={alunoOuFuncionario}
            cadastroOuLogin={cadastroOuLogin}
          />
        </div>
      </div>
    </div>
  );
}
