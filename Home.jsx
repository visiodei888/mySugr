import React from 'react';
// import './App.css';
import HeroSection from './HeroSection';
import Footer from './Footer';
import Navbar from './Navbar';

function Home({ isLoggedIn }) {
  return (
    <>
    {/* {isLoggedIn && <Navbar isLoggedIn={isLoggedIn} />} */}
    {/* <Navbar isLoggedIn={isLoggedIn} /> */}
      <HeroSection />
      <Footer />
    
    </>
  );
}

export default Home;