import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import './play.css'

const play = () => {
  return (
    <>
    <p style={{width:'400px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium qui deserunt inventore voluptatibus consectetur dicta quidem repellat porro quasi. Est voluptate non fugiat suscipit, reiciendis ab. Ipsum rem recusandae voluptatibus.</p>
    <div className='play_plause' >
        <div className="btns">
      <button>
        <PlayArrowIcon color='black'/>
        PlayNow
      </button>
      <button>
        <ErrorOutlineIcon/>
        More Info
      </button>
      </div>
      <div className="btns_2">
        
      </div>
    </div>
   
    </>
  )
}

export default play
