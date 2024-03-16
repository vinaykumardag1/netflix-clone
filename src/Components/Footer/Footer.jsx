import React from 'react'
import './Footer.css'
import {Container,Grid} from '@mui/material' 
const Footer = () => {
  return (
    <div className='footer'>
      <Container>
        <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
        <input type="email" placeholder='email address'/>
        <button>Get Started</button>
         <div className="customer-care">
          <span>Questions? <a href="">Call 000-800-919-1694</a></span>
         </div>
        <Grid container spacing={1} className='grid'>
          <Grid xs={12} sm={3}>
            <ul type='none' className='listitems'>
              <li><a href="">FAQ</a></li>
              <li><a href="">Investor Relation</a></li>
              <li><a href="">Privacy</a></li>
              <li><a href="">Speed Test</a></li>
            </ul>
          </Grid>
          <Grid xs={12} sm={3}>
            <ul type="none" className='listitems'>
              <li><a href="">Help Center</a></li>
              <li><a href="">Jobs</a></li>
              <li><a href="">Cookie Reference</a></li>
              <li><a href="">Legal Notice</a></li>
            </ul>
          </Grid>
          <Grid xs={12} sm={3}>
          <ul type="none" className='listitems'>
              <li><a href="">Account</a></li>
              <li><a href="">Ways to Watch</a></li>
              <li><a href="">Corporate Information</a></li>
              <li><a href="">Only on Netflix</a></li>
            </ul>
          </Grid>
          <Grid xs={12} sm={3}>
          <ul type="none" className='listitems'>
              <li><a href="">Media Center</a></li>
              <li><a href="">Terms of use</a></li>
              <li><a href="">Contact us</a></li>
            </ul>
          </Grid>
        </Grid>
        </Container>
    </div>
  )
}

export default Footer
