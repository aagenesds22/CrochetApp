import '../../App.css';
import React from 'react';
import NavBar from './AppBar';
import Swip from './Swiper';
import {Route} from 'react-router-dom';


function Home() {
    return (
        <>
        
        
      <section className="Swiper-section">
      <Swip />
      </section>
      </>
    )
}

export default Home;