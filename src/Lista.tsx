import { useState } from "react";
import Entrada from "./Entrada";
import Saida from "./Saida";
import Contexto from "./Contexto";

export default function Lista() {
  const [lista, setLista] = useState([] as string[]);
    
  function add(nome:string){
      const temp = [...lista,nome];
      setLista(temp);
    }

  return (
    <Contexto.Provider value={{lista, add}} >
      <Entrada />
      <Saida  />
    </Contexto.Provider>
  );
}