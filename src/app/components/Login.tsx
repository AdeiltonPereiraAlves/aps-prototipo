import { useState } from "react";
import { useRouter } from "next/navigation"
export default function Login(){
    const [email, setEmail] = useState<string>("")
    const [senha , setSenha] = useState<string>("")
    const router = useRouter()
    return (
        <div>
           
            <div className="flex flex-col">
                <label >Email:</label>
                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label >Senha:</label>
                <input type="password" name="senha" value={senha} onChange={(e) => setSenha(e.target.value)}/>
            </div>
            <div className="flex w-full items-center justify-center mt-4 ">
            <button onClick={()=> router.push('/Paginas/Home')} className="bg-[#18852B] p-2 w-[300px] text-white hover:bg-[#25a139]">Login</button>
            </div>
            
        </div>
    )
}