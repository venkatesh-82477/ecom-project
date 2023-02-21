import React from 'react'
import visa1 from "../images/visa1.png"
import visa from "../images/visa.png"
import payment1 from "../images/payment1.png"
import payment2 from "../images/payment2.png"
import { FaFacebook } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
function Footer() {
  return (
    <>
    <div className='footer'>
      <div className='foot'>
        <h3 style={{color:"grey",textAlign:"start"}}>iSHOP</h3>
        <p style={{textAlign:"start"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.</p>
      </div>
      <div className='foot'>
        <h3 style={{textAlign:"start"}}>Follow Us</h3>
        <p style={{textAlign:"start"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <FaFacebook ></FaFacebook>
        <FaTwitter style={{color:"blue",paddingLeft:"10px",fontSize:"28px"}}></FaTwitter>
      </div>
      <div className='foot'>
        <h3 style={{textAlign:"start"}}>Contact Us</h3>
        <p style={{textAlign:"start"}}>iShop: address @building 124 Call us now: 0123-456-789 Email: support@whatever.com</p>
      </div>
    </div> <br />
    <div className='footer1'>
        <div className='foot1'>
            <h5 style={{textAlign:"start"}}>Infomation</h5>
            <p style={{textAlign:"start"}}>About Us <br /> Infomation <br /> Privacy Policy <br />Terms & Conditions</p>
        </div>
        <div className='foot1'>
            <h5 style={{textAlign:"start"}}>Service</h5>
            <p style={{textAlign:"start"}}>About Us <br /> Infomation <br /> Privacy Policy <br />Terms & Conditions</p>
        </div>
        <div className='foot1'>
            <h5 style={{textAlign:"start"}}>Extras</h5>
            <p style={{textAlign:"start"}}>About Us <br /> Infomation <br /> Privacy Policy <br />Terms & Conditions</p>
        </div>
        <div className='foot1'>
            <h5 style={{textAlign:"start"}}>My Account</h5>
            <p style={{textAlign:"start"}}>About Us <br /> Infomation <br /> Privacy Policy <br />Terms & Conditions</p>
        </div>
        <div className='foot1'>
            <h5 style={{textAlign:"start"}}>Userful Links</h5>
            <p style={{textAlign:"start"}}>About Us <br /> Infomation <br /> Privacy Policy <br />Terms & Conditions</p>
        </div>
        <div className='foot1'>
            <h5 style={{textAlign:"start"}}>Our Offers</h5>
            <p style={{textAlign:"start"}}>About Us <br /> Infomation <br /> Privacy Policy <br />Terms & Conditions</p>
        </div>
    </div>
      <div className='cards'>
          <img src={visa1} alt="" className='card1' />
          <img src={payment1} alt=""  className='card1'/>
          <img src={payment2} alt="" className='card1'/>
          <img src={visa} alt="" className='card1'/>
      </div>
    </>
  )
}

export default Footer