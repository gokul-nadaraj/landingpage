

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import image1 from '/images/image12.png';
import logo from '/images/multibook.png'

import image2 from '/images/image12.png';
import image3 from '/images/image12.png';

import './Banner.css';

const Banner = () => {
  const images = [image1, image2, image3]; // Array of images
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the current image index
  const [fade, setFade] = useState(false); // State to manage fade effect

  // Function to go to the previous image
  const handlePrevious = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
      setFade(false);
    }, 300); // Adjust the timeout to match the transition duration
  };
  // Function to go to the next image
  const handleNext = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      setFade(false);
    }, 300); // Adjust the timeout to match the transition duration
  }
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form data:', formData);
      // Proceed with payment logic (e.g., call a payment API)
    }
  };


  return (
    
    <div className='container'>
    <div
      className={`banner ${fade ? 'fade' : ''}`}
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
      }}
    >
      <div className='banner-container'>
        <FontAwesomeIcon icon={faArrowLeft} className='btn' onClick={handlePrevious} />
        <img src={logo} alt="open" />
      </div>
      <div className='shop-container'>
        <div className='shop'>
          <h2>Hot & Trendy</h2>
          <h1>Baby Kids Cloth</h1>
          <p>Get up to 30% off on Your First Order</p>
          <button>Shop Now</button>
        </div>
        <div className='btn-container'>
                
          <FontAwesomeIcon icon={faArrowRight} onClick={handleNext}    className='btn'/>
                               
               </div>
                          
      </div>
    </div>

{/* //payment section starts */}

<div class="form-container">
  <h2 class="form-heading">Payment Form</h2>
  <form onsubmit="handleSubmit(event)">
    <div class="form-group">
      <label for="name" class="form-label">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value=""
        oninput="handleChange(event)"
        required
        class="form-input"
      />
      <p class="error-message" id="nameError"></p>
    </div>
    <div class="form-group">
      <label for="email" class="form-label">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value=""
        oninput="handleChange(event)"
        required
        class="form-input"
      />
      <p class="error-message" id="emailError"></p>
    </div>
    <div class="form-group">
      <label for="phone" class="form-label">Phone</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value=""
        oninput="handleChange(event)"
        required
        class="form-input"
      />
      <p class="error-message" id="phoneError"></p>
    </div>
    <button
      type="submit"
      class="submit-button"
    >
      Submit Payment
    </button>
  </form>
</div>
</div>


  );
};

export default Banner;


//

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import image1 from '/images/image1.jpg';
import logo from '/images/multibook.png'

import image2 from '/images/image1.jpg';
import image3 from '/images/image1.j';

import './Banner.css';

const Banner = () => {
  const images = [image1, image2, image3]; // Array of images
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the current image index
  const [fade, setFade] = useState(false); // State to manage fade effect

  // Function to go to the previous image
  const handlePrevious = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
      setFade(false);
    }, 300); // Adjust the timeout to match the transition duration
  };
  // Function to go to the next image
  const handleNext = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      setFade(false);
    }, 300); // Adjust the timeout to match the transition duration
  }
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form data:', formData);
      // Proceed with payment logic (e.g., call a payment API)
    }
  };


  return (
    
    <div className='container'>
    <div
      className={`banner ${fade ? 'fade' : ''}`}
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
      }}
    >
      <div className='banner-container'>
        <FontAwesomeIcon icon={faArrowLeft} className='btn' onClick={handlePrevious} />
        <img src={logo} alt="open" />
      </div>
      <div className='shop-container'>
        <div className='shop'>
          <h2>Hot & Trendy</h2>
          <h1>Baby Kids Cloth</h1>
          <p>Get up to 30% off on Your First Order</p>
          <button>Shop Now</button>
        </div>
        <div className='btn-container'>
                
          <FontAwesomeIcon icon={faArrowRight} onClick={handleNext}    className='btn'/>
                               
               </div>
                          
      </div>
    </div>

{/* //payment section starts */}

<div class="form-container">
  <h2 class="form-heading">Payment Form</h2>
  <form onsubmit="handleSubmit(event)">
    <div class="form-group">
      <label for="name" class="form-label">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value=""
        oninput="handleChange(event)"
        required
        class="form-input"
      />
      <p class="error-message" id="nameError"></p>
    </div>
    <div class="form-group">
      <label for="email" class="form-label">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value=""
        oninput="handleChange(event)"
        required
        class="form-input"
      />
      <p class="error-message" id="emailError"></p>
    </div>
    <div class="form-group">
      <label for="phone" class="form-label">Phone</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value=""
        oninput="handleChange(event)"
        required
        class="form-input"
      />
      <p class="error-message" id="phoneError"></p>
    </div>
    <button
      type="submit"
      class="submit-button"
    >
      Submit Payment
    </button>
  </form>
</div>
</div>


  );
};

export default Banner;

//

.container {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 200px;
  background-color: violet;
}

.banner {
  flex: 1;
  background-size: cover;
  background-position: center;
  background-color: tomato;
  height: 400px; /* Adjust the height as needed */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

 .banner-container {
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
} 

.banner-container img {
  max-width: 100px;
  max-height: 100px;
}

.shop-container {
  display: flex;
  justify-content: space-around;
  margin-left: 400px;
  
}

.shop h2{
  margin-bottom: 20px;
}

.shop button {
  padding: 10px 20px;
  background-color: #ff5a5f;
  color: white;
  border: none;
  cursor: pointer;
  margin-top: 15px;
}

.shop button:hover {
  background-color: #ff383d;
}

.btn-container {
  
}

.btn {
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
}

/* Payment Form Styles */
.form-container {
  flex: 0 0 300px; 
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.form-heading {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

.form-group {
  margin-bottom: 15px;
}

.form-label {
  display: block;
  font-size: 14px;
  color: #333;
}

.form-input {
  width: 100%;
  padding: 10px;
  font-size: 14px;
  margin-top: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.form-input:focus {
  border-color: #ff5a5f;
  outline: none;
}

.error-message {
  font-size: 12px;
  color: red;
  margin-top: 5px;
}

.submit-button {
  width: 100%;
  padding: 12px;
  background-color: #ff5a5f;
  color: white;
  border: none;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #ff383d;
}

/* Responsive Styles */
























