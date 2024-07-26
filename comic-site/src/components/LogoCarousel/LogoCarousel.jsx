import React from "react";
import "./LogoCarousel.css";

import img1 from "../../assets/logo1.png";
import img2 from "../../assets/logo2.png";
import img4 from "../../assets/logo4.png";
import img5 from "../../assets/logo5.png";
import img9 from "../../assets/logo9.png";

const ImageCarousel = () => {
  return (
    <div className="logos">
      <div className="logo-scroller">
        <img src={img1} alt="1" />
        <img src={img2} alt="2" />
        <img src={img9} alt="6" />
        <img src={img4} alt="4" />
        <img src={img5} alt="5" />
      </div>

      <div className="logo-scroller">
        <img src={img1} alt="1" />
        <img src={img2} alt="2" />
        <img src={img9} alt="6" />
        <img src={img4} alt="4" />
        <img src={img5} alt="5" />
      </div>
    </div>
  );
};

export default ImageCarousel;
