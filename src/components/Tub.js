import React, { useState } from 'react'
import { ChevronRight } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';
const Tub = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleClickLeft = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 3 : prevIndex - 1));
    };

    const handleClickRight = () => {
        setCurrentIndex((prevIndex) => (prevIndex === data.length - 3 ? 0 : prevIndex + 1));
    };
    

    const data = [
        {
            id: 1,
            image: 'assets/tube/1a.jpg',
            title: 'KALI MAA PRAYERS',
            describe: 'Psychic Astrologer Shivanand Ji astrologer may do Puja for kail Maa in New York, USA in accordance with the rites and greatest degree.'
        
        },
        {
            id: 2,
            image: 'assets/tube/2a.jpg',
            title: 'LAXMI MAA PRAYERS',
            describe: 'Psychic Astrologer Shivanand Ji astrologer may do Puja for Lasxmi Maa in New York, USA in accordance with the rites and greatest degree.'
        
        },
        {
            id: 3,
            image: 'assets/tube/3a.jpg',
            title: 'DURAGA MAA PRAYERS',
            describe: 'Psychic Astrologer Shivanand Ji astrologer may do Puja for Durga Maa in New York, USA in accordance with the rites and greatest degree.'
        
        },
        {
            id: 4,
            image: 'assets/tube/4a.jpg',
            title: 'SPIRITUAL HEALING',
            describe: 'Energy healing is a keu form of spiritual healing used by Psychic and Astrologer Shivanand Ji. He has receivedd training in a variety of energy healing therapies. '
        
        },
        {
            id: 5,
            image: 'assets/tube/5a.jpg',
            title: 'LORD HANUMAN POOJA',
            describe: 'Astrologer Shivanand Ji astrologer may do Puja for Hanuman Maa in New York, USA in accordance with the rites and greatest degree.'
        
        },
        {
            id: 6,
            image: 'assets/tube/6a.jpg',
            title: 'RADHAKRISHNA POOJA',
            describe: ' Astrologer Shivanand Ji astrologer may do Puja for Radha Krishna for better bonding for Couples in with the rites and greatest degree in New York, USA.'
        
        },
        {
            id: 7,
            image: 'assets/tube/1a.jpg',
            title: 'BUSINESS PROBLEM SOLUTION',
            describe: ' Astrologer Shivanand Ji provides issue resolution services in New York, USA that are intended to provide insight and direction.'
        
        },
        {
            id: 1,
            image: 'assets/tube/1a.jpg',
            title: 'KALI MAA PRAYERS',
            describe: 'Psychic Astrologer Shivanand Ji astrologer may do Puja for kail Maa in New York, USA in accordance with the rites and greatest degree.'
        
        },
    ]
  return (
    <div className="relative">
        <h1 className=' text-xl text-violet-950 text-center font-semibold'>Related Services</h1>
        <h2 className=' text-red-900 text-center text-3xl font-extrabold mb-2'>SERVICES WE OFFER FOR YOU</h2>
    <div className="flex overflow-hidden sm:scale-100 xl:scale-100 m-4 shadow-lg rounded-lg ">
        
        {data.slice(currentIndex, currentIndex + 3).map((item) => (
            <div key={item.id} className="w-1/3 p-4 border  sm:w-1/2">
                <img src={item.image} alt={item.title} className="w-full h-auto rounded-lg" />
                <h2 className="text-red-900 font-semibold text-xl mt-2">{item.title}</h2>
                <p className="text-gray-700 mt-2">{item.describe}</p>
            </div>
        ))}
    </div>
    <button
        onClick={handleClickLeft}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 px-2 py-1 p-5 bg-gray-300 border rounded-full hover:bg-red-900 hover:animate-pulse"
    >
        <ChevronLeft/>
    </button>
    <button
        onClick={handleClickRight}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 px-2 py-1 p-5 bg-gray-300 border rounded-full hover:bg-red-900 hover:animate-pulse"
    >
        <ChevronRight/>
    </button>
</div>
  )
}

export default Tub