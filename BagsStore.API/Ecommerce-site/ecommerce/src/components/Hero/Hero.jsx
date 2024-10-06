import React, { useEffect, useState } from 'react'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'
import './Hero.css'
import backgroundVideo from '../Assets/Video/previewvideo.mp4'

export default function Hero() {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
  return (
    <div className='hero'>

      <video className={`hero-video ${isScrolled ? 'scrolled' : ''}`} autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

    </div>
  )
}




/* <div className="hero-left">
<h2>NEW ARRIVALS ONLY</h2>
<div>
    <div className="hand-hand-icon">
        <p>new</p>
        <img src={hand_icon} alt="hero-icon"/>
    </div>
    <p>collection</p>
    <p>for everyone</p>
</div>
<div className="hero-latest-btn">
    <div>Latest collection</div>
    <img src={arrow_icon} alt="arrow" />
</div>
</div>
<div className="hero-right">
<img src={hero_image} alt = 'asd'/>
</div> */