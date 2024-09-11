import React, { Fragment } from 'react'
import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import BarChartIcon from '@mui/icons-material/BarChart';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
export default function Sec2() {
    return (
        <Fragment>
            <div className='w-[85%] my-[15px] flex-wrap flex justify-start items-center'>
                <h3 className='font-loginh1 text-[15px] uppercase text-[#1d2630]'>widgets</h3>
            </div>
            <div className='w-[90%] hover:bg-gray-200 cursor-pointer py-[8px] rounded-md my-[8px] flex justify-start items-center flex-wrap'>
                <span className='text-[#5b6b79] text-sm flex justify-center items-center'>
                    <DonutSmallIcon />
                </span>
                <p className='font-text1 ml-[15px] capitalize text-[20px] text-[#5b6b79]'>statistic</p>
            </div>
            <div className='w-[90%] hover:bg-gray-200 cursor-pointer py-[8px] rounded-md my-[8px] flex justify-start items-center flex-wrap'>
                <span className='text-[#5b6b79] text-sm flex justify-center items-center'>
                    <BarChartIcon/>
                </span>
                <p className='font-text1 ml-[15px] capitalize text-[20px] text-[#5b6b79]'>data</p>
            </div>
            <div className='w-[90%] hover:bg-gray-200 cursor-pointer py-[8px] rounded-md my-[8px] flex justify-start items-center flex-wrap'>
              <span className='text-[#5b6b79] text-sm flex justify-center items-center'>
                <QueryStatsIcon/>
              </span>
              <p className='font-text1 ml-[15px] capitalize text-[20px] text-[#5b6b79]'>chart</p>
            </div>
        </Fragment>
    )
}
