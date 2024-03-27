import React from 'react'
import Dashnav from '../Dashnav/Dashnav'
import './Cinema.css'
import MenuIcon from '@mui/icons-material/Menu';
import WidgetsIcon from '@mui/icons-material/Widgets';
import Play from '../play'
import image_logo from '../Tvshows/Tvshowimages/movie-logo.png'
import Movies from '../movies/Movies';
const Cinema = () => {
  return (
    <>
    <div className='new-movies'>
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
    <img src={image_logo} alt="" />
    <Play/>
   
    </div>
    <Movies/>
    </>
  )
}

export default Cinema
