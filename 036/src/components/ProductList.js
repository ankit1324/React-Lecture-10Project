import { useEffect } from "react";
import { useState } from "react";

export const ProductList = () => {
  const [product, setProduct] = useState([]);
  const [url, setUrl] = useState("http://localhost:8000/products");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [url]);

  useEffect(() => {
    console.log(counter);
  }, [counter]);

  return (
    <section>
      <div className="filter">
        <button onClick={() => setCounter(counter + 1)}>{counter}</button>
        <button onClick={() => setUrl("http://localhost:8000/products")}>
          All
        </button>
        <button
          onClick={() => setUrl("http://localhost:8000/products?in_stock=true")}
        >
          In Stock Only
        </button>
      </div>
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
