import React, {useState } from 'react'
import './Banner.css'
import Navbar from './Navbar'
import {useNavigate} from 'react-router-dom'


const Banner = () => {
  const [email,setEmail]=useState('')
  const [pwd,setPwd]=useState('')
  const navigate=useNavigate()
  const handleClick=()=>{
   localStorage.setItem('email',email);
   localStorage.setItem('Password',pwd);
    navigate("/dashboard")
  }
  let time=1000*Math.sqrt(60)*24
  setTimeout(()=>{
      localStorage.removeItem('email')
      localStorage.removeItem('Password')
  },{time})
  

  
 
  return (
    <div className='banner'>
      <div className="banner-op">
        <Navbar/>
        <div className='banner-box' >
         <div className="banner-head">
            <h1> Unlimited movies,<br/> TV shows and<br/> more</h1>
            <p>Starts at ₹149. Cancel anytime.</p>
         
          <form  className="form">
          <input type="email" 
           name='email'
           onChange={(e)=>setEmail(e.target.value)}
           value={email}
           placeholder='enter your email'
           required/>
          <input type="password"
           name='password'
           onChange={(e)=>setPwd(e.target.value)}
           value={pwd} 
           required/> 
          <button type='Submit' onClick={handleClick}>Get Started</button>
          </form>
             
        </div>
        </div> 
      </div>
    <div className="banner-line">
      <div className="banner-inline">

      </div>
    </div> 
      
    </div>
  )
}

export default Banner
