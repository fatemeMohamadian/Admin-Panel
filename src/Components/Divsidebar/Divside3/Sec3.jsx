import React, { Fragment } from 'react'
import ChatIcon from '@mui/icons-material/Chat';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import ViewKanbanIcon from '@mui/icons-material/ViewKanban';
import SellIcon from '@mui/icons-material/Sell';
import AccordionTransition1 from '@/Components/Accordians/Acco1/Accustomer';
import AccordionTransition2 from '@/Components/Accordians/Acco2/Accinvoic';
import AccordionTransition3 from '@/Components/Accordians/Acco3/Accprofile';
import AccordionTransition4 from '@/Components/Accordians/Acco4/Accecoo';
export default function Sec3() {
    return (
        <Fragment>
            <div className='w-[85%] my-[15px] flex-wrap flex justify-start items-center'>
                <h3 className='font-loginh1 text-[15px] uppercase text-[#1d2630]'>applications</h3>
            </div>
            <div className='w-[90%] hover:bg-gray-200 cursor-pointer py-[8px] rounded-md my-[8px] flex justify-start items-center flex-wrap'>
                <span className='text-[#5b6b79] text-sm flex justify-center items-center'>
                    <ChatIcon />
                </span>
                <p className='font-text1 ml-[15px] capitalize text-[20px] text-[#5b6b79]'>chat</p>
            </div>
            <div className='w-[90%] hover:bg-gray-200 cursor-pointer py-[8px] rounded-md my-[8px] flex justify-between items-center flex-wrap'>
                <span className='text-[#5b6b79] flex justify-center items-center'>
                    <EditCalendarIcon />
                    <p className='font-text1 ml-[15px] capitalize text-[20px]'>calendar</p>
                </span>
                <span className='text-sm flex justify-center items-center text-[#5b6b79]'>
                    <SellIcon className='text-lg' />
                </span>
            </div>
            <div className='w-[90%] hover:bg-gray-200 cursor-pointer py-[8px] rounded-md my-[8px] flex justify-start items-center flex-wrap'>
                <span className='text-[#5b6b79] text-sm flex justify-center items-center'>
                    <ViewKanbanIcon />
                </span>
                <p className='font-text1 ml-[15px] capitalize text-[20px] text-[#5b6b79]'>kanban</p>
            </div>
            <div className='w-[90%]  cursor-pointer py-[8px] rounded-md my-[8px] flex justify-start items-center flex-wrap'>
                <AccordionTransition1 />
            </div>
            <div className='w-[90%] cursor-pointer py-[8px] rounded-md my-[8px] flex justify-start items-center flex-wrap'>
                <AccordionTransition2 />
            </div>
            <div className='w-[90%] cursor-pointer py-[8px] rounded-md my-[8px] flex justify-start items-center flex-wrap'>
                <AccordionTransition3 />
            </div>
            <div className='w-[90%] cursor-pointer py-[8px] rounded-md my-[8px] flex justify-start items-center flex-wrap'>
                <AccordionTransition4 />
            </div>
        </Fragment>
    )
}
