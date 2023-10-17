import styled from "styled-components";

export default function App(){
  return(
    <div>
      <BlocoSld>
        <TextoSld cor="blue" tam="16px">Olá Mundo!</TextoSld>
        <TextoSld cor="orange" tam="16px">Bom Dia</TextoSld>
        <TextoSld cor="yellow" tam="16px">Boa Tarde</TextoSld>
        <TextoSld cor="black" tam="16px">Boa Noite</TextoSld>
      </BlocoSld>
    </div>
  );
}

const BlocoSld = styled.div`
  background-color: #277ac7;
`;

const TextoSld = styled.p<Props>`
  color: ${ props => props.cor};
  font-size: ${ props => props.tam};
  font-family: 'Courier New', Courier, monospace;
`;

interface Props {
  cor: string;
  tam: string;
}