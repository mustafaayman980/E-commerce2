import React, { useContext } from "react";
import { CartContext } from "../../components/4-Context/CartContext";
import PageTransition from "../../components/6- Animation/PageTransition";

import Product from "../../components/3-slideproducts/Product";

function Favorites() {
  const {favorites} = useContext(CartContext);
  return (
    <PageTransition>
      <div className="category_product favorites">
        <div className="container">
          <div className="top-slide">
            <h2>your favorites</h2>
          </div>
          {favorites.length === 0 ? (
            <p>You have no favorite products yet ❤️</p>
          ) : (
            <div className="prod">
              {favorites.map((item) => (
                <Product item={item} key={item.id} />
              ))}
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  );
}

export default Favorites;
