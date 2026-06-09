import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h2>Welcome to Electronic Store</h2>

      <button
        className="signin-btn"
        onClick={() => navigate("/login")}
      >
        Sign In
      </button>
    </div>
  );
}

export default Home;