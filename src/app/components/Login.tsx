import { useState } from "react";

export default function Login(){
    const [email, setEmail] = useState("")
    const [senha , setSenha] = useState("")
    return (
        <div>
            <h4>Login</h4>
            <div className="flex flex-col">
                <label >Email:</label>
                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label >Senha:</label>
                <input type="password" name="senha" value={senha} onChange={(e) => setSenha(e.target.value)}/>
            </div>
        </div>
    )
}