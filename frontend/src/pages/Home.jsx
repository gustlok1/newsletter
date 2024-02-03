import { useNavigate } from "react-router-dom";
import Perfil from "./Perfil";
import InserirUsuario from "./InserirUsuario";
import DeletarUsuario from "./DeletarUsuario";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <p>Home</p>
      <hr />
      <div className="border-2 border-black">
        <h1>Perfil</h1>
        <Perfil />
      </div>
      <hr />

      <div className="border-b-2 border-black">
        <h1>Perfil</h1>
        <InserirUsuario />
      </div>
      <hr />

      <div className="border-b-2 border-black">
        <h1>Perfil</h1>
        <DeletarUsuario />
      </div>
    </div>
  );
}

export default Home;
