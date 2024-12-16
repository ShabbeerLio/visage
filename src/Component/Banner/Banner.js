import React, { useState } from "react";
import bnimg from "../../Assets/Banner/banner1.jpg";
import "./Banner.css";
import { LiaBuffer } from "react-icons/lia";

// import BannerBtm from '../BannerBtm/BannerBtm'

const Banners = (props) => {
  return (
    <>
      <div className="Banners">
        <div className="Banners-main">
          <div className="banner-image">
            <img src={bnimg} alt="" />
          </div>
          <div className="Banners-detail">
            <div className="banner-title">
              <h4></h4>
            </div>
            <div className="banner-desc">
              <h1>Unmask Your Experience</h1>
            </div>
            <div className="banner-button">
              <p>Explore Our Spaces</p>
            </div>
          </div>
            <div className="banner-reserve">
              {/* <div className="reserve-box">
                <span>Reserve</span>
                <LiaBuffer />
                <span>Reserve</span>
              </div> */}
            </div>
        </div>
      </div>
    </>
  );
};

export default Banners;
