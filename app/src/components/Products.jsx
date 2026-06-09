//new
import { useNavigate } from "react-router-dom";

function Products({ products }) {
  //new
  const navigate = useNavigate();


  return (
    <div className="products-container">
      {products.map((product, index) => (
        <div
          className="product-card"
          key={product.product_id || product.id || index}
          style={{ cursor: "pointer" }}
          //OlD
          // onClick={() => alert(product.title)}

          //New
          onClick={() =>
            navigate(`/product/${product.product_id || product.id}`)
          }

        >
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

            <div className="price">
              ₹{product.price}
            </div>

            <div className="delivery">
              🚚 Delivery: {product.delivery_date}
            </div>

            <button
              className="add-cart-btn"
              onClick={(e) => {
                e.stopPropagation();
                alert(`${product.title} added to cart`);
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;