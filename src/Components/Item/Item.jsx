import React from 'react'

export const Item = ({image,title,description,date}) => {
  return (
    <>
       <div className='w-full mt-3 flex justify-center'>
       <img src={image} alt="" className='w-4/5  rounded-lg  ' />
       </div>
        <p className='font-semibold text-gray-500 mt-3'>{date}</p>
        <h3 className='text-white font-bold my-2'>{title}</h3>
        <p className='text-gray-400 '>{description}</p>
    </>
  )
}
