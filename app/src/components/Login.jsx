function Login({
  username,
  password,
  setUsername,
  setPassword,
  handleLogin,
  setShowLoginPage,
}) {
  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <h2>Login Page</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /><br />

        <input type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
<br/>
        <button type="submit">Login</button>
        <button
          type="button"
          onClick={() => setShowLoginPage(false)}
        >
          Back
        </button>
      </form>
    </div>
  );
}

export default Login;