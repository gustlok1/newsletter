import axios from "axios";
import { useEffect, useState } from "react";
function Perfil() {
  const [usuarios, setUsuarios] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((response) => setUsuarios(response.data))
      .catch((error) => console.error(error));
  });
  return (
    <div>
      <p>
        Perfil
        {usuarios?.map((usuario, index) => (
          <div key={index}>
            <p>{usuario.nome}</p>
            <p>{usuario.email}</p>
          </div>
        ))}
      </p>
    </div>
  );
}

export default Perfil;
