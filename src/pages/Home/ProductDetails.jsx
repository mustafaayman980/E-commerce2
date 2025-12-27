import React, { useEffect, useState } from "react";
import { data, useParams } from "react-router";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log(id);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("fetch error", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);
  console.log("====================================");
  console.log(product);
  console.log("====================================");
//   if (loading) return <p>loading.....</p>;
  if (!product) return <p>product not found.....</p>;

  return <div>{loading ? <p>loading.....</p> : <h2>{product.title}</h2>}</div>;
}

export default ProductDetails;
