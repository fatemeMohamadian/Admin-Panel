import React from 'react'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import PieArcLabel from './Pieoriginal';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Button from '@mui/material/Button';
export default function Twopartsec() {
    return (
        <div className='lg:w-[46%] lg:mt-0 mt-[25px] w-full border-[1px] border-gray-200 bg-white rounded-lg shadow-sm flex justify-center items-center flex-wrap '>
            <div className='w-[90%] mt-[25px] flex justify-between items-center '>
                <h3 className='font-loginform text-[#262d36]'>Project Overview</h3>
                <span className='flex justify-center rounded-md cursor-pointer px-[5px] py-[3px] hover:bg-gray-100 items-center text-[#686f76]'><MoreVertOutlinedIcon /></span>
            </div>
            {/* ////////////////////// */}
            <div className='w-[90%] my-[20px] flex justify-center items-center '>
                <PieArcLabel />
            </div>
            {/* /////////////////// */}
            <div className='w-[90%] *:my-[10px] *:border-[1px] *:border-[#b8b8b9] *:rounded-lg flex flex-wrap justify-between  items-center'>
                <span className='lg:w-[32%] w-[47%] *:my-[3px] flex  text-center flex-wrap justify-center items-center'>
                    <h5 className='font-text1 flex justify-center items-center text-sm text-[#686f76]'><FiberManualRecordIcon className='text-[13px] mr-[5px] text-[#262d36]' /> Apps</h5>
                    <p className='w-full text-[#262d36] font-loginform text-sm'>10+</p>
                </span>
                {/* //////////////////// */}
                <span className='lg:w-[32%] w-[47%] *:my-[3px] flex  text-center flex-wrap justify-center items-center'>
                    <h5 className='font-text1 flex justify-center items-center text-sm text-[#686f76]'><FiberManualRecordIcon className='text-[13px] mr-[5px] text-[#262d36]' /> Other</h5>
                    <p className='w-full text-[#262d36] font-loginform text-sm'>5+</p>
                </span>
                {/* //////////////// */}
                <span className=' lg:w-[32%] w-[47%] *:my-[3px] flex  text-center flex-wrap justify-center items-center'>
                    <h5 className='font-text1 flex justify-center items-center text-sm text-[#686f76]'><FiberManualRecordIcon className='text-[13px] mr-[5px] text-[#262d36]' />Widgets</h5>
                    <p className='w-full text-[#262d36] font-loginform text-sm'>150+</p>
                </span>
                {/* /////////////////////// */}
                <span className='lg:w-[32%] w-[47%] *:my-[3px] flex  text-center flex-wrap justify-center items-center'>
                    <h5 className='font-text1 flex justify-center items-center text-sm text-[#686f76]'><FiberManualRecordIcon className='text-[13px] mr-[5px] text-[#262d36]' />Forms</h5>
                    <p className='w-full text-[#262d36] font-loginform text-sm'>50+</p>
                </span>
                {/* //////////////////////// */}
                <span className='lg:w-[32%] w-[47%] *:my-[3px] flex  text-center flex-wrap justify-center items-center'>
                    <h5 className='font-text1 flex justify-center items-center text-sm text-[#686f76]'><FiberManualRecordIcon className='text-[13px] mr-[5px] text-[#262d36]' />Components</h5>
                    <p className='w-full text-[#262d36] font-loginform text-sm'>200+</p>
                </span>
                {/* /////////////////////////// */}
                <span className='lg:w-[32%] w-[47%] *:my-[3px] flex  text-center flex-wrap justify-center items-center'>
                    <h5 className='font-text1 flex justify-center items-center text-sm text-[#686f76]'><FiberManualRecordIcon className='text-[13px] mr-[5px] text-[#262d36]' />Pages</h5>
                    <p className='w-full text-[#262d36] font-loginform text-sm'>150+</p>
                </span>
            </div>
            {/* /////////////////////////// */}
            <div className='w-[90%] lg:*:my-0 *:my-[10px] my-[25px] flex-wrap flex justify-evenly items-center'>
                <span className='lg:w-[48%] w-[90%] flex justify-center items-center'><Button sx={{ width: '100%', textTransform:'capitalize', fontFamily: 'loginform3', fontFamily: 'loginh1', color: '#696b6d', borderColor: '#696b6d', fontSize: '14px' }} variant="outlined">View All</Button></span>
                <span className=' lg:w-[48%] w-[90%] flex justify-center items-center'><Button sx={{ width: '100%',textTransform:'capitalize', fontFamily: 'loginh1', fontSize: '14px' }} variant="contained">Create New Page</Button></span>
            </div>
        </div>
    )
}
