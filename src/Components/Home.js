import Carousel from "../Container/Carousel";
import Card from "../Container/Card";
import Footer from "../Container/Footer";
import FeaturedProduct from "./Products";
import React from "react";

function Home() {
  return (
    <>
      <Carousel />
      <Card />
      <FeaturedProduct />
    </>
  );
}

export default Home;
