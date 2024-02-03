import { useState } from "react";
import axios from "axios";

function DeletarUsuario() {
  const [id, setId] = useState();
  const [placeholderId, setplaceholderId] = useState("");
  function Deletar() {
    if (id <= 1 || id == null) {
      setplaceholderId("Digite o Id");
    } else {
      axios
        .delete(`http://localhost:3000/users/${id}`)
        .then(() => alert("usuario deletado"))
        .catch((err) => {
          alert(err);
        });
    }
  }
  return (
    <div>
      <p>deletar usuario</p>
      <label htmlFor="id">
        id: <br />
        <input
          id="id"
          type="number"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder={placeholderId}
          onFocus={() => setplaceholderId("")}
          
        />
      </label>
      <br />
      <button onClick={Deletar} className="bg-black p-2 text-white rounded-lg hover:opacity-70 active:translate-y-1 ">deletar</button>
    </div>
  );
}

export default DeletarUsuario;
