import { useContext, useState } from "react";
import contexto from "./Contexto";

export default function Entrada(){
    const {add} = useContext(contexto);
    const [nome, setNome] = useState("");

    return(
    <div>
      <label>Nome</label>
      <input value={nome} onChange={(e)=> setNome(e.target.value) } />
      <button onClick={()=> add(nome)}>Salvar</button>
    </div>
    );
}