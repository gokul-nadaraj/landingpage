import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar'
import Order from './components/Order/Order'
import Banner from './components/banner/Banner'
import Footer from './components/Footer/Footer'
import Delivery from './components/Center/Delivery'

const App = () => {
  return (
    <div>
      
<Navbar/>
<Banner/>
   <Order/>
   <Delivery/>
   <Footer/>
    </div>
  )
}

export default App