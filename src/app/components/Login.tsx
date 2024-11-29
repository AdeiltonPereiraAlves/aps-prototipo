import { useState } from "react";
import { useRouter } from "next/navigation"
export default function Login(){
    const [email, setEmail] = useState<string>("")
    const [senha , setSenha] = useState<string>("")
    const router = useRouter()
    return (
        <div>
            <h4>Login</h4>
            <div className="flex flex-col">
                <label >Email:</label>
                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label >Senha:</label>
                <input type="password" name="senha" value={senha} onChange={(e) => setSenha(e.target.value)}/>
            </div>
            <button onClick={()=> router.push('/Home/Inicio')}>Login</button>
        </div>
    )
}