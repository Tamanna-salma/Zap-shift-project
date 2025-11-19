import React from 'react'
import { CiDeliveryTruck } from "react-icons/ci";
const Card1 = () => {
     const cardData = [
    {
      title: "Booking Pick & Drop",
      desc: "From personal packages to business shipments — we deliver on time, every time.",
      icon: <CiDeliveryTruck className="text-4xl" />
    },
    {
      title: "Cash on Delivery",
      desc: "Quick, safe, and reliable delivery directly to your doorstep.",
      icon: <CiDeliveryTruck className="text-4xl" />
    },
    {
      title: "Delivery Hub",
      desc: "We ensure safe and premium packing for every item you send.",
      icon: <CiDeliveryTruck className="text-4xl" />
    },
    {
      title: "Booking SME & Corporate",
      desc: "We're always here to help you anytime you need.",
      icon: <CiDeliveryTruck className="text-4xl" />
    },
  ];
  return (
    <div className='max-w-5xl mx-auto px-5'>
        <h2 className='text-3xl font-bold mb-5'>How it works</h2>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-5 '>
            {
                cardData.map((item,index)=>(
                    <div key={index} className='bg-white rounded-2xl shadow-2xl px-8 py-5 w-60'>
                <p>{item.icon}</p>
                <h5 className='text-lg font-bold'>{item.title}</h5>
                <p className='text-sm text-gray-400'>{item.desc}</p>

            </div>
                ))
            }
        </div>
    </div>
  )
}

export default Card1