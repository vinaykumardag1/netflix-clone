import React from 'react'
import './Homefooter.css'
import {Grid} from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X'
import YouTubeIcon from '@mui/icons-material/YouTube';

const Homefooter = () => {
  return (
    <div className='home-footer'>
       <div className="social-media-icons">
            <FacebookIcon fontSize='large'/>
            <InstagramIcon fontSize='large'/>
            <XIcon fontSize='large'/>
            <YouTubeIcon fontSize='large'/>
        </div>
      <Grid container spacing={2} className='footer-grid'>
        <Grid  sm={3}>
            <ul className='footer'>
                <li>Audio and Subtitle</li>
                <li>Media Center</li>
                <li>Privacy</li>
                <li>Contact Us</li>
            </ul>
        </Grid>
        <Grid  sm={3}>
            <ul className='footer'>
                <li>Audio Description</li>
                <li>Investor Relation</li>
                <li>Legal Notices</li>
             </ul>
        </Grid>
        <Grid  sm={3}>
            <ul className='footer'>
                <li>Help Center</li>
                <li>Jobs</li>
                <li>Cookie Preference</li>
               
            </ul>
        </Grid>
        <Grid  sm={3}>
            <ul className='footer'>
                <li>Gift Cards</li>
                <li>Terms of Use</li>
                <li>Corporate Information</li>
            </ul>
        </Grid>
       
      </Grid>
    
    </div>
  )
}

export default Homefooter
