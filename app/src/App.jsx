// OLD
import { useState } from "react";

// // NEW
// import { useState, useEffect } from "react";

import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import Products from "./components/Products";
import Header from "./components/Header";
//new
import ProductDetails from "./components/ProductDetails";

import "./App.css";

function App() {
  const navigate = useNavigate();

  // No persistence -> refresh = logged out
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [products, setProducts] = useState([]);


  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // OLD
      /*
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username.trim(),
          password: password.trim(),
        }),
      });

      const data = await response.json();
      */

      // NEW
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username.trim(),
          password: password.trim(),
        }),
      });

      const data = await response.json();

      if (data.success) {
        setIsLoggedIn(true);

        // OLD
        /*
        const res = await fetch("http://localhost:5000/products");
        const productData = await res.json();

        setProducts(productData.products);
        */

        // NEW
        const res = await fetch("http://localhost:5000/products");
        const productData = await res.json();

        setProducts(productData.products);

        navigate("/products");
      } else {
        alert("Invalid credentials");
      }
    } catch (err) {
      alert("Server error");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);

    setUsername("");
    setPassword("");
    setProducts([]);

    // OLD
    // navigate("/login");

    // NEW
    navigate("/");
  };

  return (
    <div className="app-container">
      <Header
        isLoggedIn={isLoggedIn}
        handleLogout={handleLogout}
      />

      <Routes>
        {/* OLD CODE */}
        {/*
        <Route
          path="/"
          element={<Navigate to="/login" />}
        />
        */}

        {/* NEW HOME PAGE */}
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        

        

        {/* LOGIN PAGE */}
        <Route
          path="/login"
          element={
            isLoggedIn ? (
              <Navigate to="/products" />
            ) : (
              <Login
                username={username}
                password={password}
                setUsername={setUsername}
                setPassword={setPassword}
                handleLogin={handleLogin}
              />
            )
          }
        />

        {/* PRODUCTS PAGE */}
        <Route
          path="/products"
          element={
            isLoggedIn ? (
              <Products products={products} />
            ) : (
              <>
                {/* OLD */}
                {/* <Navigate to="/" /> */}

                {/* NEW */}
                <Navigate to="/" replace />
              </>
            )
          }
        />

        

        {/* NEW FALLBACK ROUTE */}
        <Route
          path="*"
          element={
            <>
              {/* OLD */}
              {/* <Navigate to="/" /> */}

              {/* NEW */}
              <Navigate to="/" replace />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;