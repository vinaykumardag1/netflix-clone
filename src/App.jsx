import React from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Dashboard from './DashBoard/Dashboard'
import Tvshow from './DashBoard/Tvshows/Tvshow'
import New from './DashBoard/New/New'
import Mylist from './DashBoard/Mylist/Mylist'
import Home from './Components/Home'
import Cinema from './DashBoard/Cinema/Cinema'

const App = () => {
  return (
    <div>
      
     
      <Routes>
        <Route path='/' element={<Home/>}/>
        
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/tvshows' element={<Tvshow/>} />
        <Route path='/movies' element={<Cinema/>} />
        <Route path='/newpopular' element={<New/>} />
        <Route path='/mylist' element={<Mylist/>}/>
      </Routes>

    </div>
  )
}

export default App
