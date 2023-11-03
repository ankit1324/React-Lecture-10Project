import { useEffect } from "react";
import { useState } from "react";

export const ProductList = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <section>
      {product.map((product) => (
        <div className="card" key={product.id}>
          <p className="id">{product.id}</p>
          <p className="Name">{product.name}</p>
          <p className="info">
            <span>${product.price}</span>
            <span className={product.in_stock ? "instock" : "unavailable"}>
              {product.in_stock ? "In Stock" : "Unavailable"}
            </span>
          </p>
        </div>
      ))}
    </section>
  );
};
