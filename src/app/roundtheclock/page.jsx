import React from 'react'

function page() {
  return ( 
    <div className='grid grid-cols-2 '>
        <div className="bg-gradient-to-br from-[#1818b3] to-[#1565D8] rounded-lg">
          <img src="group.png" alt="group" className="w-[548.82px] h-[548.82px] p-2 pl-6 mt-4" />
            </div>


        <div className=' text-left p-20'>
            <p className='text-5xl font-bold text-[#123455]'>
            Round-the-Clock
            Assistance, Just For You!
            </p>
            <div > <p className='mt-4 mb-3'>
            We work with several leading insurance companies to secure insurance coverages tailored to meet your needs.
            </p></div>

           

            <div className='grid grid-cols-2 mt-4 '>
                <div  className='flex flex-row  gap-2 mt-3'> 
                    <div><img src="cash.png" alt="cash" className='w-8 h-8 ' /></div>
                    <div><p className='font-bold'>Special expat rates </p>
                          <p>Excellent coverage</p>
                    </div>
                  
                </div>

                <div  className='flex flex-row gap-2 mt-3'> 
                    <div><img src="tool.png" alt="cash"  className='w-8 h-8 '/></div>
                    <div><p className='font-bold'>Work life balance </p>
                          <p>Make your life easier</p>
                    </div>
                  
                </div>

                <div  className='flex flex-row gap-2 mt-3'> 
                    <div><img src="callme.png" alt="cash"  className='w-8 h-8 ' /></div>
                    <div><p className='font-bold'>24/7 English Support </p>
                          <p>Call us anytime</p>
                    </div>
                  
                </div>

                <div  className='flex flex-row gap-2 mt-3'> 
                    <div><img src="file.png" alt="cash"   className='w-8 h-8 ' /></div>
                    <div><p className='font-bold'>No paperwork </p>
                          <p>Just sign up & use app</p>
                    </div>
                  
                </div>

                <div>
            <button className='bg-gradient-to-br from-[#1818b3] to-[#1565D8] py-2 px-5 text-white font-medium rounded-lg mt-10'> Contact support</button>
        </div>



            </div>


        </div>

      
      
    </div>
  )
}

export default page
