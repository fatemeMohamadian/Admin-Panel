import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LabTabstwo from './Tabsvalue/Tabsval';
import Button from '@mui/material/Button';
import DoughnutChart from '../Charts/Doughnut/Douchart';
import CallMadeIcon from '@mui/icons-material/CallMade';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
export default function Sectab() {
    return (
        <div className='w-full flex flex-wrap justify-between items-start'>
            <div className='lg:w-[49%] w-full rounded-lg bg-white shadow-sm flex flex-wrap justify-center items-center'>
                <div className='w-[90%] *:my-[25px] flex justify-between items-center'>
                    <h3 className='font-loginform text-[#262d36]'>Transactions</h3>
                    <span className='flex justify-end transition-all duration-200 rounded-md hover:bg-slate-100 cursor-pointer items-center'><MoreVertIcon className='text-gray-500' /></span>
                </div>
                <div className='w-full flex my-[10px] flex-wrap justify-center items-center'>
                    <LabTabstwo />
                </div>
                <div className='w-full mb-[25px] flex justify-evenly items-center'>
                    <span className='w-[45%] flex justify-center items-center'><Button sx={{ width: '100%', fontFamily: 'loginform3', paddingY: 1, fontFamily: 'text1', color: '#696b6d', borderColor: '#696b6d', fontSize: '14px' }} variant="outlined">Transaction History</Button></span>
                    <span className='w-[50%] flex justify-center items-center'><Button sx={{ width: '100%', paddingY: 1, fontFamily: 'text1', fontSize: '14px' }} variant="contained">Create New Transaction</Button></span>
                </div>
            </div>
            <div className='lg:w-[49%] w-full rounded-lg bg-white shadow-sm flex flex-wrap  justify-center items-center'>
                <div className='w-[90%] *:my-[25px] flex justify-between items-center'>
                    <h3 className='font-loginform text-[#262d36]'>Total Income</h3>
                    <span className='flex justify-end transition-all duration-200 rounded-md hover:bg-slate-100 cursor-pointer items-center'><MoreVertIcon className='text-gray-500' /></span>
                </div>
                <div className='lg:w-[50%] w-[60%] flex justify-center items-center'>
                    <DoughnutChart />
                </div>
                <div className='w-[95%] *:my-[15px] my-[30px] flex flex-wrap justify-evenly items-center'>
                    <div className='lg:w-[48%] w-full rounded-lg bg-slate-50 py-[15px] *:my-[5px] *:ml-[15px] justify-start items-center flex-wrap'>
                        <span className='w-full flex justify-start items-center'>
                            {/* icon */}
                            <FiberManualRecordIcon style={{fontSize:'15px'}} className='text-[13px] text-[#4680ff]' />
                            <p className='font-text1 text-sm ml-[10px] font-semibold text-[#262d36]'>Item01</p>
                        </span>
                        <span className='w-full justify-start items-center flex'>
                            <p className='font-loginform3'>$23,876</p>
                            <p className='font-loginform3 flex justify-center items-center font-semibold text-[15px] ml-[6px] text-[#5b6b79]'><CallMadeIcon style={{fontSize:'15px'}} className='text-[15px] rotate-[-46deg]' /> +$76,343</p>
                        </span>
                    </div>
                    {/* //////////////////////////////// */}
                    <div className='lg:w-[48%] w-full rounded-lg bg-slate-50 py-[15px] *:my-[5px] *:ml-[15px] justify-start items-center flex-wrap'>
                        <span className='w-full flex justify-start items-center'>
                            {/* icon */}
                            <FiberManualRecordIcon style={{fontSize:'15px'}} className='text-[13px] text-[#e58a00]' />
                            <p className='font-text1 ml-[10px] text-sm font-semibold text-[#262d36]'>Item02</p>
                        </span>
                        <span className='w-full justify-start items-center flex'>
                            <p className='font-loginform3'>$23,876</p>
                            <p className='font-loginform3 flex justify-center items-center font-semibold text-[15px] ml-[6px] text-[#5b6b79]'><CallMadeIcon style={{fontSize:'15px'}} className='text-[15px] rotate-[-46deg]' /> +$76,343</p>
                        </span>
                    </div>
                    {/* /////////////////////////////// */}
                    <div className='lg:w-[48%] w-full rounded-lg bg-slate-50 py-[15px] *:my-[5px] *:ml-[15px] justify-start items-center flex-wrap'>
                        <span className='w-full flex justify-start items-center'>
                            {/* icon */}
                            <FiberManualRecordIcon style={{fontSize:'15px'}} className='text-[13px] text-[#2ca87f]' />
                            <p className='font-text1 ml-[10px] text-sm font-semibold text-[#262d36]'>Item03</p>
                        </span>
                        <span className='w-full justify-start items-center flex'>
                            <p className='font-loginform3'>$23,876</p>
                            <p className='font-loginform3 flex justify-center items-center font-semibold text-[15px] ml-[6px] text-[#5b6b79]'><CallMadeIcon style={{fontSize:'15px'}} className='text-[15px] rotate-[-46deg]' /> +$76,343</p>
                        </span>
                    </div>
                    {/* /////////////////////////////// */}
                    <div className='lg:w-[48%] w-full rounded-lg bg-slate-50 py-[15px] *:my-[5px] *:ml-[15px] justify-start items-center flex-wrap'>
                        <span className='w-full flex justify-start items-center'>
                            {/* icon */}
                            <FiberManualRecordIcon style={{fontSize:'15px'}} className='text-[13px] text-[#c8d9ff]' />
                            <p className='font-text1 ml-[10px] text-sm font-semibold text-[#262d36]'>Item04</p>
                        </span>
                        <span className='w-full justify-start items-center flex'>
                            <p className='font-loginform3'>$23,876</p>
                            <p className='font-loginform3 flex justify-center items-center font-semibold text-[15px] ml-[6px] text-[#5b6b79]'><CallMadeIcon style={{fontSize:'15px'}} className='text-[15px] rotate-[-46deg]' /> +$76,343</p>
                        </span>
                    </div>
                    {/* /////////////////////////////// */}
                </div>
            </div>
        </div>
    )
}
