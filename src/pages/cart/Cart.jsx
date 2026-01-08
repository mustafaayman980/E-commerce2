import React, { useContext } from "react";
import { CartContext } from "../../components/4-Context/CartContext";
import { FaTrashAlt } from "react-icons/fa";
import "./cart.css";
import PageTransition from "../../components/6- Animation/PageTransition";
function Cart() {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } =
    useContext(CartContext);
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  console.log("====================================");
  console.log(cartItems);
  console.log("====================================");
  return (
    <PageTransition>
      <div className="checkOut">
        <div className="orderSummary">
          <h1>Order Summary</h1>
          <div className="items">
            {cartItems.length === 0 ? (
              <p> your cart is empty.</p>
            ) : (
              cartItems.map((items, index) => (
                <div className="item-cart" key={index}>
                  <div className="image-name">
                    <img src={items.images[0]} alt={items.title} />
                    <div className="contact">
                      <h4>{items.title}</h4>
                      <p className="price-item">$ {items.price}</p>
                      <div className="quantity-control">
                        <button onClick={() => decreaseQuantity(items.id)}>
                          -
                        </button>
                        <span className="quantity">{items.quantity}</span>
                        <button onClick={() => increaseQuantity(items.id)}>
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(items.id)}
                    className="delete-item"
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              ))
            )}
          </div>
          <div className="bottom-summary">
            <div className="shop-table">
              <p>Total:</p>
              <span className="total-price">$ {total.toFixed(2)}</span>
            </div>
            <div className="place-button">
              <button type="submit">place Order</button>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

export default Cart;
