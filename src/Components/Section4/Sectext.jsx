import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CustomYAxis from '../Charts/Sparkline/Sparkone';
import CustomYAxisone from '../Charts/Sparkline/Sparktwo';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import PersonIcon from '@mui/icons-material/Person';
import GroupAvatars from '../Avatar/Avapic';
export default function Sectext() {
  return (
    <div className='w-full flex flex-wrap justify-between items-center'>
      <div className='lg:w-[70%] w-full rounded-lg translate-y-[-23px] bg-white shadow-sm flex flex-wrap justify-center items-start'>
        <div className='w-[95%] *:my-[25px] flex justify-between items-center'>
          <h3 className='font-loginform text-[#262d36]'>Project Overview</h3>
          <span className='flex justify-end transition-all duration-200 rounded-md hover:bg-slate-100 cursor-pointer items-center'><MoreVertIcon className='text-gray-500 rotate-[90deg]' /></span>
        </div>
        <div className='w-[95%] my-[25px] flex justify-evenly items-center flex-wrap'>
          <div className='lg:w-[35%] w-full flex justify-start items-center flex-wrap'>
            <div className='flex lg:w-[45%] w-full justify-center lg:justify-between items-center'>
              <span className='flex justify-center lg:text-start text-center lg:justify-start flex-wrap items-center'>
                <p className='w-full text-[#5b6b79] font-loginform3'>Total Tasks</p>
                <p className='font-loginform3 text-[#262d36]'>34,686</p>
              </span>
            </div>
            <div className='flex justify-center items-center w-full lg:w-[41%]'>
              <CustomYAxis />
            </div>
          </div>
          {/* ////////////////// */}
          <div className='lg:w-[35%] w-full flex justify-start items-center flex-wrap'>
            <div className='flex w-full lg:w-[50%] lg:justify-start justify-center items-center'>
              <span className='flex justify-center text-center lg:text-start lg:justify-start flex-wrap items-center'>
                <p className='w-full text-[#5b6b79] font-loginform3'>Pending Tasks</p>
                <p className='font-loginform3 text-[#262d36]'>3,6786</p>
              </span>
            </div>
            <div className='lg:w-[42%] w-full flex justify-center items-center'>
              <CustomYAxisone />
            </div>
          </div>
          <span className='lg:w-[28%] w-[90%] my-[10px] lg:my-0 text-center flex justify-center items-center'>
            <Button sx={{ width: '100%', borderRadius: '8px', fontFamily: 'loginform' }} variant="contained"><AddIcon className='text-sm' /> Add Project</Button>
          </span>
        </div>
      </div>
      {/* ///////////////////////////////// */}
      <div className='lg:w-[25%] w-full rounded-lg bg-white shadow-sm flex flex-wrap justify-center items-center'>
        <div className='w-[90%] mt-[20px] flex justify-between items-center flex-wrap'>
          <span className='flex bg-sky-50 px-[5px] py-[3px] rounded-md justify-center items-center'>
            <PersonIcon className='text-sky-600'/>
          </span>
          <div className='flex w-[50%] justify-start items-center flex-wrap'>
            <h4 className='w-full font-loginform3 text-[#262d36]'>Able Pro</h4>
            <p className='font-text1 text-[#5b6b79] text-[15px]'>@ableprodevelop</p>
          </div>
          <span className='flex justify-end transition-all duration-200 rounded-md hover:bg-slate-100 cursor-pointer items-center'><MoreVertIcon className='text-gray-500' /></span>
        </div>
        <div className='w-[90%] my-[25px] flex justify-between items-center'>
          <div className='flex cursor-pointer justify-center items-center'>
            <GroupAvatars/>
          </div>
          <span className='flex border bg-sky-600 cursor-pointer px-[4px] py-[4px] rounded-2xl justify-center items-center'>
            <AddIcon className='text-white text-[24px]'/>
          </span>
        </div>
      </div>
    </div>
  )
}
