import React from "react";

function ProductImgs({product}) {
  return (
    
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
              onClick={() => (document.getElementById("bag_img").src = img)}
            />
          ))}
        </div>
      </div>
    
  );
}

export default ProductImgs;
