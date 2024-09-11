"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Sec1 from '../Divsidebar/Divside1/Sec1'
import Sec2 from '../Divsidebar/Divside2/Sec2'
import Sec3 from '../Divsidebar/Divside3/Sec3'
import Sec4 from '../Divsidebar/Divside4/Sec4'
import Sec5 from '../Divsidebar/Divside5/Sec5'
import Sec6 from '../Divsidebar/Divside6/Sec6'
export default function Sidebar() {
    return (
        <>
            <section className='w-[18%] hidden transition-all duration-500 h-[100vh] bg-[#f8f9fa] border lg:flex flex-wrap justify-center items-start'>
                <div className='w-[18%] fixed top-0 left-0 transition-all duration-500 h-[100vh] overflow-y-scroll overflow-x-hidden bg-[#f8f9fa] border flex flex-wrap justify-center items-start' >
                    <div className='w-[85%] flex justify-start items-center *:my-[20px]'>
                        <Image width={90} height={60} alt='logoadmin' src='/logo1.svg' />
                    </div>
                    <div className='w-full flex justify-center items-center flex-wrap'>
                        <Sec1 />
                    </div>
                    <div className='w-full flex justify-center items-center flex-wrap'>
                        <Sec2 />
                    </div>
                    <div className='w-full border flex justify-center items-center flex-wrap'>
                        <Sec3 />
                    </div>
                    <div className='w-full border flex justify-center items-center flex-wrap'>
                        <Sec4 />
                    </div>
                    <div className='w-full border flex justify-center items-center flex-wrap'>
                        <Sec5 />
                    </div>
                    <div className='w-full border flex justify-center items-center flex-wrap'>
                        <Sec6 />
                    </div>
                </div>
            </section>
        </>
    )
}
