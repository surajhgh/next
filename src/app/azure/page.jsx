import React from 'react'

function page() {
  return (
    <div className='grid grid-cols-2 justify-center p-9  '>
        <div className='z-20 p-4 '>
            <p> <span className='bg-gradient-to-r from-[#35B8ED] to-[#5B7CFF] py-1 px-2 font-bold'>Microsoft Azure</span></p>
           <div className='mt-5 mb-5 text-6xl text-black font-bold'>
           <p>Migrate to Nest: Your 
                  New Digital Home
                      Awaits!</p>
           </div>
            <p className='text-base text-[#393939] '>Nest Nepal is here to make your website 
                migration process smooth, hassle-free, and, best of all, completely free of charge.</p>
            <div className="flex flex-row gap-6 mt-6">
          <button type="button" className="bg-[#0E5298] text-white px-5 py-2">
            Contact Us
          </button>
          <button type="button">WhatsApp Us &#8599;</button>
        </div>
        </div>


       <div>
       <div className='hidden xl:flex object-contain mb-16 p-3 '>
               <img src="azure.png" alt="azure"  className='h-[500px] w-[900px] z-20'/>
                {/* <Image height={1200} width={900} alt='photoshop' src="/azure.png"/> */}
            </div>
            <div
                   className='absolute top-[-10%] left-[72%] h-0 w-0 lg:min-h-[500px] lg:min-w-[500px] z-10 hidden xl:block'
                     style={{
                   background: "radial-gradient(circle, rgba(74, 185, 240, 0.5) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 1) 100%)"
                    }}
               ></div>

                  <div
                   className='absolute top-[13%] left-[40%]  h-0 w-0 lg:min-h-[500px] lg:min-w-[500px] z-10 hidden xl:block'
                     style={{
                   background: "radial-gradient(circle, rgba(74, 185, 240, 0.5) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 1) 100%)"
                    }}
               ></div>



       </div>
      
    </div>
  )
}

export default page
