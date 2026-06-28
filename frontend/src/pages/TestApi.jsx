import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";

function TestApi() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const data = await getProducts();
      setProducts(data);
    }

    loadProducts();
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h1>Products</h1>

      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            marginBottom: "20px",
          }}
        >
          <img
            src={product.image_url}
            alt={product.name}
            width="200"
          />

          <h2>{product.name}</h2>

          <p>{product.description}</p>

          <h3>₹ {product.price}</h3>

          <p>Stock: {product.stock}</p>

          <p>Category: {product.category_name}</p>
        </div>
      ))}
    </div>
  );
}

export default TestApi;