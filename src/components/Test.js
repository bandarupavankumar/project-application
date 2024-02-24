import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState } from 'react'

const Test = () => {
    const data = [
        {
            id:1,
            img: "assets/rating/client-4.webp",
            name: 'Rosaline Willium',
            title: 'Happy Customer',
            review: 'Pandith Shivanand hass helped me immensely by guiding me through the diffcult paths of love with the help of his love psychic reading and Guided me as a Family Member to clear my Problems.',
            imgUrl:'assets/rating/5b.jpg',
        },
        {
            id:2,
            img: "assets/rating/2b.webp",
            name: 'Maunika Eascobar',
            title: 'Happy Customer',
            review: 'great spirital qulities, well grounded and sharp in predictions. He is an Intelligent, Genuine person',
            imgUrl:'assets/rating/5b.jpg',
        },
        {
            id:3,
            img: "assets/rating/3b.webp",
            name: 'Miranda Halim',
            title: 'Happy Customer',
            review: 'what a gift and blessing to meet sucha Devotional Personality who is Very down to earth. Highly Recommended for all your needs.',
            imgUrl:'assets/rating/5b.jpg',
        },
        {
            id:4,
            img: "assets/rating/4b.webp",
            name: 'kilian Anderson',
            title: 'Happy Customer',
            review: 'what a gift and blessing to meet sucha Devotional Personality who is Very down to earth. Highly Recommended for all your needs.',
            imgUrl:'assets/rating/5b.jpg',
        }

    ]
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleClickLeft = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 3 : prevIndex - 1));
    };

    const handleClickRight = () => {
        setCurrentIndex((prevIndex) => (prevIndex === data.length - 3 ? 0 : prevIndex + 1));
    };
  return (
    <div className="relative h-screen ">
        <h1 className=' mt-10 text-xl text-violet-950 text-center font-semibold'>Testimonals</h1>
        <h2 className=' text-red-900 text-center text-3xl font-extrabold mb-2'>WHAT OUR CUSTOMER SAY</h2>
    <div className="flex overflow-hidden ">
        
        {data.slice(currentIndex, currentIndex + 3).map((item) => (
            <div key={item.id} className="w-1/2  p-4 border m-6 rounded-md sm:scale-100 xl:scale-75  sm:w-1/2 flex flex-col items-center shadow-lg">
                <img src={item.img} alt={item.title} className="w-15 items-center rounded-full h-15" />
               <div className=' flex flex-col'>
               <h2 className="text-balck font-semibold text-3xl text-center mt-2">{item.name}</h2>
               <h2 className="text-black font-semibold text-xl text-center mt-2">{item.title}</h2>
               </div>
                <p className="text-gray-700 mt-2 flow-root text-center mb-3">{item.review}</p>
                <img src={item.imgUrl} alt={item.id} className=' h-10 w-14' />

            </div>
        ))}
    </div>
    <button
        onClick={handleClickLeft}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 px-2 py-1 p-7 bg-white animate-pulse rounded-full hover:bg-red-900 hover:animate-pulse"
    >
        <ChevronLeft/>
    </button>
    <button
        onClick={handleClickRight}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 px-2 py-1 p-7 bg-white animate-pulse  rounded-full hover:bg-red-900 hover:animate-pulse"
    >
        <ChevronRight/>
    </button>
</div>
  )
}

export default Test