import React from 'react'
import './HeroWomen.css'
import women5 from '../Assets/Women_5.png'
import women2 from '../Assets/Women_2.png'
import women3 from '../Assets/Women_3.png'
import women4 from '../Assets/Women_4.png'
import women6 from '../Assets/Women_6.png'
import women7 from '../Assets/Women_7.png'
import women8 from '../Assets/Women_8.png'
import women9 from '../Assets/Women_9.png'
const HeroForWomen = () => {
    return (
        <div className='hero3'>
          <div className="hero3-left">
            <h2>Our Women's Section</h2>
            <div>
              <p>Now up to 50% off!</p>
              <p>Sale ends April 28th</p>
            </div>
            <div className="women-images">
                <div className='image-container'>
                      <img src={women5} alt=''/>
                      <p> Red Flower Pattern Dress</p>
                        <p>£20</p>
                        <div className='sizes'>
                            <button>XS</button>
                            <button>S</button>
                        </div>
                       
                    <img src={women2} alt=''/>
                    <p>Yuta Cover</p>
                        <p>£100</p>
                        <div className="sizes-2">
                          <button>XS</button>
                          <button>S</button>
                        </div>
                        <img src={women3} alt=''/>
                        <p> V-neck Top</p>
                        <p>£30</p>
                        <div className="sizes-3">
                          <button>XS</button>
                          <button>S</button>
                        </div>
                        <img src={women4} alt=''/>
                        <p>White Turtle Neck</p>
                        <p>£150</p>
                        <div className="sizes-4">
                          <button>XS</button>
                          <button>S</button>
                        </div>
                        <img src={women6} alt=''/>
                        <p>Orange Jumper</p>
                        <p>£60</p>
                        <div className="sizes-5">
                          <button>XS</button>
                          <button>S</button>
                        </div>
                        <img src={women7} alt=''/>
                        <p>Red Crop Hoodie</p>
                        <p>£80</p>
                        <div className="sizes-6">
                          <button>XS</button>
                          <button>S</button>
                        </div>
                        <img src={women8} alt=''/>
                        <p>White Flower Pattern Top</p>
                        <p>£50</p>
                        <div className="sizes-7">
                          <button>XS</button>
                          <button>S</button>
                        </div>
                        <img src={women9} alt=''/>
                        <p>Dark Navy Long-sleeve Shirt</p>
                        <p>£15</p>
                        <div className="sizes-8">
                          <button>XS</button>
                          <button>S</button>
                        </div>
                </div>
              

            </div>
             
                    </div>
                </div>
              
              
  
          
    
            
          
    
      )
}

export default HeroForWomen
