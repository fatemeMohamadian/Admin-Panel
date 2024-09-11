import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import Image from 'next/image';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import Button from '@mui/material/Button';
import GaugeValueRangeNoSnap from './Gauge';
import GaugeValueRangeTwo from './Gaugetwo';
export default function Threesec() {
    return (
        <div className='lg:w-[25%] w-full flex justify-center items-center flex-wrap'>
            <div className='w-full lg:mt-0 mt-[20px] border-[1px] border-gray-200 rounded-lg bg-white shadow-sm flex flex-wrap justify-center items-center'>
                <div className='w-[90%] mt-[25px] flex justify-between items-center'>
                    <h3 className='font-loginform text-[#262d36]'>Payment History</h3>
                    <span className='flex cursor-pointer rounded-md py-[3px] px-[5px] hover:bg-gray-100 justify-center items-center text-[#686f76]'><AddIcon /></span>
                </div>
                <div className='w-full mt-[25px] flex flex-wrap justify-center items-center'>
                    <div className='w-full py-[12px] flex flex-wrap border-b justify-evenly items-center'>
                        <Image style={{ objectFit: 'cover' }} width={30} height={30} src="/img1.png" alt="" />
                        <div className='w-[50%] flex flex-wrap justify-start items-center'>
                            <h4 className='w-full font-loginform text-[#535353] text-sm'>Paypal</h4>
                            <span className='flex justify-center items-center'>
                                <p className='font-loginform text-[#262d36]'>$2,10,000</p>
                                <p className='font-loginform ml-[3px] text-[15px] text-green-700'>+30.6%</p>
                            </span>
                        </div>
                        <span className='flex justify-center px-[5px] cursor-pointer hover:bg-gray-100 py-[3px] rounded-md items-center text-[#686f76]'><MoreVertOutlinedIcon /></span>
                    </div>
                    {/* ///////////////////////////////////// */}
                    <div className='w-full py-[12px] flex flex-wrap border-b justify-evenly items-center'>
                        <Image style={{ objectFit: 'cover' }} width={30} height={30} src="/img2.png" alt="" />
                        <div className='w-[50%] flex flex-wrap justify-start items-center'>
                            <h4 className='w-full font-loginform text-[#535353] text-sm'>Gpay</h4>
                            <span className='flex justify-center items-center'>
                                <p className='font-loginform text-[#262d36]'>-2000</p>
                                <p className='font-loginform ml-[3px] text-[15px] text-red-500'>-30.6%</p>
                            </span>
                        </div>
                        <span className='flex justify-center px-[5px] cursor-pointer hover:bg-gray-100 py-[3px] rounded-md items-center text-[#686f76]'><MoreVertOutlinedIcon /></span>
                    </div>
                    {/* ///////////////////////////////////// */}
                    <div className='w-full py-[12px] flex flex-wrap border-b justify-evenly items-center'>
                        <Image style={{ objectFit: 'cover' }} width={30} height={30} src="/img3.png" alt="" />
                        <div className='w-[50%] flex flex-wrap justify-start items-center'>
                            <h4 className='w-full font-loginform text-[#535353] text-sm'>Phone Pay</h4>
                            <span className='flex justify-center items-center'>
                                <p className='font-loginform text-[#262d36]'>-2000</p>
                                <p className='font-loginform ml-[3px] text-[15px] text-red-500'>-27.6%</p>
                            </span>
                        </div>
                        <span className='flex justify-center px-[5px] cursor-pointer hover:bg-gray-100 py-[3px] rounded-md items-center text-[#686f76]'><MoreVertOutlinedIcon /></span>
                    </div>
                </div>
                {/* ///////////////////////// */}
                <div className='w-[90%] my-[25px] flex justify-evenly items-center'>
                    <span className='w-[90%] flex justify-center items-center'><Button sx={{ width: '100%', textTransform: 'capitalize', fontFamily: 'loginform3', fontFamily: 'loginh1', color: '#696b6d', borderColor: '#696b6d', fontSize: '14px' }} variant="outlined">View All</Button></span>
                </div>
            </div>
            {/* /////////////////////////////////// */}
            <div className='w-full rounded-lg mt-[20px]  border-[1px] border-gray-200rounded-lg flex flex-wrap bg-white shadow-sm justify-center items-center'>
                <div className='w-[90%] *:my-[20px] flex flex-wrap justify-between items-center'>
                    <div className='flex w-[45%] justify-center items-center'>
                        <GaugeValueRangeNoSnap />
                    </div>
                    <div className='flex w-[50%] justify-start items-center flex-wrap'>
                        <h3 className='font-text1 w-full text-[#686f76] text-[15px]'>Total Earning</h3>
                        <p className='font-loginform text-sm text-[#262d36]'>$45,890</p>
                    </div>
                </div>
            </div>
            {/* ///////////////////////////// */}
            <div className='w-full mt-[20px] border-[1px] border-gray-200 rounded-lg flex flex-wrap bg-white shadow-sm justify-center items-center'>
                <div className='w-[90%] *:my-[20px] flex flex-wrap justify-between items-center'>
                    <div className='flex w-[45%] justify-center items-center'>
                        <GaugeValueRangeTwo />
                    </div>
                    <div className='flex w-[50%] justify-start items-center flex-wrap'>
                        <h3 className='font-text1 w-full text-[#686f76] text-[15px]'>Total Earning</h3>
                        <p className='font-loginform text-sm text-[#262d36]'>$45,890</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
