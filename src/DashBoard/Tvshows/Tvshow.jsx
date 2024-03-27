import React from 'react'
import './Tvshow.css'
import Dashnav from '../Dashnav/Dashnav'
import MenuIcon from '@mui/icons-material/Menu';
import WidgetsIcon from '@mui/icons-material/Widgets';
import logo from './Tvshowimages/logo.png'
import Play from '../play'
import Movies from '../movies/Movies';
const Tvshow = () => {
  return (
    <>
    <div className='tv-banner'>
        <Dashnav/>
     <div className="header-top">
        <div className="tv-header">
            <h1>TV Shows</h1>
            <select>
                <option value="Genre">Genre</option>
            </select>
        </div>
        <div className="sort">
            <MenuIcon/>
            <WidgetsIcon/>
        </div>
    </div>
      <img src={logo} alt="Demon slayer logo" />
      <Play/>
     
    </div>
     <Movies/>
     </>
  )
}

export default Tvshow
