import { useContext } from "react";
import contexto from "./Contexto";

export default function Saida() {
  const {lista} = useContext(contexto);

    return (
      <div>
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
