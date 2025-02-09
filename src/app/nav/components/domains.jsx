"use client";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Sunil Yadav",
    role: "Founder of Bhojmandu",
    image: "/avatars/sunil.jpg",
    rating: 4.5,
    feedback: "Building our website with <span class='text-blue-700'>Nest Nepal cPanel</span> was user-friendly and as easy as delivering food to our customers.",
  },
  {
    name: "Anita Sharma",
    role: "CEO of TechStart",
    image: "/avatars/anita.jpg",
    rating: 5,
    feedback: "Nest Nepal cPanel provided the best hosting experience with top-notch support. Highly recommend!",
  },
  {
    name: "Rajesh Thapa",
    role: "Marketing Head at BizNepal",
    image: "/avatars/rajesh.jpg",
    rating: 4,
    feedback: "The platform made our deployment smooth and efficient. Their customer service is outstanding!",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="max-w-md mx-auto bg-gradient-to-t from-[#ECF0FE] to-[#EDF0FF] p-6 rounded-lg shadow-lg border-2 border-[#BCC9FB] mt-6">
      {/* Star Ratings */}
      <div className="flex space-x-1 text-blue-500 text-xl mb-3">
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i}>{i + 1 <= testimonials[currentIndex].rating ? "★" : "☆"}</span>
        ))}
      </div>

      {/* Feedback */}
      <div className="text-[#000000] text-[25px] font-medium font-dmsans mb-4"><div dangerouslySetInnerHTML={{__html:testimonials[currentIndex].feedback}}/></div>

      {/* User Info */}
      <div className="flex items-center  space-x-3  justify-between w-full">
      
        <div className="flex gap-2 ">
       <div> <img
          src={testimonials[currentIndex].image}
          alt={testimonials[currentIndex].name}
          className="w-10 h-10 rounded-full border border-gray-300"
        /></div>
          <div><p className="text-sm font-semibold">{testimonials[currentIndex].name}</p>
          <p className="text-xs text-gray-500">{testimonials[currentIndex].role}</p></div>
        </div>
        
      {/* Navigation Buttons */}
   <div className="flex">
   <button
        onClick={prevTestimonial}
        className=" transform -translate-y-1/2 p-2 bg-gray-100 rounded-full hover:bg-gray-200"
      >
        <FaChevronLeft className="text-gray-600" />
      </button>
      <button
        onClick={nextTestimonial}
        className=" transform -translate-y-1/2 p-2 bg-gray-100 rounded-full hover:bg-gray-200"
      >
        <FaChevronRight className="text-gray-600" />
      </button>
   </div>
      </div>

    </div>
  );
};

const solutions = [
  {
    category: "Registration and Lookup",
    items: [
      { name: "Search your domain", icon: "/nav/search.png", des: "White-Labeled Solutions to Grow and Scale Your Business" },
      { name: "WHOIS Lookup", icon: "/nav/office365.png", des: "White-Labeled Solutions to Grow and Scale Your Business" },
    ],
  },
  {
    category: "Transfer and Migration",
    items: [
      { name: "Free Website Migration", icon: "/nav/python.png", des: "White-Labeled Solutions to Grow and Scale Your Business" },
      { name: "Transfer your domain", icon: "/nav/node.png", des: "White-Labeled Solutions to Grow and Scale Your Business" },
    ],
  },
];

function domains() {
  return (
    <div className="grid grid-cols-[55%_45%] gap-6">
      {/* Left Section - Domain Services */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {solutions.map((solution, index) => (
            <div key={index} className="p-4">
              {/* Category Title */}
              <h2>
                <span className="font-semibold font-poppins text-[14px] text-left bg-[#F2F5FF] text-[#5870E1] py-2 px-5 border-2 border-[#BECAFF] rounded-md">
                  {solution.category}
                </span>
              </h2>
              <div className="mt-4 space-y-3">
                {solution.items.map((item, idx) => (
                  <button key={idx} className="flex items-center w-full text-left p-3 hover:bg-gray-100 transition">
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

      {/* Right Section - Testimonials */}
      <div>
        <TestimonialSlider />
      </div>
    </div>
  );
}

export default domains;
