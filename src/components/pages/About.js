import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header'
import Priabout from '../Priabout'
import MyMarquee from '../MyMarquee'
import Carabout from '../Carabout'
import Map from '../Map'
import Footer from '../Footer'
const about = () => {
  return (
    <div>
      <MyMarquee/>
      <Header/>
      <Priabout/>
      <Carabout/>
      <Map/>
      <Footer/>
    </div>
  )
}

export default about