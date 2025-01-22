import React from "react";

function Page() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
      {/* Left Section */}
      <div className="text-center lg:text-left lg:ml-10 lg:mt-20">
        <div>
          <p className="font-bold text-black text-3xl sm:text-4xl lg:text-5xl mb-5 font-montserrat lg:w-[560px]">
            Enhance your{" "}
            <span className="bg-gradient-to-r from-[#336D9D] to-[#FFDE54] px-1 rounded-xl">
              Python
            </span>{" "}
            Hosting Experience
          </p>
          <ul className="text-left text-sm sm:text-base text-[#242424] font-dmsans space-y-4">
            <li>&#10004; Pre-configured setups for Django, Flask, and FastAPI.</li>
            <li>&#10004; Secure apps with SSL, firewalls, and malware scans.</li>
            <li>&#10004; Scale CPU, memory, and storage effortlessly.</li>
            <li>&#10004; Maintain fast response times during high traffic.</li>
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 mt-9 mb-4 font-dmsans">
          <button className="bg-[#0E0E0F] text-white font-medium text-sm sm:text-base px-5 py-2">
            Check Plans
          </button>
          <button className="font-medium text-sm sm:text-base px-5 py-2">
            Get a quotation  &#8599;
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 divide-x-2  divide-solid divide-black text-left mt-16 mb-2 font-dmsans">
          <div className="text-center">
            <p className="font-bold text-[#000000] text-2xl sm:text-4xl">10k+</p>
            <p className="text-black text-sm sm:text-base">Clients Served</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-[#000000] text-2xl sm:text-4xl">30k+</p>
            <p className="text-black text-sm sm:text-base">Websites Hosted</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-[#000000] text-2xl sm:text-4xl">390</p>
            <p className="text-black text-sm sm:text-base">Resources</p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div
        className="max-h-[524px] bg-cover bg-center max-w-full lg:max-w-[1730px] "
        style={{ backgroundImage: "url('./python/bggrid.png')"  }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="h-[416px] w-[300px] sm:w-[400px] lg:w-[464px] relative lg:left-[-36%] top-9 mx-auto lg:mx-0 ">
            <img src="./python/shock.png" alt="shock" />
          </div>
          <div>
            <img
              src="./python/schedule.png"
              alt="inc"
              className="h-[120px] sm:h-[182px] w-[240px] sm:w-[296px] mt-10 mx-auto lg:mx-0"
            />
            <div className="grid gap-1 mt-1 content-center items-center">
              <button className="text-[#1818B3] font-semibold bg-[#EFF8FF] text-center rounded-md flex justify-center p-2 gap-2 font-dmsans mx-auto lg:mx-0 max-w-[94%]">
                <img
                  src="./python/date1.png"
                  alt="date"
                  className="h-5 w-5"
                />
                Book Now
              </button>
              <button className="text-[#1818B3] font-semibold bg-[#EFF8FF] text-center rounded-md flex justify-center p-2 gap-2 font-dmsans mx-auto lg:mx-0 max-w-[94%]">
                <img
                  src="./python/vector.png"
                  alt="vector"
                  className="h-5 w-5"
                />
                Find out more
              </button>
              <img
                src="./python/inc.png"
                alt="inc"
                className="h-[80px] sm:h-[116px] w-[240px] sm:w-[296px] mt-5 mx-auto lg:mx-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
