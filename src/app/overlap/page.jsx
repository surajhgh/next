import React from 'react'

function page() {
  return (
  <div className='grid grid-cols-3 bg-gradient-to-t from-[#1565D8]  to-[#1818B3]  '>
    <div className='p-4 mt-20'>
        <img src="hacncy1.png" alt="hacncy" />

    </div>
    <div className='mt-16 '>
        <p className=' text-center text-6xl font-bold text-white'> About Us</p>
        <p className=' text-center text-white'> Discover exciting career paths with Nest Nepal, 
            where innovation meets excellence in the ever-evolving world of web hosting solutions.</p>
        <div className='flex flex-row gap-6 ml-24'> 
            <button className='text-black bg-white px-8 py-2'>Join Us</button>
            <button className='text-white'>View open Positions</button>
            </div>

    </div>
    <div className=' '>
        <img src="frame.png" alt="frmae" />
    

    </div>

  </div>
  )
}

export default page
