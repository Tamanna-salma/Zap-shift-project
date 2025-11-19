import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImg1 from '../assets/banner/banner1.png'
import bannerImg2 from '../assets/banner/banner2.png'
import bannerImg3 from '../assets/banner/banner3.png'
import { Carousel } from 'react-responsive-carousel';
import { BsFillArrowDownRightCircleFill } from "react-icons/bs";
export const Banner = () => {
  return (
    <div className='max-w-7xl mx-auto px-4  mt-6 relative'>
        <Carousel
            autoPlay={true}
            infiniteLoop={true}
        >
            <div>
                <img src={bannerImg1} />
            </div>
            <div>
                <img src={bannerImg2} />
            </div>
            <div>
                <img src={bannerImg3} />
            </div>
        </Carousel>
        <div className="absolute top-2/3 left-12 transform -translate-y-1/2 z-100 flex items-center space-3">
        <button className="px-4 py-3 bg-[#CAEB66] text-black font-semibold rounded-full shadow-lg hover:bg-lime-500">
          Track Your Parcel
        </button>
        <BsFillArrowDownRightCircleFill  className='text-3xl -rotate-90' />
        <div>
          <button className='btn  outline-0 '>Be A Rider</button>
        </div>
      </div>
    </div>
  )
}
