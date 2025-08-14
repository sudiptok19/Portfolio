import React from 'react';
import Spline from '@splinetool/react-spline';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      {/* Background Spline */}
      <div className="spline-background">
        <Spline scene="https://prod.spline.design/lpjwPtcGl7lOEJMw/scene.splinecode" />
      </div>

      {/* Foreground Content */}
      <div className="hero-content">
        <p className="hero-intro">Hello, I'm Sudipta</p>
        <h1 className="hero-title">
          Making code and pixel <br /> dance in harmony.
        </h1>
         <div className="button-container">
            <button className="boton-elegante">React</button>
            <button className="boton-elegante">Tailwind</button>
            <button className="boton-elegante">MongoDB</button>
        </div>



  
      </div>
    </div>
  );
};

export default Hero;
