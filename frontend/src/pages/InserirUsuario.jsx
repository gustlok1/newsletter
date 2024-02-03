import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function InserirUsuario() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [placeholderUser, setPlaceholderUser] = useState("");
  const [placeholderEmail, setPlaceholderEmail] = useState("");

  function Cadastrar() {
    if (nome === "" && email === "") {
      setPlaceholderUser("preencha essse campo..");
      setPlaceholderEmail("preencha essse campo..");
      return;
    } else if (nome === "") {
      setPlaceholderUser("preencha essse campo..");
      return;
    } else if (email === "") {
      setPlaceholderEmail("preencha essse campo..");
      return;
    } else {
      const body = { nome, email };

      axios
        .post("http://localhost:3000/users", body)
        .then(() => alert("usuario cadastrado"))
        .catch((err) => alert(err));
    }
  }

  return (
    <div>
      <p>Inserir usuário</p>
      <br />
      <label htmlFor="nome">
        Nome
        <br />
        <input
          id="nome"
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="bg-zinc-200 p-2"
          placeholder={placeholderUser}
          onFocus={() => setPlaceholderUser("")}
        />
      </label>
      <br />
      <label htmlFor="email">
        Email
        <br />
        <input
          id="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-zinc-200 p-2"
          placeholder={placeholderEmail}
          onFocus={() => setPlaceholderEmail("")}
        />
      </label>
      <br />
      <button
        onClick={Cadastrar}
        className="bg-black p-2 text-white rounded-lg hover:opacity-70 active:translate-y-1 "
      >
        Cadastrar
      </button>
      <br />
      <button onClick={() => navigate("/perfil")}>perfil</button>
    </div>
  );
}

export default InserirUsuario;
