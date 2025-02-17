import React from 'react';

function Benefits() {
  return (
    <div className='container mx-auto p-8'>
      <div className='text-center p-2'>
        <p className='font-montserrat font-bold text-3xl md:text-4xl text-black'>Benefits of Python Hosting</p>
        <p className='font-poppins text-sm md:text-base text-[#696d67] mt-2'>
          Optimize your website with our secure, high-performance Python-based hosting—tailored for Django, Flask, and more.
        </p>
      </div>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-6'>
        <div className='bg-[#A8D1E7] rounded-md shadow-lg flex flex-col justify-between'>
          <div className=' p-6'>
            <p className='font-poppins font-semibold text-xl text-white'>Real-time Collaboration</p>
            <p className='font-inter text-xs text-white mt-2'>Seamless teamwork with instant updates.</p>
          </div>
          <img src='/benefits/ss.png' alt='Real-time Collaboration' className='w-full mt-4' />
        </div>
        
        <div className='grid grid-cols-1 gap-6'>
          <div className='bg-[#B3DBD8] rounded-md shadow-lg  flex flex-col justify-between'>
            <div className='p-6'>
              <p className='font-poppins font-semibold text-xl text-white'>Community Support</p>
              <p className='font-dmsans text-xs text-white mt-2'>Get help from an active developer community.</p>
            </div>
            <img src='/benefits/www.png' alt='Community Support' className='w-full mt-4 mb-6' />
          </div>
          
          <div className='bg-white shadow-md rounded-md  flex flex-col justify-between'>
            <div className='p-6'>
              <p className='font-poppins font-semibold text-xl text-black'>Version Control</p>
              <p className='font-dmsans text-xs text-black mt-2'>Rollback to any previous deploy in seconds.</p>
            </div>
            <img src='/benefits/rrr.png' alt='Version Control' className='w-full mt-4 ' />
          </div>
        </div>
        
        <div className='grid grid-cols-1 gap-6'>
          <div className='bg-[#E0F1FE] rounded-md shadow-lg flex flex-col justify-between'>
            <div className=' p-6'>
              <p className='text-black font-poppins font-semibold text-xl'>Staging</p>
              <p className='font-dmsans text-xs text-[#252222] mt-2'>Test changes before deploying.</p>
            </div>
            <img src='/benefits/nest.png' alt='Staging' className='w-full mt-4' />
          </div>
          
          <div className='bg-[#BFCFFF] rounded-md shadow-lg  flex flex-col justify-between'>
            <div className='p-6'>
              <p className='font-poppins font-semibold text-xl text-black'>Scalability</p>
              <p className='font-dmsans text-xs text-[#393939] mt-2'>Pages optimized for fast performance.</p>
            </div>
            <img src='/benefits/round.png' alt='Scalability' className='w-full mt-4' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
