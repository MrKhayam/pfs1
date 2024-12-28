import React from 'react';
import Hero from '../Components/Hero';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <>
      <div className="w-full h-auto overflow-scroll">
        <Hero />
        <Footer />
      </div>
    </>
  );
}

export default Home;
