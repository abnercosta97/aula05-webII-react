import { useState } from "react";

export default function App() {
  const [nome, setNome] = useState("");
  const [lista, setLista] = useState([] as string[]);


  function add(){
    const temp = [...lista,nome];
    setLista(temp);
  }

  return (
    <div>
    <div>
      <label>Nome</label>
      <input value={nome} onChange={(e)=> setNome(e.target.value) } />
      <button onClick={add}>Salvar</button>
    </div>


    {
      lista.length>0 &&
      <div>
        <p>Quantidade : {lista.length} </p>
        <ol>
          {
            lista.map((item,i) => <li key={i} >{item}</li>)
          }
        </ol>
      </div>
    }

    </div>
  );
}