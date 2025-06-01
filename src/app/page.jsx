"use client"

import CourseCard from '@/components/CourseCard'
import React from 'react'

const page = () => {
  return (
    <div className='w-full p-2 flex flex-col items-center'>
        <h1 className='text-5xl font-bold my-3'>🎓 Course Coupons & Deals</h1>
        <p>Discover amazing discounts on top-rated courses. Limited time offers with exclusive coupon codes!</p>
        <div className='w-full h-full grid grid-cols-1 lg:grid-cols-3 gap-3 py-5 px-[5vw] place-items-center'>
            {Array.from({length:6},(_,index)=>(
                <CourseCard key={index} />
            ))}
        </div>
        <div className='w-full bg-amber-300 h-6 flex items-center justify-center gap-10'>
            <div>Page Back</div>
            <div>Page 0</div>
            <div>Page Forward</div>
        </div>
    </div>
  )
}

export default page
