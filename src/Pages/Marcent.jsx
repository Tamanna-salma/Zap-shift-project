import React from 'react'
import img from '../assets/be-a-merchant-bg.png';
import img2 from '../assets/location-merchant.png';
const Marcent = () => {
  return (
    <div className='bg-[#03373d] max-w-5xl  mt-16 mb-16  rounded-2xl mx-auto'>
            
            <div className=' '>
            <img src={img} alt="" />
        
        </div>
           <div className='flex  flex-col lg:flex-row'>
             <div className=' w-full lg:w-3xl'>
            <h3 className='text-white text-xl px-14 font-bold ml-10 '>Merchant and Customer Satisfaction is Our First Priority</h3>
            
        <p className='text-gray-400 px-14 text-sm font-bold ml-10 mt-3'>
            We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.
        </p>

        <div className='ml-24 flex gap-4 mt-3'>
          <button className="px-3 py-2 bg-[#CAEB66] text-black font-semibold rounded-full shadow-lg hover:bg-lime-500">Become a Merchant</button>
        <button className=" rounded-full px-5 py-2  text-[#CAEB66] border border-[#CAEB66]  font-medium hover:bg-[#06484d]  transition-all  duration-300">
  Earn with ZapShift Courier
</button>

        </div>
        </div>
       
        <div className='mb-10 px-8'>
            <img src={img2} alt="" />
        </div>  

           </div>
    </div>
  )
}

export default Marcent;