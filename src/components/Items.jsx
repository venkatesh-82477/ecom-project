import React,{useEffect,useState} from "react";
import {  NavLink } from "react-bootstrap";
import NavLinks from "./NavLinks";
import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'

const BestSeller = () => {
  const [allData, setAllData] = useState([]);
  const [ipad, setIpad] = useState([]);
  const [iphone, setIphone] = useState([]);
  const [mac, setMac] = useState([]);
  const [ipod, setIpod] = useState([]);
  const [accesories, setAccesories] = useState([]);



  const [isShownAll, setIsShownAll] = useState(true);
  const [isShownIpad, setIsShownIpad] = useState(false);
  const [isShownIphone, setIsShownIphone] = useState(false);
  const [isShownMac, setIsShownMac] = useState(false);
  const [isShownIpod, setIsShownIpod] = useState(false);
  const [isShownAccesories, setIsShownAccesories] = useState(false);
  useEffect(() => {
    fetch("https://ecomback-htc2.vercel.app/product").then((res) => res.json()).then((json) => setAllData(json))
  },[]);
  useEffect(() => {
    fetch("https://ecomback-htc2.vercel.app/product").then((res) => res.json()).then((json) => setIpad(json))
  },[]);
  useEffect(() => {
    fetch("https://ecomback-htc2.vercel.app/product").then((res) => res.json()).then((json) => setIphone(json))
  },[]);
  useEffect(() => {
    fetch("https://ecomback-htc2.vercel.app/product").then((res) => res.json()).then((json) => setMac(json))
  },[]);
  useEffect(() => {
    fetch("https://ecomback-htc2.vercel.app/product").then((res) => res.json()).then((json) => setIpod(json))
  },[]);
  useEffect(() => {
    fetch("https://ecomback-htc2.vercel.app/product").then((res) => res.json()).then((json) => setAccesories(json))
  },[]);
  return (
    <> 
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/" activeclassname="active" className="nav-link nav-linker " onClick={() => {setIsShownAll(true);}}>
              ALL
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/bollywood" className="nav-link nav-linker " onClick={() => {setIsShownAll(false);setIsShownIpad(true);setIsShownIphone(false);setIsShownMac(false);setIsShownIpod(false);setIsShownAccesories(false)}}>
              ipad
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/technology" className="nav-link nav-linker " onClick={() => {setIsShownAll(false);setIsShownIpad(false);setIsShownIphone(true);setIsShownMac(false);setIsShownIpod(false);setIsShownAccesories(false)}}>
              iphone
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/hollywood" className="nav-link nav-linker " onClick={() => {setIsShownAll(false);setIsShownIpad(false);setIsShownIphone(false);setIsShownMac(true);setIsShownIpod(false);setIsShownAccesories(false)}}>
              mac
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/fitness" className="nav-link nav-linker " onClick={() => {setIsShownAll(false);setIsShownIpad(false);setIsShownIphone(false);setIsShownMac(false);setIsShownIpod(true);setIsShownAccesories(false)}}>
              ipod
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/food" className="nav-link  " onClick={() => {setIsShownAll(false);setIsShownIpad(false);setIsShownIphone(false);setIsShownMac(false);setIsShownIpod(false);setIsShownAccesories(true)}}>
             accesories
            </NavLink>
          </li>
        </ul>
            <NavLinks />
        <div className="cardss" style={{display: isShownAll ? 'flex' : 'none'}}>
        {
        allData.filter((value)=> value.type === "all")
          .map((val) =>(
            <div className='flex' key={val.id}>
            <Link to={"/Cart"}>
            <img src={val.image} alt="" className='watch'/>
            </Link>
            <br></br><br></br>
            <h6 style={{textAlign:"center"}}>{val.title}</h6>
            <FaStar style={{color:"yellow",textAlign:"center"}}></FaStar>
            <FaStar style={{color:"yellow",textAlign:"center"}}></FaStar>
            <FaStar style={{color:"yellow",textAlign:"center"}}></FaStar>
            <FaStar style={{color:"yellow",textAlign:"center"}}></FaStar>
            <FaStar style={{color:"grey",textAlign:"center"}}></FaStar>
            <br />
            <span style={{textAlign:"center"}}>{val.price1}</span>
            <span style={{textDecoration:"line-through",paddingLeft:"5px",textAlign:"center",color:"grey"}}>{val.price2}</span>
          </div>
          
          ))
            } 
        </div>
        <div className="cardss" style={{display: isShownIpad ? 'flex' : 'none'}}>
        {
               ipad.filter((value)=> value.type === "ipad")
               .map((val) =>(
                 <div className='flex' key={val.id}>
                 <Link to={"/Cart"}>
                 <img src={val.image} alt="" className='watch'/>
                 </Link>
                 <br></br><br></br>
                 <h6 style={{textAlign:"center"}}>{val.title}</h6>
                 <FaStar style={{color:"yellow",textAlign:"center"}}></FaStar>
                 <FaStar style={{color:"yellow",textAlign:"center"}}></FaStar>
                 <FaStar style={{color:"yellow",textAlign:"center"}}></FaStar>
                 <FaStar style={{color:"yellow",textAlign:"center"}}></FaStar>
                 <FaStar style={{color:"grey",textAlign:"center"}}></FaStar>
                 <br />
                 <span style={{textAlign:"center"}}>{val.price1}</span>
                 <span style={{textDecoration:"line-through",paddingLeft:"5px",textAlign:"center",color:"grey"}}>{val.price2}</span>
               </div>
               
               ))
            } 
        </div>
        <div className="cardss" style={{display: isShownIphone ? 'flex' : 'none'}}>
        {
               iphone.filter((value)=> value.type === "iphone")
               .map((val) =>(
                 <div className='flex' key={val.id}>
                 <Link to={"/Cart"}>
                 <img src={val.image} alt="" className='watch'/>
                 </Link>
                 <br></br><br></br>
                 <h6 style={{textAlign:"center"}}>{val.title}</h6>
                 <FaStar style={{color:"yellow",textAlign:"center"}}></FaStar>
                 <FaStar style={{color:"yellow",textAlign:"center"}}></FaStar>
                 <FaStar style={{color:"yellow",textAlign:"center"}}></FaStar>
                 <FaStar style={{color:"yellow",textAlign:"center"}}></FaStar>
                 <FaStar style={{color:"grey",textAlign:"center"}}></FaStar>
                 <br />
                 <span style={{textAlign:"center"}}>{val.price1}</span>
                 <span style={{textDecoration:"line-through",paddingLeft:"5px",textAlign:"center",color:"grey"}}>{val.price2}</span>
               </div>
               
               ))
            } 
        </div>
        <div className="cardss" style={{display: isShownMac? 'flex' : 'none'}}>
        {
                mac.filter((value)=> value.type === "macbook")
                .map((val) =>(
                  <div className='flex' key={val.id}>
                  <Link to={"/Cart"}>
                  <img src={val.image} alt="" className='watch'/>
                  </Link>
                  <br></br><br></br>
                  <h6 style={{textAlign:"center"}}>{val.title}</h6>
                  <FaStar style={{color:"yellow",textAlign:"center"}}></FaStar>
                  <FaStar style={{color:"yellow",textAlign:"center"}}></FaStar>
                  <FaStar style={{color:"yellow",textAlign:"center"}}></FaStar>
                  <FaStar style={{color:"yellow",textAlign:"center"}}></FaStar>
                  <FaStar style={{color:"grey",textAlign:"center"}}></FaStar>
                  <br />
                  <span style={{textAlign:"center"}}>{val.price1}</span>
                  <span style={{textDecoration:"line-through",paddingLeft:"5px",textAlign:"center",color:"grey"}}>{val.price2}</span>
                </div>
                
                ))
            } 
        </div>
        <div className="cardss" style={{display: isShownIpod ? 'flex' : 'none'}}>
        {
                ipod.filter((value)=> value.type === "ipod")
                .map((val) =>(
                  <div className='flex' key={val.id}>
                  <Link to={"/Cart"}>
                  <img src={val.image} alt="" className='watch'/>
                  </Link>
                  <br></br><br></br>
                  <h6 style={{textAlign:"center"}}>{val.title}</h6>
                  <FaStar style={{color:"yellow",textAlign:"center"}}></FaStar>
                  <FaStar style={{color:"yellow",textAlign:"center"}}></FaStar>
                  <FaStar style={{color:"yellow",textAlign:"center"}}></FaStar>
                  <FaStar style={{color:"yellow",textAlign:"center"}}></FaStar>
                  <FaStar style={{color:"grey",textAlign:"center"}}></FaStar>
                  <br />
                  <span style={{textAlign:"center"}}>{val.price1}</span>
                  <span style={{textDecoration:"line-through",paddingLeft:"5px",textAlign:"center",color:"grey"}}>{val.price2}</span>
                </div>
                
                ))
            } 
        </div>
        <div className="cardss" style={{display: isShownAccesories ? 'flex' : 'none'}}>
        {
                accesories.filter((value)=> value.type === "accesories")
                .map((val) =>(
                  <div className='flex' key={val.id}>
                  <Link to={"/Cart"}>
                  <img src={val.image} alt="" className='watch'/>
                  </Link>
                  <br></br><br></br>
                  <h6 style={{textAlign:"center"}}>{val.title}</h6>
                  <FaStar style={{color:"yellow",textAlign:"center"}}></FaStar>
                  <FaStar style={{color:"yellow",textAlign:"center"}}></FaStar>
                  <FaStar style={{color:"yellow",textAlign:"center"}}></FaStar>
                  <FaStar style={{color:"yellow",textAlign:"center"}}></FaStar>
                  <FaStar style={{color:"grey",textAlign:"center"}}></FaStar>
                  <br />
                  <span style={{textAlign:"center"}}>{val.price1}</span>
                  <span style={{textDecoration:"line-through",paddingLeft:"5px",textAlign:"center",color:"grey"}}>{val.price2}</span>
                </div>
                
                ))
            } 
        </div>
      
    </>
  );
};

export default BestSeller;