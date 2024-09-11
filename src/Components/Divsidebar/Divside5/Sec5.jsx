import React, { Fragment } from 'react'
import AccordionTransition9 from '@/Components/Accordians/Acco9/Accchart';
import MapIcon from '@mui/icons-material/Map';
import DescriptionIcon from '@mui/icons-material/Description';
export default function Sec5() {
    return (
        <Fragment>
            <div className='w-[85%] my-[15px] flex-wrap flex justify-start items-center'>
                <h3 className='font-loginh1 text-[15px] uppercase text-[#1d2630]'>Charts & Map</h3>
            </div>
            <div className='w-[90%] cursor-pointer py-[8px] rounded-md my-[8px] flex justify-start items-center flex-wrap'>
                <AccordionTransition9 />
            </div>
            <div className='w-[90%] hover:bg-gray-200 cursor-pointer py-[8px] rounded-md my-[8px] flex justify-start items-center flex-wrap'>
                <span className='text-[#5b6b79] flex justify-center items-center'>
                    <MapIcon />
                </span>
                <p className='font-text1 text-[#5b6b79] ml-[15px] capitalize text-[20px]'>Map</p>
            </div>
            <div className='w-[90%] border-t hover:bg-gray-200 cursor-pointer py-[8px] rounded-md my-[8px] flex justify-start items-center flex-wrap'>
                <span className='text-[#5b6b79] flex justify-center items-center'>
                    <DescriptionIcon />
                </span>
                <p className='font-text1 text-[#5b6b79] ml-[15px] capitalize text-[20px]'>Sample Page</p>
            </div>
        </Fragment>
    )
}
