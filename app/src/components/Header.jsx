import { Link } from "react-router-dom";

function Header({ isLoggedIn, handleLogout }) {
  return (
    <header className="app-header">
      <h1>Electronic Store</h1>

      {/*
      <nav className="nav-links">

        {!isLoggedIn ? (
          <Link to="/login">Login</Link>
        ) : (
          <>
            <Link to="/products">Products</Link>
          </>
        )}

      </nav>
      */}

      {isLoggedIn && (
        <button
          onClick={handleLogout}
          className="logout-btn"
        >
          Logout
        </button>
      )}
    </header>
  );
}

export default Header;