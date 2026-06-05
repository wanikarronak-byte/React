function Header({ isLoggedIn, handleLogout }) {
  return (
    <header className="app-header">
      <h1>Electronic Store</h1>

      {isLoggedIn && (
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      )}
    </header>
  );
}

export default Header;