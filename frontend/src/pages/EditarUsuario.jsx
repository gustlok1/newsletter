import { useState } from "react";
import axios from "axios";

function EditarUsuario() {
  const [id, setId] = useState("");
  const [nome, setName] = useState("");
  const [email, setEmail] = useState("");

  function Editar(){
    const body = {nome, email}
    axios.put(`http://localhost:3000/users/${id}`, body)
    .then(() => {alert("Usuário Alterado")})
    .catch((err) => {alert(err)})
 }

  return (
    <div className="momman">
        <p>Id do Usuário: </p>
        <br />
      <input
        value={id}
        onChange={(txt) => {
          setId(txt.target.value);
        }}
        type="number"
        className="bg-zinc-200 p-2"
      />
      <p>Nome do Usuário: </p>
      <br />
      <input
        value={nome}
        onChange={(txt) => {
          setName(txt.target.value);
        }}
        type="text"
        className="bg-zinc-200 p-2"
      />
      <p>Email do Usuário: </p>
      <br />
      <input
        value={email}
        onChange={(txt) => {
          setEmail(txt.target.value);
        }}
        type="text"
        className="bg-zinc-200 p-2"
      />
    <br />
    <button onClick={Editar} className="bg-black p-2 text-white rounded-lg hover:opacity-70 active:translate-y-1 ">Enviar</button>
    </div>
  );
}

export default EditarUsuario;
