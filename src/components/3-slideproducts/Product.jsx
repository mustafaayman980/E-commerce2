import React from "react";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";

import { FaCartArrowDown, FaRegHeart, FaShare } from "react-icons/fa";
import { Link } from "react-router";
import ProductDetails from "../../pages/ProductDetails/ProductDetails";
function Product({item}) {
    // console.log(item);
    
  return (
    <Link to={`products/${item.id}`} className="product">
      <div className="card">
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
        <div className="icons">
          <span>
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
    </Link>
  );
}

export default Product;
