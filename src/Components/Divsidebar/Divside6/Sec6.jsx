import React, { Fragment } from 'react'
import AccordionTransition10 from '@/Components/Accordians/Acco10/Accath'
import ContactPageIcon from '@mui/icons-material/ContactPage';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
export default function Sec6() {
    return (
        <Fragment>
            <div className='w-[85%] my-[15px] flex-wrap flex justify-start items-center'>
                <h3 className='font-loginh1 text-[15px] uppercase text-[#1d2630]'>pages</h3>
            </div>
            <div className='w-[90%] cursor-pointer py-[8px] rounded-md my-[8px] flex justify-start items-center flex-wrap'>
                <AccordionTransition10 />
            </div>
            <div className='w-[90%] hover:bg-gray-200 cursor-pointer py-[8px] rounded-md my-[8px] flex justify-start items-center flex-wrap'>
                <span className='text-[#5b6b79] flex justify-center items-center'>
                    <ContactPageIcon />
                </span>
                <p className='font-text1 text-[#5b6b79] ml-[15px] capitalize text-[20px]'>Contact Us</p>
            </div>
            <div className='w-[90%] hover:bg-gray-200 cursor-pointer py-[8px] rounded-md my-[8px] flex justify-start items-center flex-wrap'>
                <span className='text-[#5b6b79] flex justify-center items-center'>
                    <AirplanemodeActiveIcon />
                </span>
                <p className='font-text1 text-[#5b6b79] ml-[15px] capitalize text-[20px]'>Landing</p>
            </div>
        </Fragment>
    )
}
