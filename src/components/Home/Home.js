import React from "react";
import "./Home.css";
import HomeCarousel from "../HomeCarousel/HomeCarousel";
import Product from "../Product/Product";
import Product1Img from "../../assets/images/product1.jpeg";
import Product2Img from "../../assets/images/product2.jpeg";
import Product3Img from "../../assets/images/product3.jpeg";
import Product4Img from "../../assets/images/product4.jpeg";
import Product5Img from "../../assets/images/product5.jpeg";
import Product6Img from "../../assets/images/product6.jpeg";

const Home = () => {
  return (
    <div>
      <HomeCarousel />
      <div className="home_productList">
        <Product
          id="1"
          price={14499}
          title="Godrej 190 L Direct Cool Single Door 5 Star (2020)"
          image={Product1Img}
          rating={5}
        />
        <Product
          id="2"
          price={11999}
          title="Godrej 190 L Direct Cool Single Door 3 Star (2020)"
          image={Product2Img}
          rating={5}
        />
      </div>
      <div className="home_productList">
        <Product
          id="3"
          price={12999}
          title="Godrej 180 L Direct Cool Single Door 3 Star"
          image={Product3Img}
          rating={5}
        />
        <Product
          id="4"
          price={14499}
          title="Godrej 190 L Direct Cool Single Door 3 Star"
          image={Product4Img}
          rating={5}
        />
        <Product
          id="5"
          price={19999}
          title="Godrej 205 L Direct Cool Single Door 3 Star"
          image={Product5Img}
          rating={5}
        />
      </div>
      <div className="home_productList">
        <Product
          id="6"
          price={17999}
          title="Godrej 210 L Direct Cool Single Door 5 Star"
          image={Product6Img}
          rating={5}
        />
      </div>
    </div>
  );
};

export default Home;
