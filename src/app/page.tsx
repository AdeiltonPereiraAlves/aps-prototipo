"use client";

import { useState } from "react";
import { useMyContext } from "./context/MeuContexto";
import Form from "./components/Form";
import Cabecalho from "./components/Cabecalho";

export default function Home() {
  const [alunoOuFuncionario, setAlunoOuFucionario] = useState(false);
  const { CadastroOuLogin, cadastroOuLogin } = useMyContext();

  function ativar() {
    setAlunoOuFucionario((falso) => !falso);
  }

  return (
    <div className="flex flex-col  ">
      <div className="w-full h-[100px] ">
        <Cabecalho />
      </div>
      <div className="flex items-center justify-center flex-col w-full h-full mt-20">
        <div className="flex w-[300px] gap-4">
          {cadastroOuLogin ? (
            <button onClick={() => CadastroOuLogin()}>Login</button>
          ) : (
            <button onClick={() => CadastroOuLogin()}>cadastrar</button>
          )}

          <button onClick={() => ativar()}>Aluno</button>
          <button onClick={() => ativar()}>Funcionario</button>
        </div>
        <div className="bg-[#EDEFF1] w-[300px] h-[300px] p-10 rounded-md">
          <Form
            alunoOuFuncionario={alunoOuFuncionario}
            cadastroOuLogin={cadastroOuLogin}
          />
        </div>
      </div>
    </div>
  );
}
