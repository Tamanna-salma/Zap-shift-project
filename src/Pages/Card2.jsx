import React from 'react'
import parcel from '../assets/live-tracking.png'
import parcel2 from '../assets/safe-delivery.png'
import parcel3 from '../assets/safe-delivery.png'

const Card2 = () => {

  const datainfo = [
    {
      title: "Live Parcel Tracking",
      description: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
      img: parcel,
    },
    {
      title: "100% Safe Delivery",
      description: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
      img: parcel2,
    },
    {
      title: "24/7 Call Center Support",
      description: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
      img: parcel3,
    }
  ]

  return (
    <div className='max-w-5xl mx-auto px-5 space-y-6 mb-7 mt-14'>

      {datainfo.map((item, index) => (
        <div 
          key={index} 
          className='bg-white rounded-2xl shadow-xl px-8 py-6 flex items-start gap-5'
        >
          <img src={item.img} alt={item.title} className='w-20 h-20 object-contain' />
               <div className="h-20 w-0.5 border-dashed bg-gray-300"></div>
          
          <div className=''>
            
            <h5 className='text-xl font-bold'>{item.title}</h5>
            <p className='text-sm text-gray-500 mt-2'>{item.description}</p>
          </div>
          <hr className='border-dashed mt-16  mx-auto max-w-5xl' />
        </div>
        
      ))}

    </div>
  )
}

export default Card2
