import React from 'react'
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import InteractionPartOne from './Chartbarone';
import CallMadeIcon from '@mui/icons-material/CallMade';
import CustomYAxisPartone from './Chartlineone';
export default function Onepartsec() {
    return (

        <div className='lg:w-[25%] w-full *:rounded-lg flex justify-center items-center flex-wrap'>
            <div className='w-full border-[1px] border-gray-200 bg-white shadow-sm flex flex-wrap justify-center items-center'>
                <div className='w-[90%] mt-[20px] flex justify-between items-center'>
                    <span className='flex justify-center items-center text-[#262d36]'><MonetizationOnOutlinedIcon /></span>
                    <span className='flex rounded-md cursor-pointer px-[5px] py-[3px] hover:bg-gray-100 justify-center items-center text-[#686f76]'><MoreVertOutlinedIcon /></span>
                </div>
                <div className='w-[90%] my-[10px] flex flex-wrap justify-start items-center'>
                    <h3 className='font-loginform w-full text-[#262d36]'>$30,200,00</h3>
                    <p className='font-loginform3 text-[#686f76]'>income</p>
                </div>
                <div className='w-[90%] my-[10px] flex justify-center items-center flex-wrap'>
                    <InteractionPartOne />
                </div>
            </div>
            {/* //////////////////////////// */}
            <div className='w-full border-[1px] border-gray-200 mt-[30px] bg-white shadow-sm flex flex-wrap justify-center items-center'>
                <div className='w-[90%] mt-[20px] flex justify-between items-center'>
                    <h3 className='font-loginform text-[#262d36]'>Languages Support</h3>
                    <span className='flex justify-center rounded-md cursor-pointer px-[5px] py-[3px] hover:bg-gray-100 items-center text-[#686f76]'><MoreVertOutlinedIcon /></span>
                </div>
                <div className='w-[90%] mt-[20px] flex flex-wrap justify-evenly items-center'>
                    <span className='flex justify-center items-center'><CallMadeIcon className='rotate-[45deg] text-[#686f76] text-sm' /></span>
                    <h3 className='font-loginform text-[#262d36] text-sm'>Update Version</h3>
                    <span className='border px-[10px] rounded-lg py-[3px] text-white bg-green-700'>
                        <p className='font-text1 text-[15px]'>v1.1.0</p>
                    </span>
                </div>
                <div className='w-[90%] flex justify-center items-center'>
                    <CustomYAxisPartone />
                </div>
                <div className='w-[90%] mt-[10px] *:my-[10px] *:text-gray-500 *:cursor-pointer *:py-[4px] *:rounded-md *:font-loginform3 *:flex *:justify-center *:items-center *:w-[40%] *:border-[#262d36] *:border-[1px] flex justify-between items-center flex-wrap'>
                    <span className='hover:text-[#262d36]'>
                        <p>React</p>
                    </span>
                    <span className='hover:text-[#262d36]'>
                        <p>Angular</p>
                    </span>
                    <span className='hover:text-[#262d36]'>
                        <p>Bootstrap</p>
                    </span>
                    <span className='hover:text-[#262d36]'>
                        <p>Mui</p>
                    </span>
                </div>
            </div>
        </div>

    )
}
