import React from 'react'
import './Mainpage.css'
import Dashnav from './Dashnav/Dashnav'
import Money_heist from './mainHomeimages/money-heist.png'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';

const Mainpage = () => {
  return (
    <div className='container-banner'>
      <Dashnav/>
      <div className="banner-data">
        <img src={Money_heist} alt="" /><br/>
        <button>
            <PlayArrowIcon className='mui-svg'/>
            Play Now</button>
        <button className='more-info'>
            <ErrorOutlineIcon className='mui-svg'/>
            More info
        </button>
      </div>
      <hr />
      <ul className='genre-list'>
        <li>Thriller</li>
        <li>Drama</li>
        <li>Crime</li>
        <li className='btn-list'>
            <PlayCircleFilledOutlinedIcon className='mui-svg svg-size' fontSize='large'/>
            <ExpandCircleDownOutlinedIcon className='svg-size'  fontSize='large'/>
           
        </li>
      </ul>
    </div>
  )
}

export default Mainpage
