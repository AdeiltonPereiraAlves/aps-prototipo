/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Login from "./Login";
export default function Form(props: any) {
  const { alunoOuFuncionario, cadastroOuLogin } = props;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [matricula, setMatricula] = useState("");
  const [senha, setSenha] = useState("");
  const router = useRouter();
  const handleCadastro = () => {
    // Validação simples dos campos
    if (!name || !email || !senha || (alunoOuFuncionario && !matricula)) {
      alert("Por favor, preencha todos os campos!");
      return;
    }
    setEmail("");
    setSenha("");
    setMatricula("");
    setName("");

    // Redireciona para a página "Tela"
    router.push("/Paginas/Home");
  };

  return cadastroOuLogin ? (
    <div>
     
      <div className="flex flex-col ">
        <label>Nome</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {alunoOuFuncionario ? (
          <>
            <label>Matricula:</label>
            <input
              type="text"
              value={matricula}
              onChange={(e) => setMatricula(e.target.value)}
            />
          </>
        ) : (
          ""
        )}

        <label>Senha:</label>
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
      </div>
      <div className="flex w-full items-center justify-center mt-4 ">
        <button onClick={handleCadastro} className="bg-[#18852B] p-2 w-[300px] text-white hover:bg-[#25a139]">
          Cadastre-se
        </button>
      </div>
    </div>
  ) : (
    <Login />
  );
}
