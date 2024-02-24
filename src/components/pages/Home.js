import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header'
import Carousel from '../Carousel'
import Car from '../Car'
import Tub from '../Tub'
import Cards from '../Cards'
import Packet from '../Packet'
import Rating from '../Rating'
import Test from '../Test'
import Rot from '../Rot'
import Map from '../Map'
import Footer from '../Footer'
import Accordian from '../Accordian'
import MyMarquee from '../MyMarquee'
const Home = () => {
  return (
    <div>
      <MyMarquee/>
        <Header/>
        <Carousel/>
        <Car/>
        <Cards/>
        <Packet/>
        <Accordian/>
        <Tub/>
        <Rating/> 
        <Test/>
        <Rot/>
        <Map/>
        <Footer/>

    </div>
  )
}

export default Home