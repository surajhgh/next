

function page() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 ">
    {/* Left Section */}
    <div className="text-center lg:text-left lg:ml-10 lg:mt-20">
      <div>
        <span className="px-2 py-1" style={{
    background: "linear-gradient(to right, #63A3FF, #FFA7A7, #FFE68D, #8EBCFF, #68CB74, #FFC9C9)",
    color: "transparent",
  }}>
    

    <span className="font-poppins font-semibold text-black  text-[14px]  ">Managed GCC Services in Nepal</span>
    

          </span>
        <p className="font-bold mt-5 text-black text-3xl sm:text-4xl lg:text-5xl mb-5 font-montserrat lg:w-[560px]">
        Effortless cloud management with google cloud console
        </p>
        <p>Nest Nepal is here to make your website migration
           process smooth, hassle-free, and, best of all, completely free of charge.</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-6 mt-9 mb-4 font-dmsans">
        <button className="bg-[#1818B3] text-white font-medium rounded-md text-sm sm:text-base px-5 py-2">
          Check Plans
        </button>
        <button className="font-medium text-sm sm:text-base px-5 py-2">
        WhatsApp Us  &#8599;
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4 divide-x-0 sm:divide-x-[1px] divide-y-[1px] sm:divide-y-0 divide-solid divide-black text-left mt-16 mb-2 font-dmsans">
        <div className="text-left max-w-2xl justify-center content-center p-4">
            <img src="./google/checkmark.png" alt="check" className="h-8 w-8 mb-3" />
            <div className="flex gap-0 ">
                <div><img src="./google/vector.png" alt="vector"  className="h-4 w-7"/></div>
                <div><p className="text-[#707070]  font-dmsans font-medium text-[91.7%] ">Easy Website Scaling</p></div>
            
            </div>
          
        </div>
        <div className="text-left max-w-2xl justify-center content-center p-4">
            <img src="./google/checkmark.png" alt="check" className="h-8 w-8 mb-3" />
            <div className="flex gap-0 ">
                <div><img src="./google/globe.png" alt="vector"  className="h-4 w-7"/></div>
                <div><p className="text-[#707070] text-[81.7%] font-dmsans font-medium  ">Effortless Website Operations </p></div>
            
            </div>
          
        </div>
        <div className="text-left max-w-2xl justify-center content-center p-4">
            <img src="./google/checkmark.png" alt="check" className="h-8 w-8 mb-3" />
            <div className="flex gap-0 ">
                <div><img src="./google/cloud.png" alt="vector"  className="h-4 w-7"/></div>
                <div><p className="text-[#707070]  font-dmsans font-medium   text-[91.7%]">Flexible Storage for Growth</p></div>
            
            </div>
          
        </div>
        <div className="text-left max-w-2xl justify-center content-center p-4">
            <img src="./google/checkmark.png" alt="check" className="h-8 w-8 mb-3 hidden sm:flex" />
            <div className="flex gap-0 ">
                <div><img src="./google/power.png" alt="vector"  className="h-4 w-7"/></div>
                <div><p className="text-[#707070]   font-dmsans font-medium  text-[91.7%]  "> Blazing-Fast Content Delivery</p></div>
            
            </div>
          
        </div>
      </div>
    </div>




    {/* {rightsec} */}


    <div className="justify-center items-center object-fill ml-20 hidden sm:flex">
        <img src="./google/grid2.png" alt="grid" className="max-h-[496px] bg-cover bg-center max-w-[569.27px] mt-5 mb-4  "/>
        <div className=" absolute top-[54%] left-[78%]  text-center   bg-white shadow-md  w-[216.38px] h-[156.47px] rounded-md ">
            <div className="max-w-5xl flex justify-center"><img src="./google/cal.png" alt="cal"  className="w-9 h-9    "/></div>
            <div><p className=" mt-2 font-dmsans font-medium text-black text-[15.99px] ">Book appointment</p>
            <p className="text-[#6D6969] font-dmsans font-medium text-[10.82px] flex max-w-[80%] ml-4 ">Speak with our experts about your goals</p>
            <button className=" mt-2 bg-[#1818B3] px-5 py-2 text-white font-medium font-dmsans  text-[10.82px]">Schedule Now</button></div>
        </div>

    </div>




    </div>

  )
}

export default page;
