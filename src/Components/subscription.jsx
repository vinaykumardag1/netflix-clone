import React from 'react'
import './subscription.css'
import Container from '@mui/material/Container'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

const subscription = () => {
  return (
    <div className='card-sec'>
     
      <Container>
      <span className='card-head'>A plan to suit your needs</span>
      <div className="card">
       
        <Card className='card-component' >
         <CardContent>
         <div className="card-box">
          <h2>PREMIUM</h2>
          <p>A cinematic experience with the best picture and audio quality.</p>
          <span>₹649/month</span>
         </div>
        </CardContent>
       </Card> 
       
      <Card className='card-component'  >
      <CardContent>
      <div className="card-box">
        <h2>STANDARD</h2>
        <p>All the entertainment you love, in Full HD video quality.</p>
        <span>₹499/month</span>
      </div>
      </CardContent>
      </Card>
    
     <Card className='card-component' >
        <CardContent>
        <div className="card-box">
          <h2>BASIC</h2>
          <p>A great way to enjoy all your favourite shows and movies on a budget.</p>
          <span>₹199/month</span>
         </div>
        </CardContent>
      </Card>
   
     <Card className='card-component'>
    
        <CardContent>
         <div className="card-box">
          <h2>MOBILE</h2>
          <p>A travel-friendly option for your mobile devices.</p>
          <span>₹149/month</span>
          </div>
        </CardContent>
      
      </Card> 
      </div>
      </Container>
     
      
    </div>
  )
}


export default subscription;
