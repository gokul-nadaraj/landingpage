import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import logo from '/images/multibook.png'
import './Banner.css'
const Banner = () => {
  return (
    <div className='banner'>
        <div className='banner-container'>
            
<FontAwesomeIcon icon={faArrowLeft} className='btn'/>
          
<img src={logo} alt="open" />

        </div>
        <div className='shop-container'>
            <div className='shop'>
                <h2>Hot & Trendy</h2>
                <h1>Baby Kids Cloth</h1>
                <p>Get upto 30% offer in Your First Order</p>
                <button>Order Now</button>
                </div>
            <div className='btn-container'>
                
                    <FontAwesomeIcon icon={faArrowRight} className='btn'/>
               
            </div>
          
        </div>
    </div>
  )
}

export default Banner