import NavBar from '@/components/NavBar';
import React from 'react'

const page = async({params}) => {
    const {courseName} = params;

    const res = await fetch(`https://your-api.com/courses/${courseName}`);
    
    return (
    <div className="w-full bg-red-200 reletive">
      <NavBar />
      
    </div>
  )
}

export default page