import React from 'react'

function blogs() {
  return (
    <div className='container'>
        <div className=' grid lg:grid-cols-3 gap-4 '>
            <div className=' grid grid-rows-2 border-2 rounded-md'>
                <div>
                    <img src="/blogs/b2.png" alt="b1" />

                </div>
                <div className=' justify-center p-3 text-left items-center content-center'>
                    <p className=' font-dmsans font-medium text-base text-[#393939]'>How to host a website? Beginner’s
                    guide!</p>
                    <p className='font-dmsans text-xs text-[#707070] mt-2'>Know the essential steps required for web hosting,
                    right from domain name to server settings.</p>
                    <button className=' font-dmsans text-[12px] bg-[#111111] text-white px-4 py-2  mt-2'>Read full blog</button>
                </div>

            </div>

            <div className=' grid grid-rows-2 border-2 rounded-md'>
                <div>
                    <img src="/blogs/b3.png" alt="b1" />

                </div>
                <div className=' justify-center p-3 text-left items-center content-center'>
                    <p className=' font-dmsans font-medium text-base text-[#393939]'>How to find the right web hosting
                    company for your startup website?</p>
                    <p className='font-dmsans text-xs text-[#707070] mt-2 '>Startup founders, get ready to understand your
                    website's needs and explore hosting options.</p>
                    <button className=' font-dmsans text-[12px] bg-[#111111] text-white px-4 py-2 mt-2'>Read full blog</button>
                </div>

            </div>

            <div className=' grid grid-rows-2 border-2 rounded-md'>
                <div>
                    <img src="/blogs/b1.png" alt="b1" />

                </div>
                <div className=' justify-center p-3 text-left items-center content-center'>
                    <p className=' font-dmsans font-medium text-base text-[#393939]'>Web hosting services on its way for a
                    colossal growth</p>
                    <p className='font-dmsans text-xs text-[#707070] mt-2'>Know about the various web hosting services
                    available and the advantages of using them.</p>
                    <button className=' font-dmsans text-[12px] bg-[#111111] text-white px-4 py-2 mt-2'>Read full blog</button>
                </div>

            </div>

     



        </div>
      
    </div>
  )
}

export default blogs
