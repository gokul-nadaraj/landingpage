import React from 'react'
import logo from '/images/multibook.png'

import './Footer.css'

const Footer = () => {
  return (
    <div className='footer' id="footer">

<div className="footer-content" >
    <div className="footer-content-one">

        <img src={logo}alt="logo" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem optio quos, tenetur voluptatem aliquam in libero natus odio nesciunt at!</p>



    </div>
    <div className="footer-content-two">


<h2>Your Account</h2>

<ul>
    <li>About Us</li>
    <li>Contact Us</li>
    <li>FAQs</li>
    <li>New Products</li>
    <li>Best Sales</li>
</ul>

    </div>
    <div className='three'>

        <h2>Product</h2>
<ul>
    <li>Delivery</li>
    <li>legel Notice</li>
    <li>Prices Drop</li>
    <li>New Products</li>
    <li>Best Salse</li>
</ul>



    </div>

<div className="footer-content-right">

    <h2>Contact Information</h2>
<ul>
    <li>Street</li>
    <li>6379138492</li>
    <li>Iamgokul03062001@gmail.com</li>
    
</ul>
</div>

</div>

<p className='footer-copyright'></p>
    </div>
  )
}

export default Footer