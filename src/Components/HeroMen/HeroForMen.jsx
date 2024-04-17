import React from 'react'
import './HeroMen.css'
import men1 from '../Assets/Men_1.png'
import men2 from '../Assets/Men_2.png'
import men3 from '../Assets/Men_3.png'
import men4 from '../Assets/Men_4.png'
import men5 from '../Assets/Men_5.png'
import men6 from '../Assets/Men_6.png'
import men7 from '../Assets/Men_7.png'
import men8 from '../Assets/Men_8.png'
const HeroForMen = () => {
    return (
        <div className='hero2'>
          <div className="hero2-left">
            <h2>Our Men Section</h2>
            <div>
              <p>Now up to 50% off!</p>
              <p>Sale ends April 28th</p>
            </div>
            <div className="men-images">
                <div className='image-container-1'>
                      <img src={men1} alt=''/>
                      <p> Blue-zip Jumper</p>
                        <p>£20</p>
                        <div className='m-sizes'>
                            <button>XS</button>
                            <button>S</button>
                        </div>
                       
                    <img src={men2} alt=''/>
                    <p>White-tech Fleece</p>
                        <p>£100</p>
                        <div className="m-sizes-2">
                          <button>XS</button>
                          <button>S</button>
                        </div>
                        <img src={men3} alt=''/>
                        <p> Mountain Jacket</p>
                        <p>£200</p>
                        <div className="m-sizes-3">
                          <button>XS</button>
                          <button>S</button>
                        </div>
                        <img src={men4} alt=''/>
                        <p>Green Button-up Jacket</p>
                        <p>£150</p>
                        <div className="m-sizes-4">
                          <button>XS</button>
                          <button>S</button>
                        </div>
                        <img src={men5} alt=''/>
                        <p>Quilted White Jacket</p>
                        <p>£60</p>
                        <div className="m-sizes-5">
                          <button>XS</button>
                          <button>S</button>
                        </div>
                        <img src={men6} alt=''/>
                        <p>Black Leather Jacket</p>
                        <p>£80</p>
                        <div className="m-sizes-6">
                          <button>XS</button>
                          <button>S</button>
                        </div>
                        <img src={men7} alt=''/>
                        <p>Green Puma Hoddie</p>
                        <p>£50</p>
                        <div className="m-sizes-7">
                          <button>XS</button>
                          <button>S</button>
                        </div>
                        <img src={men8} alt=''/>
                        <p>Urban Street Active Jacket</p>
                        <p>£300</p>
                        <div className="m-sizes-8">
                          <button>XS</button>
                          <button>S</button>
                        </div>
                </div>
              

            </div>
             
                    </div>
                </div>
              
              
  
          
        
            
          
        
      )
}

export default HeroForMen
