import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Perfil from "./pages/Perfil";

function AppRoutes() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/perfil" element={<Perfil/>}/>
      </Routes>
    </HashRouter>
  );
}

export default AppRoutes;
