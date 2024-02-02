import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <p>Home</p>
      <button onClick={() => navigate("/perfil")}>Perfil</button>
    </div>
  );
}

export default Home;
