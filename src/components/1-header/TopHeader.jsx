import React, { useContext } from "react";
import { Form, Link } from "react-router";
import Logo from "../../img/logo.png";

import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import "./header.css";
import { CartContext } from "../4-Context/CartContext";
import Search from "../../pages/Search/Search";
function TopHeader() {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="top-header">
      <div className="container">
        <Link className="logo" to="/">
          <img src={Logo} alt="Logo" />
        </Link>

        <Search />
        <div className="header_icons">
          <div className="icon">
            <FaRegHeart />
            <span className="count">0</span>
          </div>
          <div className="icon">
            <Link to="/cart">
              <FaShoppingCart />
              <span className="count">{cartItems.length}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
