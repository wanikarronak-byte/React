function Home({ setShowLoginPage }) {
  return (
    <div className="home-container">
      <h2>Welcome to Electronic Store</h2>

      <button
        className="signin-btn"
        onClick={() => setShowLoginPage(true)}
      >
        Sign In
      </button>
    </div>
  );
}

export default Home;