import React from "react";

import Header from "../../components/Header";
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Carousel />
      <Footer />
    </>
  );
};

export default Home;
