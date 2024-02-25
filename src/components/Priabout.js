import React from 'react'

const Priabout = () => {
  return (
    <div className="relative">
      <div className="z-10 bg-center bg-cover bg-no-repeat relative">
        <img
          src="assets/icons/bghero1.jpg"
          className="h-56 w-full object-cover"
          alt="Product"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className=" font-semibold text-4xl">About Us</h2>
            <ul className="m-0 p-0 list-none flex">
              <li>
                <a href="#" className=" pr-5 pl-4 text-lg">
                  Home
                </a>
              </li>
              <li className=" rotate-12">|</li>
              <li className=" pl-3 text-lg">About Us</li>
            </ul>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Priabout