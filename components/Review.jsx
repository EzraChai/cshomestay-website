import React from 'react'
import Image from 'next/image'

const Review = ({review}) => {
  return (
    <div className="card p-4 pb-6 lg:p-8 mb-8 bg-gray-50 rounded-2xl drop-shadow-lg lg:drop-shadow-xl">
        <div className="upper-card flex justify-between py-2 lg:py-4 items-center">
          <div className="flex items-center">
            {review.avatar &&
          <div className="w-12 h-12 pr-2 ">
            <Image layout='responsive' className='rounded-full' src={review.avatar.url} width={review.avatar.width} height={review.avatar.height} alt={`Avatar of ${review.username}`}/>
          </div> }
            <h6 className='font-semibold text-lg lg:text-xl text-zinc-900'>{review.username}</h6>
          </div>
          <div>
            {review.website.width == 881? 
            <div className="w-16 h-10">
              <Image layout='responsive'src={review.website.url} width={review.website.width} height={review.website.height} alt={`Review's origin website's logo`}/>
            </div>:
            <div className="w-20 h-12 mt-4">
              <Image layout='responsive'src={review.website.url} width={review.website.width} height={review.website.height} alt={`Review's origin website's logo`}/>
            </div>
          }
          </div>
        </div>
        <p className='text-base lg:text-xl font-semibold tracking-[0.0025rem] leading-7 lg:leading-8 text-gray-500'>&quot; {review.description} &quot;</p>
    </div>
  )
}

export default Review