export default function ready() {
    const hostingPlans = [
      {
        title: "VPS Hosting",
        description:
          "For growing businesses that need more power and flexibility, our VPS hosting provides dedicated resources and greater control over your hosting environment.",
        image: "/migration/frame1.png",
      },
      {
        title: "Dedicated Hosting",
        description:
          "For high-traffic websites and mission-critical applications, our dedicated hosting offers unmatched performance, security, and customization options.",
        image:  "/migration/frame2.png",
      },
      {
        title: "Cloud Hosting",
        description:
          "Take advantage of the scalability and reliability of the cloud with our cloud hosting solutions, designed to handle varying traffic loads with ease.",
        image:  "/migration/frame3.png",
      },
    ];
  
    return (
      <section className="px-8 py-12 bg-[#F5F5F5] container mt-8 mb-8">
        <div className="max-w-7xl mx-auto grid grid-cols-10 ">
          {/* Heading Section */}
          <div className="text-left mb-8 col-span-3 p-3">
            <h2 className="text-[24px] font-semibold font-montserrat text-gray-900">Ready To Make Switch?</h2>
            <p className="text-gray-600 font-dmsans text-xs mt-2">
              Join the NEST Nepal family and experience top-tier web hosting. With our seamless migration
              process, superior performance, and dedicated support, we're the perfect choice for your hosting needs.
            </p>
            <a href="#" className="text-[#1818b31F] font-dmsans
             mt-4 inline-block">
              Contact Us →
            </a>
            </div>

           <div className="col-span-7">
              {/* Hosting Plans Section */}
          <div className="grid md:grid-cols-3 gap-6">
            {hostingPlans.map((plan, index) => (
              <div key={index} className="   text-left justify-center">
                <img
                  src={plan.image}
                  alt={plan.title}
                  className=" mx-auto mb-4"
                />
                <h3 className="text-[16px] font-bold font-dmsans">{plan.title}</h3>
                <p className="text-gray-600 text-sm font-dmsans mt-2">{plan.description}</p>
                <a href="#" className="text-[#1818b31F] font-medium mt-4 inline-block">
                  Get Started →
                </a>
              </div>
            ))}
          </div>
           </div>
          
  
         
        </div>
      </section>
    );
  }
  