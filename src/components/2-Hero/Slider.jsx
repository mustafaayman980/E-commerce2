import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router";
import img1 from "../../../src/img/banner_Hero1.jpg";
import img2 from "../../../src/img/banner_Hero2.jpg";
import img3 from "../../../src/img/banner_Hero3.jpg";

function Slider() {
  return (
    <div className="hero">
      <div className="container">
        <Swiper
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={true}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="content">
              <h4>introducing the new </h4>
              <h3>
                MicroSoft Xbox <br /> 360 controller
              </h3>
              <p>windows Xp/10/7/8/ps3, tv box</p>
              <Link to="/" className="btn">
                shop now
              </Link>
            </div>
            <img src={img1} alt="slider" />
          </SwiperSlide>
          <SwiperSlide>
            <div className="content">
              <h4>introducing the new </h4>
              <h3>MicroSoft Xbox</h3>
              <p>windows Xp/10/7/8/ps3, tv box</p>
              <Link to="/" className="btn">
                shop now
              </Link>
            </div>
            <img src={img2} alt="slider" />
          </SwiperSlide>
          <SwiperSlide>
            <div className="content">
              <h4>introducing the new </h4>
              <h3>MicroSoft Xbox</h3>
              <p>windows Xp/10/7/8/ps3, tv box</p>
              <Link to="/" className="btn">
                shop now
              </Link>
            </div>
            <img src={img3} alt="slider" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Slider;
