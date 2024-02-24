import React from 'react'
import { Link } from 'react-router-dom'

const Packet = () => {
  return (
    <div className='relative  '>
    <img src="assets/serivce/10a.jpg" alt="ds" className='h-full w-full xl:max-w-full object-cover xl:h-96' />
    <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white'>
        <h1 className='font-semibold text-xl md:text-3xl lg:text-4xl xl:text-5xl'>FAMOUS ASTROLOGER IN USA</h1>
        <p className='text-sm xl:ml-11 md:text-base xl:flow-root xl:mt-2 lg:text-lg xl:text-xl text-center px-4'>As a leading and Famous Indian astrologer in New York USA, Shivanand ji offers reliable and practical Astrology solutions to all the life problems.</p>
        <div className='flex gap-4 mt-4 mr-4 xl:mr-4'>
            <Link to="" className='text-white bg-red-900 border p-2 md:p-3 lg:p-4 xl:p-5 hover:bg-white hover:text-black'>
                VIEW SERVICES
            </Link>
            <Link to="" className='text-red-900 border p-2 md:p-3 lg:p-4 xl:p-5 bg-white hover:bg-red-900 hover:text-white'>
                CONTACT US
            </Link>
        </div>
    </div>
</div>

  )
}

export default Packet