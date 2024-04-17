import React from 'react'
import { useState } from 'react';
import './Navbar.css'
import logo from '../Assets/shopping-bag.svg'
import cart from '../Assets/shopping-cart.svg'
import { Link } from 'react-router-dom';

function Navbar () {

    const [menu,setMenu] = useState("Latest releases")

  return (
    <div className='navbar'> 
    <div className="nav-logo">
       <img src={logo} alt="" />
        <p>K Klothing</p> 
    </div>
      <ul className="nav-link">
        <li onClick={()=>{setMenu("Latest releases")}}><Link style={{textDecoration: 'none', color: 'black'}} to='/'>Latest releases</Link>{menu==="Latest releases"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Men")}}><Link style={{textDecoration: 'none', color: 'black'}} to='/men'>Men</Link>{menu==="Men"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Women")}}><Link style={{textDecoration: 'none', color: 'black'}} to='/women'>Women</Link>{menu==="Women"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Kids")}}><Link style={{textDecoration: 'none', color: 'black'}} to='/kids'>Kids</Link>{menu==="Kids"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Contact")}}><Link style={{textDecoration: 'none', color: 'black'}} to='/Contact'>Contact Us</Link>{menu==="Contact"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Sign up</button></Link>
        <Link to='/cart'><img src={cart} alt="" /></Link>
        <div className="nav-cart-counter">0</div>
      </div>
    </div>
  )
}

export default Navbar
