import React from "react";
import FirstImg from "../../assets/images/First.jpg";
import SecondImg from "../../assets/images/Second.jpg";
import "./HomeCarousel.css";
import { Carousel } from "react-bootstrap";

const HomeCarousel = () => {
  return (
    <div>
      <Carousel className="home__carousel">
        <Carousel.Item>
          <img
            className="home__image d-block w-100 home__image"
            src={FirstImg}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="home__image d-block w-100"
            src={SecondImg}
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
