import React from 'react';

function Page() {
  return (
    <div
      className="max-h-[524px] bg-cover bg-center max-w-[1730px] "
      style={{ backgroundImage: "url('/bgimg.png')" }} 
    >
      <div className="flex flex-row container mt-6 ml-6 p-6 rounded-lg">
        <div className="mt-10">
          <p className="text-bold text-white text-1xl">Buy Web Hosting</p>
          <p className="text-4xl text-white font-bold">
            Faster, Secure & <br></br>Powerful Web<br></br> Hosting Services
          </p>
          <ul className="text-white p-3">
            <li> Free domain and SSL </li>
            <li> Install WordPress in 1-click </li>
            <li> 24/7 Customer support</li>
            <li> Seamless Performance </li>
          </ul>

          <p className="text-white">
            Rs <span className="text-3xl">1200</span> per annum
          </p>

          <div className='flex flex-row gap-36'>          
            <div className="flex flex-row gap-6 mt-4">

              <button className="bg-white text-black px-4 -py-2 ">
                Get Started
              </button>
              <button className="border-2 border-white text-white px-5 py-2 ">
                Learn More
              </button>
           </div>



           <div className="flex flex-row gap-6 text-white divide-x divide-gray-400 mt-3">
             <div className="pr-6">
               <p className="text-2xl font-bold">10,000+</p>
               <p className="text-xs">Websites Hosted</p>
           </div>
           <div className="pl-6">
              <p className="text-2xl font-bold">15,000+</p>
              <p className="text-xs">Happy Customers</p>
           </div>
         </div>







          </div>


        </div>
      </div>
    </div>
  );
}

export default Page;
