import React from "react";

function Page() {
  return (
    <div className="grid grid-cols-2">
      {/* Content Section */}
      <div className="justify-center container mt-9 p-10">
        <p>
          <span className="bg-[#0B5CFF] px-1 py-0 text-white">zoom</span>
        </p>
        <p className="text-[#000000] text-5xl font-bold mt-4 mb-4">
          Migrate to Nest: Your New Digital Home Awaits!
        </p>
        <p>
          Nest Nepal is here to make your website migration process smooth,
          hassle-free, and, best of all, completely free of charge.
        </p>
        <div className="flex flex-row gap-6 mt-6">
          <button type="button" className="bg-[#0B5CFF] text-white px-5 py-2">
            Contact Us
          </button>
          <button type="button">WhatsApp Us &#8599;</button>
        </div>
      </div>

     
      <div
        className="max-h-3xl bg-cover bg-center max-w-3xl mt-5 mb-4"
        style={{ backgroundImage: "url('lgrid.png')" }}
      >
        <div className="rounded-md justify-center text-center ml-16 mt-10 relative mr-60 mb-80">
          <div className="bg-[#F0EBEB] p-6 rounded-3xl relative">
            <div className="bg-white rounded-2xl flex flex-row gap-4 p-4">
              <img
                src="22.png"
                alt="zoom icon"
                className="object-contain max-w-20 max-h-20 relative right-16"
              />
              <div className="flex flex-col justify-center relative right-14">
                <p className="text-[#393939] font-bold">Book appointment</p>
                <p className="text-[#393939] text-sm">
                  Speak with our experts about your goals
                </p>
                <button
                  type="button"
                  className="bg-[#0B5CFF] text-white px-3 py-2 rounded-lg mt-4"
                >
                  Schedule Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
