import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Perfil from "./pages/Perfil";
import InserirUsuario from "./pages/InserirUsuario";
import DeletarUsuario from "./pages/DeletarUsuario";
import EditarUsuario from "./pages/EditarUsuario";

function AppRoutes() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/perfil" element={<Perfil/>}/>
        <Route exact path="/insert" element={<InserirUsuario/>}/>
        <Route exact path="/delete" element={<DeletarUsuario/>}/>
        <Route exact path="/put" element={<EditarUsuario/>}/>
      </Routes>
    </HashRouter>
  );
}

export default AppRoutes;
