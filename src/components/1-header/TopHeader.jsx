import React, { useContext } from "react";
import { Form, Link } from "react-router";
import Logo from "../../img/logo.png";
import { IoSearchSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import "./header.css";
import { CartContext } from "../4-Context/CartContext";
function TopHeader() {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="top-header">
      <div className="container">
        <Link className="logo" to="/">
          <img src={Logo} alt="Logo" />
        </Link>

        <form action="" className="search_box">
          <input
            type="text"
            placeholder="search for products"
            name="search"
            id="search"
          />
          <button type="submit">
            <IoSearchSharp />
          </button>
        </form>
        <div className="header_icons">
          <div className="icon">
            <FaRegHeart />
            <span className="count">0</span>
          </div>
          <div className="header_icons">
            <div className="icon">
              <FaShoppingCart />
              <span className="count">{cartItems.length}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
