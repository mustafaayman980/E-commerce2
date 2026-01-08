import React from "react";
import Product from "./Product";
import "./slidProduct.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
function SlidProduct({ data, title }) {
  // console.log(data);

  return (
    <div className="slide_product  slide">
      <div className="container">
        <div className="top-slide">
          <h2>{title}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            fuga.
          </p>
        </div>
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          slidesPerView={5}
          navigation={true}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          {data.map((item) => {
            return (
              <SwiperSlide>
                <Product item={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default SlidProduct;
