import React from 'react'

const PaginationNext = ({onClick,isDisable}) => {
    const handleOnClick = ()=>{
        if(!isDisable) onClick();
    }
  return (
    <div
      onClick={handleOnClick}
      className={`text-2xl rounded-xl text-center w-10 h-10 cursor-pointer ${
        isDisable ? 'bg-gray-200 cursor-not-allowed' : 'shadow bg-white'
      }`}
    >
      &gt;
    </div>
  )
}

const PaginationPervious = ({onClick,isDisable}) => {
    const handleOnClick = ()=>{
        if(!isDisable) onClick();
    }
  return (
    <div
      onClick={handleOnClick}
      className={`text-2xl rounded-xl text-center w-10 h-10 cursor-pointer ${
        isDisable ? 'bg-gray-200 cursor-not-allowed' : 'shadow bg-white'
      }`}
    >
      &lt;
    </div>
  )
}


export {PaginationNext,PaginationPervious}