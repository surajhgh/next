export default function BusinessHosting() {
  return (
    <div className="grid lg:grid-cols-[33%_66%] gap-6 p-2">
      {/* Left Section */}
      <div className="bg-gradient-to-b from-[#2626C0] to-[#6060E1] text-white text-left rounded-2xl p-8 max-w-lg mx-auto shadow-lg">
        <div className="bg-indigo-400 text-sm font-medium text-[11.34px] font-poppins px-4 py-1 rounded-md inline-block mb-4">
          Business Hosting
        </div>
        <h2 className="text-[30px] lg:text-[37.8px] font-bold font-montserrat mb-4">
          Grow your Business with Nest Nepal.
        </h2>
        <p className="text-white/80 font-dmsans text-[13.23px] lg:text-[14px] mb-6">
          White-label reseller solutions, scalable plans, advanced security, and 24/7 expert support for your business.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-white/90">
          <div className="flex items-center text-[13.23px] font-dmsans space-x-2">
            <img className="w-6 h-6" src="./nepalvps/1.png" alt="1" />
            <span>Email Archiving</span>
          </div>
          <div className="flex items-center text-[13.23px] font-dmsans space-x-2">
            <img className="w-6 h-6" src="./nepalvps/icon.png" alt="icon" />
            <span>Fortified</span>
          </div>
          <div className="flex items-center text-[13.23px] font-dmsans space-x-2">
            <img className="w-6 h-6" src="./nepalvps/f1.png" alt="f1" />
            <span>Effortless Migration</span>
          </div>
          <div className="flex items-center text-[13.23px] font-dmsans space-x-2">
            <img className="w-6 h-6" src="./nepalvps/message.png" alt="message" />
            <span>Branded Email</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-white text-[#1818b3] font-dmsans font-medium text-[16.33px] px-6 py-2 shadow hover:bg-blue-100 transition">
            Check Plans
          </button>
          <a
            href="#"
            className="text-white/80 font-medium font-dmsans flex items-center space-x-1"
          >
            <span>Get a quotation</span>
            <span>↗</span>
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden lg:flex">
        <img className=" rounded-2xl" src="bg.png" alt="Business Hosting Background" />
      </div>
    </div>
  );
}
