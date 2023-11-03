import { useEffect } from "react";
import { useState } from "react";

export const ProductList = () => {
  const [product, setProduct] = useState([]);
  console.log(product);

  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);

  return <div>ProductList</div>;
};
