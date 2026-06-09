import { useNavigate } from "react-router-dom";

function Login({
  username,
  password,
  setUsername,
  setPassword,
  handleLogin,
}) {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <h2>Login Page</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        <button type="submit">Login</button>

        <button
          type="button"
          onClick={() => navigate("/")}
        >
          Back
        </button>
      </form>
    </div>
  );
}

export default Login;