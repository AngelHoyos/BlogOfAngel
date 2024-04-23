import React from 'react'

export const Main = ({children}) => {
  return (
    <main className='w-full h-3/5 bg-black flex justify-center  '>
      <section className='w-4/5 h-full  flex'>
      {children}
      </section>
    </main>
  )
}
