import React, { useContext } from "react";
import { FaRegHeart, FaShare, FaShoppingCart } from "react-icons/fa";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import { CartContext } from "../../components/4-Context/CartContext";
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router";

function ProductContact({ product }) {
  const { cartItems, addToCart, addToFavorites, favorites, removeFromFav } =
    useContext(CartContext);
  const navigate = useNavigate();
  const isInCart = cartItems.some((i) => i.id === product.id);
  const handleAddToCart = () => {
    addToCart(product);
    toast.success(
      <div className="toast-wrapper">
        <img
          src={product.images[0]}
          alt={product.title}
          className="img-toast"
        />
        <div className="toast-contact">
          <strong>{product.title}</strong>
          Added to Cart
          <div>
            <button className="btn" onClick={() => navigate("/cart")}>
              View Cart
            </button>
          </div>
        </div>
      </div>,
      { duration: 5000 },
    );
    
  };

  const isInFav = favorites.some((i) => i.id === product.id);
  const handleToFav = () => {
    if (isInFav) {
      removeFromFav(product.id);
      toast.error(`${product.title} removed from favorites`);
    } else {
      addToFavorites(product);
      toast.success(`${product.title} added to favorites`);
    }
  };

  return (
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

      <button
        className={`btn  ${isInCart ? "in-cart" : " "}`}
        onClick={handleAddToCart}
      >
        {isInCart ? "item in Cart" : "Add to cart"} <FaShoppingCart />
      </button>
      <div className="icons">
        <span className={`${isInFav ? "in-fav" : ""} `} onClick={handleToFav}>
          <FaRegHeart />
        </span>
        <span>
          <FaShare />
        </span>
      </div>
    </div>
  );
}

export default ProductContact;
