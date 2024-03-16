import React from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Dashboard from './DashBoard/Dashboard'
import Home from './Components/Home'
const App = () => {
  return (
    <div>
      
     
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>

    </div>
  )
}

export default App
