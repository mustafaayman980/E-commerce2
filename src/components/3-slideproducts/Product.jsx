import React, { useContext } from "react";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";

import { FaCartArrowDown, FaRegHeart, FaShare } from "react-icons/fa";
import { Link } from "react-router";
import ProductDetails from "../../pages/ProductDetails/ProductDetails";
import { CartContext } from "../4-Context/CartContext";
function Product({ item }) {
  const { cartItems, addToCart } = useContext(CartContext);
  console.log(cartItems);
  const isInCart = cartItems.some(i => i.id === item.id);

  return (
    <div className={`product ${isInCart ? "in-cart" : " "}`}>
      <Link to={`products/${item.id}`}>
        <div className="card">
          <span className="status-cart">
            <FaCheckCircle />
            in cart
          </span>
          <div className="img-product">
            <img src={item.images[0]} alt="imgProduct" />
          </div>
          <p className="name-product"> {item.title}</p>
          <p className="description">{item.description}</p>
          <div className="stars">
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStarHalf />
          </div>
          <p className="price">
            <span>{`$ ${item.price}`}</span>{" "}
          </p>
        </div>
      </Link>
      <div className="icons">
        <span className="add-to-cart" onClick={() => addToCart(item)}>
          <FaCartArrowDown />
        </span>
        <span>
          <FaRegHeart />
        </span>
        <span>
          <FaShare />
        </span>
      </div>
    </div>
  );
}

export default Product;
