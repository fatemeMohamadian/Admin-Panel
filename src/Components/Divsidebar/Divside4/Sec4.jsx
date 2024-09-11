import React, { Fragment } from 'react'
import PublishedWithChangesSharpIcon from '@mui/icons-material/PublishedWithChangesSharp';
import SkipNextSharpIcon from '@mui/icons-material/SkipNextSharp';
import AccordionTransition5 from '@/Components/Accordians/Acco5/Acclayout';
import AccordionTransition6 from '@/Components/Accordians/Acco6/Accplugin';
import AccordionTransition7 from '@/Components/Accordians/Acco7/Accreacttable';
import AccordionTransition8 from '@/Components/Accordians/Acco8/Accmui';
export default function Sec4() {
    return (
        <Fragment>
            <div className='w-[85%] my-[15px] flex-wrap flex justify-start items-center'>
                <h3 className='font-loginh1 text-[15px] uppercase text-[#1d2630]'>forms & tables</h3>
            </div>
            <div className='w-[90%] hover:bg-gray-200 cursor-pointer py-[8px] rounded-md my-[8px] flex justify-start items-center flex-wrap'>
                <span className='text-[#5b6b79] text-sm flex justify-center items-center'>
                    <PublishedWithChangesSharpIcon />
                </span>
                <p className='font-text1 ml-[15px] capitalize text-[20px] text-[#5b6b79]'>forms validation</p>
            </div>
            <div className='w-[90%] hover:bg-gray-200 cursor-pointer py-[8px] rounded-md my-[8px] flex justify-start items-center flex-wrap'>
                <span className='text-[#5b6b79] flex justify-center items-center'>
                    <SkipNextSharpIcon />
                </span>
                <p className='font-text1 text-[#5b6b79] ml-[15px] capitalize text-[20px]'>forms wizard</p>
            </div>
            <div className='w-[90%]  cursor-pointer py-[8px] rounded-md my-[8px] flex justify-start items-center flex-wrap'>
                <AccordionTransition5 />
            </div>
            <div className='w-[90%] cursor-pointer py-[8px] rounded-md my-[8px] flex justify-start items-center flex-wrap'>
                <AccordionTransition6 />
            </div>
            <div className='w-[90%] cursor-pointer py-[8px] rounded-md my-[8px] flex justify-start items-center flex-wrap'>
                <AccordionTransition7 />
            </div>
            <div className='w-[90%] cursor-pointer py-[8px] rounded-md my-[8px] flex justify-start items-center flex-wrap'>
                <AccordionTransition8 />
            </div>
        </Fragment>
    )
}
