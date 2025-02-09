import React from "react";

// Data array for solutions
const solutions = [
  {
    category: "Workspace Solutions",
    items: [
      { name: "Google Workspace", icon: "/nav/google.png", des:"White-Labeled Solutions to Grow and Scale Your Business",},
      { name: "Microsoft Office 365", icon: "/nav/office365.png" , des:"White-Labeled Solutions to Grow and Scale Your Business",},
      { name: "Zoho Workspace", icon: "/nav/zoho.png" , des:"White-Labeled Solutions to Grow and Scale Your Business",},
      { name: "Zoom", icon: "/nav/zoom.png" ,des:"White-Labeled Solutions to Grow and Scale Your Business"},
      { name: "Visual Studio", icon: "/nav/vs.png" , des:"White-Labeled Solutions to Grow and Scale Your Business",},
    ],
  },
  {
    category: "Email Solutions",
    items: [
      { name: "Zoho Mail Hosting", icon: "/nav/python.png" , des:"White-Labeled Solutions to Grow and Scale Your Business",},
      { name: "Adobe Creative Cloud", icon: "/nav/adobe.png", des:"White-Labeled Solutions to Grow and Scale Your Business", },
      { name: "Zoho CRM", icon: "/nav/zohoCRM.png", des:"White-Labeled Solutions to Grow and Scale Your Business", },
      { name: "Office 2022", icon: "/nav/MS2022.png", des:"White-Labeled Solutions to Grow and Scale Your Business", },
    ],
  },
  {
    category: "Cloud Services",
    items: [
      { name: "AWS Services", icon: "/nav/AWS.png", des:"White-Labeled Solutions to Grow and Scale Your Business", },
      { name: "Google Cloud Console", icon: "/nav/cloud.png", des:"White-Labeled Solutions to Grow and Scale Your Business", },
      { name: "Azure", icon: "/nav/azure.png", des:"White-Labeled Solutions to Grow and Scale Your Business", },
      { name: "Microsoft Windows", icon: "/nav/windows.png", des:"White-Labeled Solutions to Grow and Scale Your Business", },
    ],
  },
];

function CloudSolutions() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-3  gap-4">
        {solutions.map((solution, index) => (
          <div key={index} className="p-4 ">
            {/* Category Title */}
            <h2><span className=" font-semibold font-poppins text-[14px] text-left bg-[#F2F5FF] text-[#5870E1] py-2 px-5 border-2 border-[#BECAFF] rounded-md">
              {solution.category}</span> 
            </h2>
            <div className="mt-4 space-y-3">
              {solution.items.map((item, idx) => (
                <button
                  key={idx}
                  className="flex items-center w-full text-left p-3 hover:bg-gray-100 transition"
                >
                  <img src={item.icon} alt={item.name} className="w-10 h-10 mr-3" />
                  <div className="flex flex-col">
                      {/* Title */}
                     <p className="text-sm font-medium font-poppins">{item.name}</p>
                      {/* Description */}
                     <p className="text-[12px] font-poppins text-gray-600">{item.des}</p>
                 </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CloudSolutions;
