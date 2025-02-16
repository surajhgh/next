export default function BusinessHosting() {
    return (
      <div className="grid lg:grid-cols-[48%_52%]  ">
        {/* Left Section */}
        <div className=" text-black text-left rounded-2xl  max-w-lg mx-auto justify-center items-center   object-center p-2 ">
          <div className="bg-indigo-400 text-sm font-medium text-[11.34px] font-poppins px-4 py-1 rounded-md inline-block mb-4">
          Zoho CRM
          </div>
          <h2 className="text-[30px] lg:text-[37.8px] font-bold font-montserrat mb-4">
          Transform Your Business with <span className="text-[#0067FF]">Zoho CRM </span>Solutions
          </h2>
          <p className="text-black/80 font-dmsans text-[13.23px] lg:text-[14px] mb-6">
          Take control with Zoho CRM and Nest Nepal: track performance, automate tasks, engage customers, and make data-driven decisions effortlessly.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-black/90">
            <div className="flex items-center text-[13.23px] font-dmsans space-x-2">
              <img className="w-6 h-6" src="./reseller/mess.png" alt="1" />
              <span>Email Archiving</span>
            </div>
            <div className="flex items-center text-[13.23px] font-dmsans space-x-2">
              <img className="w-6 h-6" src="./reseller/shild.png" alt="icon" />
              <span>Fortified</span>
            </div>
            <div className="flex items-center text-[13.23px] font-dmsans space-x-2">
              <img className="w-6 h-6" src="./reseller/filetrans.png" alt="f1" />
              <span>Effortless Migration</span>
            </div>
            <div className="flex items-center text-[13.23px] font-dmsans space-x-2">
              <img className="w-6 h-6" src="./reseller/email.png" alt="message" />
              <span>Branded Email</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-[#0067FF] text-white font-dmsans font-medium text-[16.33px] px-6 py-2 ">
              Check Plans
            </button>
            <button className=" text-black font-dmsans font-medium text-[16.33px] px-6 py-2 ">
              Get a quotation <span>↗</span>
            </button>
            
          </div>
        </div>
  
        {/* Right Section */}
       <div>
        <div className="hidden lg:flex">
          <img className=" rounded-2xl max-h-[506px] " src="./zoho/bg.png" alt="Business Hosting Background" />
        </div>
        <div className="relative lg:top-[-63%] lg:left-[5%] sm:justify-center  hidden lg:flex">
        <p className="font-montserrat font-semibold text-[18px] text-[#0067FF] p-5 text-center">Emails, Social Media and <br /> Beyond with Zoho CRM</p>
        </div>


        <div className=" relative lg:top-[-35%] lg:right-[6%] sm:w-full flex flex-row sm:items-center sm:justify-center sm:object-center bg-[#FFFFFF7a] backdrop-blur-[26px] gap-3 p-6  rounded-md shadow-md max-w-80">
            <div className="max-w-[60.65px] max-h-[60.65px]">
                <img src="./zoho/call.png" alt="call" />
            </div>

            <div className="text-left justify-center items-center object-center">
                <p className="font-dmsans font-bold text-[18px] text-[#393939]">Book appointment

                </p>
                <p className="font-dmsans font-bold text-[12px] text-[#393939]">Speak with our experts about your goals

                </p>
                <button className=" mt-3 font-dmsans font-semibold text-[9.56px] bg-[#0067FF] text-[#FBFCFD] rounded-md px-6 py-2">
                Schedule Now

                </button>
            </div>

        </div>

        
       </div>
      </div>
    );
  }
  