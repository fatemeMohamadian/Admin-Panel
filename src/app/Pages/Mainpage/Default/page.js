
import React from 'react'
import Menu from '@/Components/Menu/Menu'
import Bgdef from '@/Components/Bgsection1/Bgdef'
import ChBar from '@/Components/Charts/ChBar'
import Secchart from '@/Components/Section3/Secchart'
import Sectext from '@/Components/Section4/Sectext'
import Sectab from '@/Components/Section5/Sectab'
import Foot from '@/Components/Footer/Foot'
export default function Defultpage() {
  return (
    <section className='lg:w-[82%] w-full flex flex-wrap justify-center items-start'>
      <section className='w-[95%] h-[75px] flex justify-between items-center flex-wrap'>
        <Menu />
      </section>
      {/* ////////////section2/////////////////////// */}
      <section className='w-[95%] mt-[80px] lg:mt-[30px] rounded-xl after:rounded-xl after:z-[-10] relative after:w-full after:h-full after:top-0 after:left-0 h-[38vh] lg:h-[35vh] after:bg-sky-600 after:absolute  flex flex-wrap justify-center items-center'>
        <Bgdef />
      </section>
      {/* ///////////section3//////////////////////// */}
      <section className='w-[95%] mt-[30px] flex flex-wrap justify-center items-center'>
        <ChBar />
      </section>
      {/* ///////////section4//////////////////////// */}
      <section className='w-[95%] mt-[30px] flex flex-wrap justify-center items-center'>
        <Secchart />
      </section>
      {/* ///////////section5//////////////////////// */}
      <section className='w-[95%] mt-[20px] flex flex-wrap justify-center items-center'>
        <Sectext />
      </section>
      {/* ///////////section6//////////////////////// */}
      <section className='w-[95%] mt-[35px] flex justify-center items-center flex-wrap'>
        <Sectab />
      </section>
      {/* ///////////section7//////////////////////// */}
      {/* <section className='w-[95%] mt-[10px] flex flex-wrap justify-center items-center'>
        <Foot/>
      </section> */}
    </section>

  )
}
