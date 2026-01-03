import React, { useEffect, useState } from "react";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import { data, useParams } from "react-router";
import "./ProductDetails.css";
import { FaRegHeart, FaShare, FaShoppingCart } from "react-icons/fa";
import SlidProduct from "../../components/3-slideproducts/SlidProduct";
import Loading from "../Loading/Loading";
function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relateProduct, setRelateProduct] = useState([]);
  const [relateProductLoading, setRelateProductLoading] = useState(true);
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
  console.log("====================================");
  console.log(product);
  console.log(relateProduct);
  console.log("====================================");
  if (loading) return <Loading /> ;
  if (!product) return <p>product not found.....</p>;

  return (
    
    <div>
      <div className="item_details">
        <div className="container">
          <div className="imgs">
            <div className="bag_img">
              <img id="bag_img" src={product.images[0]} alt={product.title} />
            </div>
            <div className="small_img">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={product.title}
                  onClick={() => (document.getElementById("bag_img").src=img)}
                />
              ))}
            </div>
          </div>
          <div className="details">
            <h1 className="name">{product.title}</h1>
            <div className="stars">
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStarHalf />
            </div>
            <p className="price">$ {product.price}</p>
            <h5>
              Availability: <span>{product.availabilityStatus}</span>
            </h5>
            <h5>
              Brand: <span>{product.brand}</span>{" "}
            </h5>
            <p className="desc">{product.description}</p>
            <h5 className="stock">
              <span>Hurry up! only {product.stock} products left in stock</span>
            </h5>

            <button className="btn">
              Add to cart <FaShoppingCart />
            </button>
            <div className="icons">
              <span>
                <FaRegHeart />
              </span>
              <span>
                <FaShare />
              </span>
            </div>
          </div>
        </div>
      </div>
      {relateProductLoading ? (
        <p> loading...........</p>
      ) : (
        <SlidProduct
          key={product.category}
          data={relateProduct}
          title={product.category.replace("-", " ")}
        />
      )}
    </div>
  );
}

export default ProductDetails;
