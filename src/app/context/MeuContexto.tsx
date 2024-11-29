'use client'; // Necessário para o uso de hooks no App Router

import { createContext, ReactNode, useContext, useState } from 'react';
import lista from '@/db/db';
// Definição do tipo de contexto
export default interface Lista {
  id:number
  nome:string
  cardapio: string
  hora: string
  data:string
   confirmado: boolean
  status:string
}
interface MyContextType {
  cadastroOuLogin: boolean;
  CadastroOuLogin: () => void;
  listaArray:Lista[]
  
}
// Criação do contexto
const MeuContext = createContext<MyContextType|undefined>(undefined);

// Provider do contexto
export const MeuContextoProvider = ({ children }: { children: ReactNode }) => {
  const [cadastroOuLogin, setCadastroOuLogin] = useState<boolean>(true);
  const [listaArray, setListaArray] = useState(lista)
  // Função para alternar entre cadastro e login
  const CadastroOuLogin = () => {
    setCadastroOuLogin((prevState) => !prevState);
  };
  
  return (
    <MeuContext.Provider value={{ cadastroOuLogin, CadastroOuLogin, listaArray}}>
      {children}
    </MeuContext.Provider>
  );
};

// Hook para usar o contexto
export const useMyContext = () => {
  const context = useContext(MeuContext);
  if (!context) {
    throw new Error('Não existe contexto');
  }
  return context;
};
