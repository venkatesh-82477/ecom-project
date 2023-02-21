import React,{useState} from 'react'
import {NavLink,Link} from 'react-router-dom'
import {FaTimes,FaBars} from 'react-icons/fa'
import { FaUser } from 'react-icons/fa'
import { FaShoppingBag } from 'react-icons/fa'
import { FaSearch } from 'react-icons/fa'
export default function Appbar() {
         
   const [icon,setIcon] = useState(false)

   const handleClick =()=>{
    setIcon(!icon)
   }
   const closeDrawer =()=>{
    setIcon(false)
   }
   

  return (
    <>
            <nav className='Navbar'>
                <div className='topbar'>
                  <div>
                    <select name="lang" id="lang">
                      <option value="EN">EN</option>
                      <option value="TEL">TEL</option>
                      <option value="TAM">TAM</option>
                      <option value="HIN">HIN</option>
                    </select>
                    <select name="price" id="price">
                      <option value="$">$</option>
                      <option value="₹">₹</option>
                      <option value="€">€</option>
                      <option value="£">£</option>
                   </select>
                  </div>
                <div>
                   <FaUser className='fa-user'></FaUser><span>profile</span>
                   <Link to={"/Cart"} style={{textDecoration:"none",color:"black"}}>
                   <FaShoppingBag className='fa-shopping-bag'></FaShoppingBag><span>items</span>
                   </Link>
                   <span className='topprice'>$500</span>
                   <FaSearch className='fa-search'></FaSearch>
                </div>
                </div>
              <div id='con'>
              <h1 className='ishop'>iSHOP</h1>
              <div className='btn1' onClick={handleClick} > { icon ? <FaTimes className='fa-times'></FaTimes>:<FaBars className="fa-bars"></FaBars>}</div>
              </div>
              <ul className =  { icon ?'nav-menu active' : 'nav-menu'}>
              <li><NavLink to='./' className='link' activeClassName="active"  onClick={closeDrawer} >Home</NavLink></li> 
              <li><NavLink to='./Store' className='link' activeClassName="active" onClick={closeDrawer}>Store</NavLink></li>
              <li><NavLink to='./Iphone' className='link' activeClassName="active"  onClick={closeDrawer}>iPhone</NavLink></li>
              <li><NavLink to='./Ipad' className='link' activeClassName="active"  onClick={closeDrawer}>iPad</NavLink></li>
              <li><NavLink to='./Macbook' className='link' activeClassName="active"  onClick={closeDrawer}>Macbook</NavLink></li>
              <li><NavLink to='./Accesories' className='link' activeClassName="active"  onClick={closeDrawer}>Accesories</NavLink></li>
                 </ul>
                 </nav>
            </>
  )
}

