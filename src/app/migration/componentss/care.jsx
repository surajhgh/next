"use client"; // Ensures useState works in Next.js App Router

import { useState } from "react";
import Image from "next/image";

export default function Care() {
    const [showAll, setShowAll] = useState(true);

  const services = [
    {
      title: "Server Migration",
      description:
        "Move your website to a new server without any downtime or data loss. This includes all files, databases, and configurations.",
      icon: "/migration/gserver.png",
    },
    {
      title: "Database Migration",
      description:
        "Safely transfer your website’s database to a new system, ensuring data integrity, minimal disruption & top-notch security.",
      icon: "/migration/Gdatabase.png",
    },
    {
      title: "cPanel Migration",
      description:
        "Move your website from one cPanel account to another, ensuring all files, databases, emails, and configurations are transferred seamlessly.",
      icon: "/migration/Gcpanel.png",
    },
    {
      title: "VPS Migration",
      description:
        "Migrate your website to a new Virtual Private Server (VPS) to improve performance and scalability, ensuring minimal downtime.",
      icon: "/migration/GVPS.png",
    },
    {
      title: "CMS Migration",
      description:
        "Perform a full migration including platform, server, design, and domain, essentially rebuilding your website on a new foundation.",
      icon: "/migration/gcsm.png",
    },
    {
      title: "Platform Migration",
      description:
        "Transition your website seamlessly from one platform to another, ensuring all your data, content, and functionality are preserved.",
      icon: "/migration/gplatform.png",
    },
    {
      title: "Domain Migration",
      description:
        "Change your website’s domain name and ensure that all links, SEO rankings, and traffic are properly redirected to the new domain.",
      icon: "/migration/gdomin.png",
    },
    {
      title: "WordPress Migration",
      description:
        "Transfer your WordPress site to a new host, domain, or server, ensuring all themes, plugins, and settings are retained.",
      icon: "/migration/gwordpress.png",
    },
    
  ];

  return (
    <section className="px-8 py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-left mb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    <div>  
        <p className="font-dmsans text-[18px]">What we Do</p>    
        <h2 className=" font-bold font-montserrat text-4xl text-gray-900">
            Your <span className="text-[#1F43ED]">Website</span>, Moved with{" "}
            <span className="text-[#1F43ED]">Care!</span>
          </h2>
          <p className="text-gray-600 mt-2 font-dmsans text-[18px]">
            Expert Solutions for Smooth and Hassle-Free Transfers
          </p>
          </div>


          {services.slice(0, showAll ? services.length : 2).map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-start transition duration-300 hover:shadow-lg"
            >
              <div className="flex max-w-44 justify-center items-center gap-3 ">
                <Image src={service.icon} alt={service.title} width={60} height={60} className="mb-3" />
              <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
              </div>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="">
     
        </div>

        {/* Show More / Less Button */}
        <div className="text-center mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-blue-500 font-medium hover:underline"
          >
            {showAll ? "Show less ↑" : "Show more ↓"}
          </button>
        </div>
      </div>
    </section>
  );
}
