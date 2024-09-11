"use client"
import React, { Fragment, useRef } from 'react'
import Nav from '../Header/Nav';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import Sec1 from '../Divsidebar/Divside1/Sec1';
import Sec2 from '../Divsidebar/Divside2/Sec2'
import Sec3 from '../Divsidebar/Divside3/Sec3'
import Sec4 from '../Divsidebar/Divside4/Sec4'
import Sec5 from '../Divsidebar/Divside5/Sec5'
import Sec6 from '../Divsidebar/Divside6/Sec6'
import CloseIcon from '@mui/icons-material/Close';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import Image from 'next/image';
export default function Menu() {
    const secside = useRef()
    const showside = () => {
        secside.current.style.display='flex'
    }
    const closeside=()=>{
        secside.current.style.display='none'
    }
    return (
        <Fragment>
            <div className=' lg:w-[30%] lg:my-0 my-[10px] w-full flex flex-wrap z-10 justify-between lg:justify-evenly items-center'>
                <span onClick={showside} className='w-[10%] hover:bg-gray-200 bg-gray-100 rounded-md cursor-pointer py-[6px] lg:hidden flex justify-center items-center'>
                    <MenuIcon />
                </span>
                <span  className='w-[12%] hover:bg-gray-200 bg-gray-100 rounded-md cursor-pointer py-[6px] text-green-800 hidden lg:flex justify-center items-center'>
                    <AdminPanelSettingsIcon />
                </span>
                <div className='w-[65%] hover:border-[1px] hover:border-blue-400 hover:shadow-sm *:my-[4px] rounded-md flex justify-start items-center border'>
                    <SearchIcon className='text-[#8e8e8e] text-[25px]' />
                    <input className='bg-[#F8F9FA] placeholder:text-[#bcbcbc] w-[85%] h-[45px] outline-none border-none placeholder:font-loginform' type="text" placeholder='Ctrl + K' />
                </div>
                {/* /////////////// Mobile Sidebar/////////////////// */}
                <section ref={secside} className='w-[70%] z-[100] absolute top-0 left-0 lg:hidden transition-all  duration-1000 h-[100vh] bg-[#f8f9fa] border hidden flex-wrap justify-center items-start'>
                    <div className='w-[70%] z-[100] fixed top-0 left-0 transition-all duration-500 h-[100vh] overflow-y-scroll overflow-x-hidden bg-[#f8f9fa] border flex flex-wrap justify-center items-start' >
                        <div className='w-[85%] flex justify-between items-center *:my-[20px]'>
                            <Image width={90} height={60} alt='logoadmin' src='/logo1.svg' />
                            <span onClick={closeside} className='w-[30%] flex justify-center items-center text-red-600 cursor-pointer'><CloseIcon/></span>
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
            </div>
            <div className='lg:w-[30%] lg:my-0 my-[10px] w-full flex flex-wrap justify-center items-center'>
                <Nav />
            </div>
        </Fragment>
    )
}
