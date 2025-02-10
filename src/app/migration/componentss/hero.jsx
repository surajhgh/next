import React from 'react'

function hero() {
  return (
    <div className='bg-gradient-to-r from-[#2548EF] to-[#4566FE]'>

        <div className='grid grid-cols-2'>
            <div>
                <img src="/migration/www.png" alt="www" />
                <div className='justify-center items-center content-center ml-6'>
                    <p className='font-montserrat font-bold text-5xl text-white'>Migrate to Nest: Your New Digital Home Awaits!</p>
                    <p className='font-dmsans font-medium text-sm text-white'>Nest Nepal is here to make your website migration process smooth, hassle-free, and, best of all, completely free of charge.</p>
                    
          <div className="flex flex-col sm:flex-row gap-6 mt-6 font-dmsans">
            <button className="bg-white text-black font-dmsans font-medium text-sm sm:text-base px-5 py-2 rounded-md">
            Contact Us
            </button>
            <button className="font-dmsans text-sm sm:text-base ">
            WhatsApp Us &#8599;
            </button>
          </div>

                </div>
            </div>



            <div>
                <img src="/migration/col2.png" alt="col2" />

            </div>

        </div>
      
    </div>
  )
}

export default hero
