import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Accesories from '../pages/Accesories'
import Home from '../pages/Home'
import Store from '../pages/Store'
import Iphone from '../pages/Iphone'
import Ipad from '../pages/Ipad'
import Macbook from '../pages/Macbook'
import Errorpage from '../pages/Errorpage'
import Cart from '../components/Cart'

const Routers = () => {
    return (
      <>
         <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Store' element={<Store/>} />
            <Route path='/Iphone' element={<Iphone/>} />
            <Route path='/Ipad' element={<Ipad/>} />
            <Route path='/Macbook' element={<Macbook/>} />
            <Route path='/Accesories' element={<Accesories/>} />
            <Route path="/Cart" element={<Cart/>}/>
            <Route path='/Errorpage' element={<Errorpage/>}/>
          </Routes>
          
      </>
    )
  }
  
  export default Routers