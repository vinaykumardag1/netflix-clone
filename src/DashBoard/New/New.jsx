import React from 'react'
import './New.css'
import Dashnav from '../Dashnav/Dashnav'
import image1 from './images/image14.png'
import image2 from './images/image15.png'
import image3 from './images/image16.png'
import image4 from './images/image17.png'

const New = () => {
    const arr=[image1,image2,image3,image4]
  return (
    <div className='new'>
        <Dashnav/>
        {arr.map((item)=>(
            <img src={item} alt="image" />
        ))}
    </div>
  )
}

export default New
