import React from 'react'
import Mainpage from './Mainpage'
import Movies from './movies/Movies'
import Homefooter from './Homefooter'
const Dashboard = () => {
  return (
    <div>
      <Mainpage />
      <Movies/>
      <Homefooter/>
    </div>
  )
}

export default Dashboard
