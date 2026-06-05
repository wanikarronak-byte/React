function Products({ products }) {
  return (
    <div className="products-container">
      {products.map((product) => (
        <div className="product-card" key={product.product_id}>
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
            onError={(e) => {
              e.target.src =
                "https://via.placeholder.com/220x220?text=No+Image";
            }}
          />

          <div className="product-info">
            <h2>{product.title}</h2>
            <p>{product.description}</p>

            <div className="price">₹{product.price}</div>

            <div className="delivery">
              🚚 Delivery: {product.delivery_date}
            </div>

            <button className="add-cart-btn">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;