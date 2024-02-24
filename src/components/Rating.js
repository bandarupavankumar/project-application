import React from 'react'

const Rating = () => {
    const rate =[
        {
            id:1,
            img: 'assets/rating/1a.png',
            describe:'20+',
            area: 'Years Experience',
        },
        {
            id:2,
            img: 'assets/rating/2a.png',
            describe:'15+',
            area: 'Awards Wins',
        },
        {
            id:3,
            img: 'assets/rating/3a.png',
            describe:'4,850+',
            area: 'Trusted Client',
        },
        {
            id:4,
            img: 'assets/rating/4a.png',
            describe:'100%',
            area: 'Client Statisfaction',
        },
    ]
  return (
    <div className='flex gap-20 justify-between ml-5 mr-5 w-full'>
    {rate.map((data) => (
        <div key={data.id} className='flex items-center  p-4 mt-4 '>
            <img src={data.img} alt='Rating' className='w-14 h-14 ' />
            <div className='ml-2'>
                <p className=' font-bold text-2xl '>{data.describe}</p>
                <p className='text-xl'>{data.area}</p>
            </div>
        </div>
    ))}
    
</div>
  )
}

export default Rating