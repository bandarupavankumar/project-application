import { Phone } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
const Rot = () => {
  return (
    <div className="relative">
    <img src="assets/icons/bghero1.jpg" alt="all" className="w-full  h-96 rounded-md mt-9" />
    <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-white m-5 float-left bg-opacity-80 p-4 rounded-md">
        <h2 className="text-2xl font-extrabold mt-2 text-red-900">BEST ASTROLOGER IN NEW YROK USA</h2>
        <p className="text-gray-700 font-bold mt-4">FAMOUS ASTROLOGER IN NEW YORK USA SOLVE ALL YOUR PROBLEM WITH IN FEW TIME CONTACT FOR IMMEDIATE SOLUTION</p>
        <br />
        <p className=' text-gray-700 mb-5 mt-5 flow-root'>Our Astrologer, Pandit Shivanand has made the precise and correct predictions for several Businessman, Dentists, Solicitors and Doctors. Our Astrologer has followers in more than Twenty countries like <span className=' text-black font-bold'>India, USA, Canada, UK, Australia, Germany, Singapore, Malaysia, Indonesia, Philippines, New Zealand, Netherlands, Guyana, Barbados, Jamaica, Colombia, Sweden, Switzerland, Norway, France, Nepal, Sri Lanka and many more.</span> </p>
        <Link className=' bg-red-900 text-white border hover:bg-white hover:text-black p-3 m-4 animate-bounce'>
            CONTACT US
        </Link>
        <Link className=' border bg-white text-black p-3 hover:bg-red-900 hover:text-white '>
            VIEW SERIVCES
        </Link>
    </div>
    <div className=' absolute right-0 top-0 bottom-0 w-1/2 flex justify-center items-center'>
        <span className=' text-white align-bottom'> 
        <Phone className=' w-8 h-8 rounded-full p-9 animate-bounce bg-white'/>
        </span>

    </div>
</div>
  )
}

export default Rot