import React from 'react' 
import shipping from "../images/shipping.jpg"
import support from "../images/support.jpg"
import refund from "../images/refund.jpg"
import Corousel from "../components/Corousel"
import Corousels from "../components/Corousels"
import Footer from '../components/Footer'
import Items from "../components/Items"


const Home = () => {

  return (
    <>
    <Corousel/>
    <br></br><br></br>
    <h2 style={{textAlign:"center"}}>BEST SELLER</h2> 
    <br></br>
    <Items/>
    <Corousel/>
    <br /><br />
    <div className='order'>
        <div className='flex1'>
            <img src={shipping} alt="" /><br /><br />
            <h4>FREE SHIPPING</h4><br />
            <p style={{textAlign:"start"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim veniam, quis nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
        </div>
        <div className='flex1'>
            <img src={refund} alt="" /><br /><br />
            <h4>100% REFUND</h4><br />
            <p style={{textAlign:"start"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim veniam, quis nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
        </div>
        <div className='flex1'>
            <img src={support} alt="" /><br /><br />
            <h4>SUPPORT 24/7</h4><br />
            <p style={{textAlign:"start"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim veniam, quis nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
        </div>
    </div><br /><br />
    <h4 style={{textAlign:"center"}}>FEATURED PRODUCTS</h4>
    <br /><br />
    <Corousels/>
    <br /><br />
    <Footer/>
    </>
  )
}

export default Home