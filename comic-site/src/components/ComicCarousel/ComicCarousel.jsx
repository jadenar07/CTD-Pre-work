import React from "react";
import "./ComicCarousel.css";

import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/4.jpg";
import img5 from "../../assets/5.jpg";
import img6 from "../../assets/6.jpg";
import img7 from "../../assets/7.jpg";
import img9 from "../../assets/9.jpg";
import img10 from "../../assets/10.jpg";

const ComicCarousel = () => {
  return (
    <>
      <div className="container">
        <div className="comic-carousel">
          <div className="comic-carousel-slide">
            <img src={img1} alt="Comic 1" />
            <img src={img2} alt="Comic 2" />
            <img src={img3} alt="Comic 3" />
            <img src={img4} alt="Comic 4" />
            <img src={img5} alt="Comic 5" />
            <img src={img6} alt="Comic 6" />
            <img src={img7} alt="Comic 7" />
            <img src={img9} alt="Comic 9" />
            <img src={img10} alt="Comic 10" />
          </div>
        </div>
        <div className="comic-carousel">
          <div className="comic-carousel-slide">
            <img src={img5} alt="Comic 5" />
            <img src={img1} alt="Comic 1" />
            <img src={img9} alt="Comic 9" />
            <img src={img3} alt="Comic 3" />
            <img src={img7} alt="Comic 7" />
            <img src={img4} alt="Comic 4" />
            <img src={img2} alt="Comic 2" />
            <img src={img10} alt="Comic 10" />
            <img src={img6} alt="Comic 6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ComicCarousel;
