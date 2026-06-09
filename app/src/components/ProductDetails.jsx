import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("API RESPONSE:", data);
  
        if (data.success) {
          setProduct(data.product);
        } else {
          console.log("API Error:", data.message);
        }
      })
      .catch((err) => {
        console.log("Fetch Error:", err);
      });
  }, [id]);
  if (!product) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="product-details">
      <img
        src={product.image}
        alt={product.title}
        width="400"
      />

      <h1>{product.title}</h1>

      <h2>₹{product.price}</h2>

      <p>{product.description}</p>

      <p>
        Delivery Date: {product.delivery_date}
      </p>

      <button>Add To Cart</button>
    </div>
  );
}

export default ProductDetails;