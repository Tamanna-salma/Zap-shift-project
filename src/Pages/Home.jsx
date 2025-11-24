import React from 'react'
import Banner  from '../Pages/Banner'
import Card1 from '../Pages/Card1'
import Brands from '../Pages/Brands'
import Card2 from '../Pages/Card2'
import Marcent from '../Pages/Marcent'
import Reviews from './Reviews'

const reviewsPromise = fetch('/reviews.json').then(res => res.json());
const Home = () => {
  return (
    <div className='bg-[#eaeced]'>
      <Banner></Banner>
      <Card1></Card1>
      <Brands></Brands>
      <Card2></Card2>
      <Marcent></Marcent>
      <Reviews reviewsPromise={reviewsPromise}></Reviews>
     
    </div>
  )
}

export default Home