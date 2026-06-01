import { useState } from "react";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      {!showLogin ? (
        <>
          <h1>Welcome to My App</h1>
          <button onClick={() => setShowLogin(true)}>
            Sign In
          </button>
        </>
      ) : (
        <div>
          <h2>Login Page</h2>

          <div>
            <label>Username:</label>
            <br />
            <input type="text" placeholder="Enter username" />
          </div>

          <br />

          <div>
            <label>Password:</label>
            <br />
            <input type="password" placeholder="Enter password" />
          </div>

          <br />

          <button>Login</button>
        </div>
      )}
    </div>
  );
}

export default App;