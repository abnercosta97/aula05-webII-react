import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="*" element={<Erro />} />
        <Route path="matutino" element={<Manha />} />
        <Route path="vespertino" element={<Tarde />} />
        <Route path="noturno" element={<Noite />} />
      </Routes>
    </BrowserRouter>
  );
}

function Manha() {
  return <div>bom dia</div>;
}
function Tarde() {
  return <div>boa tarde</div>;
}
function Noite() {
  return <div>boa noite</div>;
}
function Erro() {
  return <div>Rota inexistente</div>;
}
function Menu() {
  return (
    <div>
      <Link to="matutino">Manhã</Link>
      <Link to="vespertino">Tarde</Link>
      <Link to="noturno">Noite</Link>
    </div>
  );
}
