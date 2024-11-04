import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Order from './components/Order/Order'
import Banner from './components/banner/Banner'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
<Navbar/>
<Banner/>
   <Order/>
   <Footer/>
    </div>
  )
}

export default App