import React from 'react'

const NavBar = () => {
  return (
    <nav className='fixed top-0 left-0 w-full h-[10vh] shadow px-[5vw] flex items-center justify-between'>
        <div className='text-3xl font-bold'>Course<span className='text-green-600'>Daily</span></div>
        <div className='text-xl hover:bg-green-600 hover:text-white px-2 rounded-xl cursor-pointer'>
            Home
        </div>
        <div>
            <input type="search" className=' px-2 py-2 focus:outline-none shadow rounded-2xl'/>
        </div>
    </nav>
  )
}

export default NavBar