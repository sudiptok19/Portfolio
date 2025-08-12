import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <p className="hero-intro">Hello, I'm Sudipta</p>
        <h1 className="hero-title">
          Making code and pixel <br /> dance in harmony.
        </h1>
        <div className="cta-buttons">
          <button className="primary-btn">My Blogs</button>
          <button className="secondary-btn">About Me</button>
        </div>
        
      </div>
    </div>
  )
}

export default Hero