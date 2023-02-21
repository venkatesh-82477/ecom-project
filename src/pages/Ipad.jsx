import React,{useState,useEffect} from 'react'
import Corousel from "../components/Corousel"
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import { FaCircle,FaBars,FaStar } from 'react-icons/fa'

const Ipad = () => {
  const [data,setData] = useState([]);

   useEffect(()=>{
    fetch("https://ecomback-htc2.vercel.app/product")
      .then(res => res.json())
      .then(res => setData(res))
   },[])
  return (
    <>
    <div className='header'>Ipad/Accesories</div><br />
    <div className='store'>
      <div className='items'>
        <div className='category'>
          <h6 style={{paddingLeft:"5px"}}>ACCESORIES</h6><br />
          <p style={{paddingLeft:"5px"}}>Apple Car<span style={{float:"right",paddingRight:"5px"}}>2</span></p>
          <p style={{paddingLeft:"5px",color:"blue"}}>Air port & wireless<span style={{float:"right",paddingRight:"5px",color:"blue"}}>48</span></p>
          <p style={{paddingLeft:"5px"}}>Cables & Docks<span style={{float:"right",paddingRight:"5px"}}>13</span></p>
          <p style={{paddingLeft:"5px"}}>Cases & Films<span style={{float:"right",paddingRight:"5px"}}>15</span></p>
          <p style={{paddingLeft:"5px"}}>Charging Devices<span style={{float:"right",paddingRight:"5px"}}>14</span></p>
          <p style={{paddingLeft:"5px"}}>Connected home<span style={{float:"right",paddingRight:"5px"}}>1</span></p>
          <p style={{paddingLeft:"5px"}}>Headphones<span style={{float:"right",paddingRight:"5px"}}>95</span></p>
        </div><br />
        <div className='prices'>
          <h5 style={{paddingLeft:"5px"}}>PRICES</h5>
          <p style={{paddingLeft:"5px"}}>Ranger:<span style={{float:"right",paddingRight:"5px"}}>$13.99 - $25.99</span></p>
            <input type="range" style={{marginLeft:"30px"}}/>
        </div><br />
        <div className='colors'>
          <h5 style={{paddingLeft:"5px"}}>COLOR</h5>
          <FaCircle style={{color:"blue",marginLeft:"10px"}}></FaCircle>
          <FaCircle style={{color:"red",marginLeft:"10px"}}></FaCircle>
          <FaCircle style={{color:"yellow",marginLeft:"10px"}}></FaCircle>
          <FaCircle style={{color:"pink",marginLeft:"10px"}}></FaCircle>
          <FaCircle style={{color:"limegreen",marginLeft:"10px"}}></FaCircle>
        </div><br />
        <div className='category'>
          <h6 style={{paddingLeft:"5px"}}>BRAND</h6><br />
          <p style={{paddingLeft:"5px"}}>Apple<span style={{float:"right",paddingRight:"5px"}}>2</span></p>
          <p style={{paddingLeft:"5px",color:"blue"}}>LG<span style={{float:"right",paddingRight:"5px",color:"blue"}}>48</span></p>
          <p style={{paddingLeft:"5px"}}>Samsung<span style={{float:"right",paddingRight:"5px"}}>13</span></p>
          <p style={{paddingLeft:"5px"}}>Siemens<span style={{float:"right",paddingRight:"5px"}}>15</span></p>
        </div><br />
        <div className='more'>More</div>
      </div>
      <div className='products'>
        <div>
        <Corousel/>
        </div><br />
        <div className='pbar'>
          <p style={{textAlign:"center"}}>13 items</p>
          <p style={{textAlign:"center"}}>Sort By</p>
          <select name='items' id='items'>
            <option value="Name">Name</option>
            <option value="Apple">Apple</option>
            <option value="LG">LG</option>
            <option value="Samsung">Samsung</option>
          </select>
          <label htmlFor="show">show</label>
          <select name='number' id='number' style={{width:"70px"}}>
            <option value="number">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <FaBars style={{float:"right"}}></FaBars>
        </div><br /><br /><br /><br />

        <div className='flex-con'>
        {
          data.filter((value)=> value.type === "ipad")
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
      </div>
    </div><br />
    <Footer/>
    </>
  )
}

export default Ipad