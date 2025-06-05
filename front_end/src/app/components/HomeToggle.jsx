"use client";

import React from 'react';
import Home1 from '../Home1/page';  
import Home2 from '../Home2/page';  


import Header from '../Head_Footer/Header'; 
import Footer from '../Head_Footer/Footer'; 

export default function HomeToggle() {
  return (
    <>
      <Header/>
      <Home1 />
      <Home2 />
      <Footer />
    </>
  );
}
