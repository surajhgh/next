'use client'; // Required if using Next.js App Router (app directory)

import React, { useState } from 'react';

const Page = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      id: 1,
      name: 'Starter',
      annualtital:'Empower Your Business with Cloud Hosting. Lorem Ipsum dipsum sitsum.',
      triannualtital:'Empower Your Business with Cloud Hosting. Lorem Ipsum dipsum sitsum.',
      annualPrice: '$99/yr',
      triAnnualPrice: '$249/3yr',
      annualsaving:'With a annual term (50% savings)',
      triannualsaving:'With a 3-yr term (50% savings)',
      annualpay:'You pay ₹ 10,764.00 today Renews Jan. 2026 for ₹ 599.00/mo (₹ 21,564.00 total)',
      triannualpay:'You pay ₹ 10,764.00 today Renews Jan. 2026 for ₹ 599.00/mo (₹ 21,564.00 total)',
      annualFeatures: ['10 Projects', '5 GB Storage', 'Basic Support'],
      triAnnualFeatures: ['15 Projects', '10 GB Storage', 'Priority Support'],
    },
    {
      id: 2,
      name: 'Pro',
      annualtital:'Empower Your Business with Cloud Hosting. Lorem Ipsum dipsum sitsum.',
      triannualtital:'Empower Your Business with Cloud Hosting. Lorem Ipsum dipsum sitsum.',
      annualPrice: '$199/yr',
      triAnnualPrice: '$499/3yr',
      annualsaving:'With a annual term (50% savings)',
      triannualsaving:'With a 3-yr term (50% savings)',
      annualpay:'You pay ₹ 10,764.00 today Renews Jan. 2026 for ₹ 599.00/mo (₹ 21,564.00 total)',
      triannualpay:'You pay ₹ 10,764.00 today Renews Jan. 2026 for ₹ 599.00/mo (₹ 21,564.00 total)',
      annualFeatures: ['50 Projects', '50 GB Storage', 'Priority Support'],
      triAnnualFeatures: ['60 Projects', '60 GB Storage', 'Premium Support'],
    },
    {
      id: 3,
      name: 'Business',
      annualtital:'Empower Your Business with Cloud Hosting. Lorem Ipsum dipsum sitsum.',
      triannualtital:'Empower Your Business with Cloud Hosting. Lorem Ipsum dipsum sitsum.',
      annualPrice: '$399/yr',
      triAnnualPrice: '$999/3yr',
      annualsaving:'With a annual term (50% savings)',
      triannualsaving:'With a 3-yr term (50% savings)',
      annualpay:'You pay ₹ 10,764.00 today Renews Jan. 2026 for ₹ 599.00/mo (₹ 21,564.00 total)',
      triannualpay:'You pay ₹ 10,764.00 today Renews Jan. 2026 for ₹ 599.00/mo (₹ 21,564.00 total)',
      annualFeatures: ['Unlimited Projects', '500 GB Storage', '24/7 Support'],
      triAnnualFeatures: ['Unlimited Projects', '1 TB Storage', 'Dedicated Support'],
    },
    {
      id: 4,
      name: 'Enterprise',
      annualtital:'Empower Your Business with Cloud Hosting. Lorem Ipsum dipsum sitsum.',
      triannualtital:'Empower Your Business with Cloud Hosting. Lorem Ipsum dipsum sitsum.',
      annualPrice: 'Custom',
      triAnnualPrice: 'Custom',
      annualsaving:'With a annual term (50% savings)',
      triannualsaving:'With a 3-yr term (50% savings)',
      annualpay:'You pay ₹ 10,764.00 today Renews Jan. 2026 for ₹ 599.00/mo (₹ 21,564.00 total)',
      triannualpay:'You pay ₹ 10,764.00 today Renews Jan. 2026 for ₹ 599.00/mo (₹ 21,564.00 total)',
      annualFeatures: ['Custom Solutions', 'Dedicated Manager', 'Premium Support'],
      triAnnualFeatures: ['Custom Solutions', 'Dedicated Manager', 'VIP Support'],
    },
  ];

  const PlanCard = ({ name, tital, price, saving, pay, features}) => (
    <div className="border  p-6 shadow-md text-left">
      <p className="text-xl font-bold mb-2">{name}</p>
      <p className='text-xs'>{tital}</p>
      <p className="text-2xl font-semibold mb-4">{price}</p>
      <p className='text-xs'>{saving}</p>
      <p className='text-xs'>{pay}</p>
      <ul className="text-left mb-6">
        {features.map((feature, index) => (
          <li key={index} className="text-gray-700 mb-2">- {feature}</li>
        ))}
      </ul>
      <button className=" text-black py-2 px-4 border-2 border-black text-center max-w-full">
        Choose Plan
      </button>
    </div>
  );

  return (
    <div className=" mx-auto p-6">
      <div className='text-center mb-8'>
        <p className='text-4xl font-bold tracking-wide'>
          Choose Your <span className='text-[#1818B3]'>WordPress Hosting</span> Plan
        </p>
        <p className='text-gray-600 mt-2'>
          Tailored Plans to Elevate and Empower Every Aspect of Your Online Presence
        </p>
      </div>

      <div className="flex justify-center mb-6">
        <div className="relative flex rounded-full border bg-white shadow-lg w-[736.2px] h-[59.4px]">
          <div
            className={`absolute top-0 left-0 h-full w-1/2 rounded-full bg-black transition-all duration-300 ${
              isAnnual ? '' : 'translate-x-full'
            }`}
          ></div>

          <button
            onClick={() => setIsAnnual(true)}
            className={`relative z-10 w-1/2 text-center transition-all duration-300 ${
              isAnnual ? 'text-white' : 'text-gray-700 hover:text-black'
            }`}
          >
            <div
              className={`font-semibold text-[16px] ${
                isAnnual ? 'text-white' : 'text-gray-800'
              }`}
            >
              Annual Term
            </div>
            <p
              className={`text-[12px] mt-1 ${
                isAnnual ? 'text-white' : 'text-gray-500'
              }`}
            >
              A balanced choice for your steady progress.
            </p>
          </button>

          <button
            onClick={() => setIsAnnual(false)}
            className={`relative z-10 w-1/2 text-center transition-all duration-300 ${
              !isAnnual ? 'text-white' : 'text-gray-700 hover:text-black'
            }`}
          >
            <div
              className={`font-semibold text-[16px] ${
                !isAnnual ? 'text-white' : 'text-gray-800'
              }`}
            >
              Tri-Annually
            </div>
            <p
              className={`text-[12px] mt-1 ${
                !isAnnual ? 'text-white' : 'text-gray-500'
              }`}
            >
              Great for long-term value and growth.
            </p>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        {plans.map(plan => (
          <PlanCard
            key={plan.id}
            name={plan.name}
            tital={isAnnual ? plan.annualtital : plan.triannualtital}
        
            price={isAnnual ? plan.annualPrice : plan.triAnnualPrice}
            saving={isAnnual ? plan.annualsaving :plan.triannualsaving}
            pay={isAnnual ? plan.annualPrice : plan.triannualpay}
            features={isAnnual ? plan.annualFeatures : plan.triAnnualFeatures}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
