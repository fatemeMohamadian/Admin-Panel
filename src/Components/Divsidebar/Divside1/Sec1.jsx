import React, { Fragment } from 'react'
import AccordionTransition from '../../Accordians/Accordion/Accordionbar'
import ViewInArIcon from '@mui/icons-material/ViewInAr';
export default function Sec1() {
    return (
        <Fragment>
            <div className='w-[85%] pt-[8px] my-[15px] flex-wrap flex justify-start items-center'>
                <h3 className='font-loginh1 text-[15px] uppercase text-[#1d2630]'>dashboard</h3>
            </div>
            <div className='w-[90%] *:my-[10px] flex flex-wrap justify-center items-center'>
                <span className='w-full flex justify-evenly items-center'>
                    <AccordionTransition />
                </span>
                <div className='w-full flex justify-between items-center'>
                    <span className='text-[#5b6b79] text-sm flex justify-center items-center'><ViewInArIcon />
                        <p className='font-text1 translate-x-[9px] capitalize text-[20px] text-[#5b6b79]'>components</p></span>
                    <span className='flex cursor-pointer text-center bg-[#e9f0ff80] border-[#7ea6ff] justify-center items-center border w-[57px] py-[1px] rounded-3xl'>
                        <p className='font-loginform flex justify-center items-center text-sm text-[#2f63ff]'>new</p>
                    </span>
                </div>
            </div>
        </Fragment>
    )
}
