import React from "react";
import Banner from "../assets/imgs/banner.png";
import { Button } from "react-bootstrap";
import Products from "./Products";

function Home(props) {
  // console.log(props);
  return (
    <div className="body">
      <div className="banner position-relative">
        <img src={Banner} alt="Logo" className="banner-img" />
        <div className="sub position-absolute">
          <h1 className="text-light">
            Welcome home.
            <br /> Inspiration awaits.
          </h1>
        </div>
      </div>

      <div className="welcome d-flex">
        <div className="w-50 pd-50">
          <p className="welcome-left-text">
            Welcome home. <br />
            Inspiration awaits.
          </p>
        </div>
        <div className="w-50 pd-50">
          <p className="welcome-right-text">
            We've been pioneering surface design since 1987. Designed for
            multi-application use, our beautiful and highly durable countertops
            help you create a unique style for every space in your home.
            Experience craftsmanship at its best and bring inspired ideas to
            life.
          </p>
          <Button className="welcome-button">Visit Our Catalog </Button>
        </div>
      </div>
      <Products />
    </div>
  );
}

export default Home;
