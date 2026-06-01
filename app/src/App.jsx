import { useState } from "react";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Login Successful");
        console.log(data);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Server Error");
    }
  };

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
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) =>
                setUsername(e.target.value)
              }
            />
          </div>

          <br />

          <div>
            <label>Password:</label>
            <br />
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />
          </div>

          <br />

          <button onClick={login}>
            Login
          </button>
        </div>
      )}
    </div>
  );
}

export default App;