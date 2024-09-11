
import React from 'react'
import Menu from '@/Components/Menu/Menu'
import Analichart from '@/Components/Charts/Anachart/Analichart'
import Tabchart from '@/Components/TabCharts/Tabchart'
import Endsec from '@/Components/Endsection/Endsec'
export default function Analyticpage() {
  return (
    <section className='lg:w-[82%] w-full flex flex-wrap justify-center items-start'>
      <section className='w-[95%] z-[200] h-[75px] flex justify-between items-center flex-wrap'>
        <Menu />
      </section>
      {/* ////// section2/////////// */}
      <section className='w-[95%] mt-[80px] lg:mt-[30px] flex flex-wrap justify-center items-center'>
        <Analichart />
      </section>
      {/* //////// section3//////////// */}
      <section className='w-[95%] mt-[30px] flex flex-wrap justify-center items-center'>
        <Tabchart />
      </section>
      {/* /////// section4///////////// */}
      <section className='w-[95%] mt-[30px] flex justify-center items-start flex-wrap '>
        <Endsec />
      </section>
    </section>
  )
}
