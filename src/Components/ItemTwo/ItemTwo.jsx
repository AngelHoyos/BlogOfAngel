import React from 'react'

export const Item = ({image,title,date}) => {
  return (
    <section className=' w-full h-36 flex flex-row items-center  mx-4' >
       <div className='w-2/6 mt-3 '>
       <img src={image} alt="" className='w-full rounded-lg  ' />
       </div>
       <div className='w-5/6 mx-4'>
       <p className='font-semibold text-gray-500 text-sm'>{date}</p>
        <h3 className='text-white font-bold text-sm '>{title}</h3>
        <hr className='w-full h-1 mt-4'/>

       </div>

    </section>
  )
}
