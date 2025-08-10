import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hi, I'm <span className="highlight">Sudipta Karmakar</span></h1>
          <h2>Frontend Developer</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, ea laudantium dolorum beatos vitae quos aperiam.</p>
          <div className="cta-buttons">
            <button className="primary-btn">Hire Me</button>
            <button className="secondary-btn">Let's Talk</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="glow-effect"></div>
        </div>
      </div>
    </div>
  )
}

export default Hero