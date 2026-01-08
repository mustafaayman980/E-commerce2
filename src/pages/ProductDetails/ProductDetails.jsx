import React, { useEffect, useState } from "react";

import { data, useParams } from "react-router";
import "./ProductDetails.css";

import SlidProduct from "../../components/3-slideproducts/SlidProduct";
import Loading from "../Loading/Loading";
import ProductImgs from "./ProductImgs";
import ProductContact from "./ProductContact";
import PageTransition from "../../components/6- Animation/PageTransition";
function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relateProduct, setRelateProduct] = useState([]);
  const [relateProductLoading, setRelateProductLoading] = useState(true);
  console.log(product);
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
  useEffect(() => {
    if (!product) return;
    fetch(`https://dummyjson.com/products/category/${product.category}`)
      .then((res) => res.json())
      .then((data) => {
        setRelateProduct(data.products);
      })
      .catch((error) => console.error(error))
      .finally(() => setRelateProductLoading(false));
  }, [product?.category]);
  if (loading) return <Loading />;
  if (!product) return <p>product not found.....</p>;

  return (
    <PageTransition key={id}>
      <div>
        {loading ? (
          <Loading />
        ) : (
          <div className="item_details">
            <div className="container">
              <ProductImgs product={product} />
              <ProductContact product={product} />
            </div>
          </div>
        )}

        {relateProductLoading ? (
          <Loading />
        ) : (
          <SlidProduct
            key={product.category}
            data={relateProduct}
            title={product.category.replace("-", " ")}
          />
        )}
      </div>
    </PageTransition>
  );
}

export default ProductDetails;
