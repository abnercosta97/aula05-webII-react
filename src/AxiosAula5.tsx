import axios from "axios";
import { useState } from "react";

export default function App() {
  const [cep, setCep] = useState("12243750");
  const [resposta, setResposta] = useState("");
  const url = `https://viacep.com.br/ws/${cep}/json/`;
  const [logradouro, setLogadouro] = useState("")
  const obter = () => {
    axios
      .get(url)
      //o conteúdo da resposta da requisição será colocada no objeto data,
      //por este motivo fez-se a desestruturação
      .then( r => {
        console.log(r);
        return r;
      })
      .then(({ data }) => {
        setResposta(JSON.stringify(data));
        setLogadouro(JSON.stringify(data.logradouro));
      });
  };
  return (
    <>
      <label>Nome</label>
      <input value={cep} onChange={(e) => setCep(e.target.value)} />
      <button onClick={obter}>Buscar</button>
      <div>{resposta}</div>
      <div>Logradouro: {logradouro}</div>
    </>
  );
} 