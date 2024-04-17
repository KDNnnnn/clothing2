import React from 'react'
import './HeroKids.css'
import kid1 from '../Assets/Kid_1.png'
import kid2 from '../Assets/Kid_2.png'
import kid3 from '../Assets/Kid_3.png'
import kid4 from '../Assets/Kid_4.png'
import kid5 from '../Assets/Kid_5.png'
import kid6 from '../Assets/Kid_6.png'
import kid7 from '../Assets/Kid_7.png'
import kid8 from '../Assets/Kid_8.png'

const HeroForKids = () => {
    return (
        <div className='hero4'>
          <div className="hero4-left">
            <h2>Our Kids Section</h2>
            <div>
              <p>Now up to 70% off!</p>
              <p>Sale ends May 22nd</p>
            </div>
            <div className="kid-images">
                <div className='image-container-2'>
                      <img src={kid1} alt=''/>
                      <p>Green Dino-Jumper</p>
                        <p>£20</p>
                        <div className='k-sizes'>
                            <button>5-6</button>
                            <button>7-9</button>
                        </div>
                       
                    <img src={kid2} alt=''/>
                    <p>White-yellow Hoodie</p>
                        <p>£30</p>
                        <div className="k-sizes-2">
                          <button>5-6</button>
                          <button>7-9</button>
                        </div>
                        <img src={kid3} alt=''/>
                        <p> Black Graphic Hoodie</p>
                        <p>£30</p>
                        <div className="k-sizes-3">
                          <button>5-6</button>
                          <button>7-9</button>
                        </div>
                        <img src={kid4} alt=''/>
                        <p>Athletic Green Zip</p>
                        <p>£45</p>
                        <div className="k-sizes-4">
                          <button>5-6</button>
                          <button>7-9</button>
                        </div>
                        <img src={kid5} alt=''/>
                        <p>Olive-Quilted Jacket</p>
                        <p>£60</p>
                        <div className="k-sizes-5">
                          <button>5-6</button>
                          <button>7-9</button>
                        </div>
                        <img src={kid6} alt=''/>
                        <p>Blue Jean Jacket</p>
                        <p>£25</p>
                        <div className="k-sizes-6">
                          <button>5-6</button>
                          <button>7-9</button>
                        </div>
                        <img src={kid7} alt=''/>
                        <p>Black Zip-up</p>
                        <p>£50</p>
                        <div className="k-sizes-7">
                          <button>5-6</button>
                          <button>7-9</button>
                        </div>
                        <img src={kid8} alt=''/>
                        <p>Puma Long-sleeve</p>
                        <p>£35</p>
                        <div className="k-sizes-8">
                          <button>5-6</button>
                          <button>7-9</button>
                        </div>
                </div>
              

            </div>
             
                    </div>
                </div>
              
              
  
          
        
            
          
        
      )
}

export default HeroForKids
