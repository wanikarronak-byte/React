import { useState } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Products from "./components/Products";
import Header from "./components/Header";

import "./App.css";

function App() {
  const [showLoginPage, setShowLoginPage] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [products, setProducts] = useState([]);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username.trim(),
          password: password.trim(),
        }),
      });

      const data = await response.json();

      if (data.success) {
        setIsLoggedIn(true);

        const res = await fetch("http://localhost:5000/products");
        const productData = await res.json();

        setProducts(productData.products);
      } else {
        alert("Invalid credentials");
      }
    } catch (err) {
      alert("Server error");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowLoginPage(false);
    setUsername("");
    setPassword("");
    setProducts([]);
  };

  return (
    <div className="app-container">

      <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} />

      {!showLoginPage && !isLoggedIn && (
        <Home setShowLoginPage={setShowLoginPage} />
      )}

      {showLoginPage && !isLoggedIn && (
        <Login
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
          handleLogin={handleLogin}
          setShowLoginPage={setShowLoginPage}
        />
      )}

      {isLoggedIn && <Products products={products} />}

    </div>
  );
}

export default App;