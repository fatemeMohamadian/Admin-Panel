import React, { Fragment } from 'react'

export default function Bgdef() {
  return (
    <Fragment>
      <img className='w-[100%] h-full z-10 object-cover' src='/img-bg.svg' alt='bg' />
      <div className='w-[90%] lg:z-10 z-5 absolute top-[20px] left-[20px] lg:left-[50px] justify-center lg:justify-between items-center flex flex-wrap'>
        <div className='lg:w-[50%]  w-full *:my-[10px] *:text-white flex flex-wrap text-center lg:text-start justify-center lg:justify-start items-center'>
          <h1 className='font-loginh1 text-2xl'>Explore Redesigned Able Pro</h1>
          <h3 className='font-text1 text-[15px]'>The Brand new User Interface with power of Material-UI Components. Explore the Endless possibilities with Able Pro.</h3>
          <span className='border flex justify-center items-center py-[5px] hover:bg-sky-500 hover:bg-opacity-45 cursor-pointer transition-all duration-300 rounded-md text-sm px-[12px]'>
            <p className='font-loginform3'>Exclusive on Themeforest</p>
          </span>
          <div className='w-[10%] lg:hidden flex justify-center items-center'>
            <img src="/banner.png" alt="banner" />
          </div>
        </div>
        <div className='w-[20%] hidden lg:flex justify-center items-center'>
          <img src="/banner.png" alt="banner" />
        </div>
      </div>
    </Fragment>
  )
}
