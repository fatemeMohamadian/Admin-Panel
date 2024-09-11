import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MarkOptimization from '../Charts/CartLine/Chartline';
import CustomizedProgressBars from '../Progressbar/Progress';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
export default function Secchart() {
  return (
    <div className='w-full flex flex-wrap justify-between items-start'>
      <div className='lg:w-[70%] w-full bg-white rounded-lg shadow-sm flex flex-wrap justify-center items-center'>
        <div className='w-[95%] flex justify-between items-center'>
          <h3 className='font-loginform text-[#262d36]'>Repeat customer rate</h3>
          <div className='flex *:my-[8px] flex-wrap justify-end items-center'>
            <span className='flex justify-end transition-all duration-200 rounded-md hover:bg-slate-100 cursor-pointer items-center'><MoreVertIcon className='text-gray-500 rotate-[90deg]' /></span>
            <span className='flex w-full justify-end items-center'>
              <p className='font-loginform3 text-[#131920] mr-[5px]'>5.44%</p>
              <p className='font-loginform3 text-sm  py-[1px] px-[4px] rounded-lg border text-white bg-[#036844]'>+2.6%</p>
            </span>
          </div>
        </div>
        <div className='w-full my-[15px] flex justify-center items-center'>
          <MarkOptimization />
        </div>
      </div>
      {/* //////////////////////////// */}
      <div className='lg:w-[25%] w-full bg-white rounded-lg shadow-sm flex flex-wrap justify-center items-center'>
        <div className='w-full border-b my-[10px] py-[20px] flex justify-start items-center'>
          <h3 className='font-loginform ml-[20px] text-[#262d36]'>Project - Able Pro</h3>
        </div>
        <div className='w-[85%] my-[15px] flex flex-wrap justify-center items-center'>
          <span className='w-full flex justify-between items-center'>
            <p className='font-loginform3'>Release v1.2.0</p>
            <p className='font-loginform3'>72%</p>
          </span>
          <div className='w-full flex justify-center items-center'>
            <CustomizedProgressBars />
          </div>
        </div>
        <div className='w-full my-[15px] flex justify-center items-center flex-wrap'>
          <ul className='flex w-[80%] *:my-[5px] *:font-text1 *:w-full flex-wrap justify-center items-center'>
            <li className='flex hover:bg-gray-100 rounded-md cursor-pointer py-[8px] flex-wrap justify-start items-center '>
              <FiberManualRecordIcon style={{fontSize:'15px'}} className='text-[13px] ml-[10px] text-orange-500' />
              <h4 className='text-sm ml-[10px] text-[#5b6b79]'>Horizontal Layout</h4>
            </li>
            <li className='flex hover:bg-gray-100 rounded-md cursor-pointer py-[8px] flex-wrap justify-start items-center '>
              <FiberManualRecordIcon style={{fontSize:'15px'}} className='text-[13px] ml-[10px] text-orange-500' />
              <h4 className='text-sm ml-[10px] text-[#5b6b79]'>Invoice Generator</h4>
            </li>
            <li className='flex flex-wrap hover:bg-gray-100 rounded-md cursor-pointer py-[8px] justify-start items-center '>
              <FiberManualRecordIcon style={{fontSize:'15px'}} className='text-[13px] ml-[10px] text-sky-700' />
              <h4 className='text-sm ml-[10px] text-[#5b6b79]'>Package Upgrades</h4>
            </li>
            <li className='flex flex-wrap hover:bg-gray-100 rounded-md cursor-pointer py-[8px] justify-start items-center '>
              <FiberManualRecordIcon style={{fontSize:'15px'}} className='text-[13px] ml-[10px] text-green-700' />
              <h4 className='text-sm ml-[10px] text-[#5b6b79]'>Figma Auto Layout</h4>
            </li>
          </ul>
        </div>
        <div className='w-[90%] my-[10px] text-center flex justify-center items-center'>
        <Button sx={{width:'100%',borderRadius:'8px',fontFamily:'loginform'}} variant="contained"><AddIcon className='text-sm'/> Add Task</Button>
        </div>
      </div>
    </div>
  )
}
