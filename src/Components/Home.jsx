import React from 'react'
import Banner from './Banner'
import Subscription from './subscription'
import More from './More/More'
import Accordions from './Accordions/Accordions'
import Footer from './Footer/Footer'
const Home = () => {
  return (
    <div>
      <Banner/>
      <Subscription/>
      <More/>
      <Accordions/>
      <Footer/>

    </div>
  )
}

export default Home
