import React from 'react'
import Button from '@mui/material/Button';
import InteractionAnabar from './Barchartana/Anabarchart';
import Interactionchartbar2 from './Barchartana/Anachartbar2';
import CallMadeIcon from '@mui/icons-material/CallMade';
import CustomYAxisAna from '../Sparkline/Anaspark';
import WbCloudyOutlinedIcon from '@mui/icons-material/WbCloudyOutlined';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
export default function Analichart() {
    return (
        <div className='w-full flex flex-wrap justify-between items-start'>
            <div className='lg:w-[75%] lg:*:my-0 *:my-[15px] w-full flex flex-wrap justify-between items-start'>
                <div className='lg:w-[32%] w-full border-[1px] border-gray-200 rounded-lg bg-white shadow-sm flex flex-wrap justify-center items-center'>
                    <div className='flex mt-[15px] *:my-[15px] w-full justify-evenly items-center'>
                        <h3 className='font-loginform text-[#262d36]'>New Orders</h3>
                        <select className='w-[45%] *:border-none *:outline-none py-[10px] focus:border-[2px] border-[1px] border-[#262d36] focus:border-sky-600  *:cursor-pointer outline-none font-loginform3 *:font-loginform3 cursor-pointer text-[#414952] rounded-lg' name="months" id="">
                            <option value="monthly">monthly</option>
                            <option value="today">today</option>
                            <option value="weekly">weekly</option>
                        </select>
                    </div>
                    <div className='w-full flex justify-center items-center'>
                        <InteractionAnabar />
                    </div>
                    <span className='w-full *:my-[15px] flex justify-center items-center'>
                        <p className='font-loginform3 text-[#262d36]'>$30,200</p>
                        <p className='font-loginform3 ml-[10px] flex justify-center items-center text-[#2050b9]'><CallMadeIcon style={{fontSize:'15px'}} className='text-[18px]' /> 30.6%</p>
                    </span>
                    <div className='w-full mb-[20px] flex justify-center items-center'>
                        <span className='w-[90%] flex justify-center items-center'><Button sx={{ width: '100%', textTransform: 'capitalize', fontFamily: 'text1', borderRadius: 3, fontFamily: 'text1', color: '#696b6d', borderColor: '#696b6d' }} variant="outlined">View More</Button></span>
                    </div>
                </div>
                {/* ////////////////////////////// */}
                <div className='lg:w-[32%] w-full border-[1px] border-gray-200 rounded-lg bg-white shadow-sm flex flex-wrap justify-center items-center'>
                    <div className='flex mt-[15px] *:my-[15px] w-full justify-evenly items-center'>
                        <h3 className='font-loginform text-[#262d36]'>New Users</h3>
                        <select className='w-[45%] *:border-none *:outline-none py-[10px] focus:border-[2px] border-[1px] border-[#262d36] focus:border-sky-600  *:cursor-pointer outline-none font-loginform3 *:font-loginform3 cursor-pointer text-[#414952] rounded-lg' name="months" id="">
                            <option value="monthly">monthly</option>
                            <option value="today">today</option>
                            <option value="weekly">weekly</option>
                        </select>
                    </div>
                    <div className='w-[85%] *:my-[15px] flex justify-center items-center'>
                        <CustomYAxisAna />
                    </div>
                    <span className='w-full *:my-[15px] flex justify-center items-center'>
                        <p className='font-loginform3 text-[#262d36]'>$30,200</p>
                        <p className='font-loginform3 ml-[10px] flex justify-center items-center text-[#07a151]'><CallMadeIcon style={{fontSize:'15px'}} className='text-[18px]' /> 30.6%</p>
                    </span>
                    <div className='w-full mb-[20px] flex justify-center items-center'>
                        <span className='w-[90%] flex justify-center items-center'><Button sx={{ width: '100%', textTransform: 'capitalize', fontFamily: 'text1', borderRadius: 3, fontFamily: 'text1', color: '#696b6d', borderColor: '#696b6d' }} variant="outlined">View More</Button></span>
                    </div>
                </div>
                {/* /////////////////////////////////////// */}
                <div className='lg:w-[32%] w-full border-[1px] border-gray-200 rounded-lg bg-white shadow-sm flex flex-wrap justify-center items-center'>
                    <div className='flex mt-[15px] *:my-[15px] w-full justify-evenly items-center'>
                        <h3 className='font-loginform text-[#262d36]'>New Pages</h3>
                        <select className='w-[45%] *:border-none *:outline-none py-[10px] focus:border-[2px] border-[1px] border-[#262d36] focus:border-sky-600  *:cursor-pointer outline-none font-loginform3 *:font-loginform3 cursor-pointer text-[#414952] rounded-lg' name="months" id="">
                            <option value="monthly">monthly</option>
                            <option value="today">today</option>
                            <option value="weekly">weekly</option>
                        </select>
                    </div>
                    <div className='w-[85%] *:my-[25px] flex justify-center items-start'>
                        <Interactionchartbar2 />
                    </div>
                    <span className='w-full *:my-[15px] flex justify-center items-center'>
                        <p className='font-loginform3 text-[#262d36]'>$30,200</p>
                        <p className='font-loginform3 ml-[10px] flex justify-center items-center text-[#f06514]'><CallMadeIcon style={{fontSize:'15px'}} className='text-[18px]' /> 30.6%</p>
                    </span>
                    <div className='w-full mb-[20px] flex justify-center items-center'>
                        <span className='w-[90%] flex justify-center items-center'><Button sx={{ width: '100%', textTransform: 'capitalize', fontFamily: 'text1', borderRadius: 3, fontFamily: 'text1', color: '#696b6d', borderColor: '#696b6d' }} variant="outlined">View More</Button></span>
                    </div>
                </div>
            </div>
            {/* ///////////////////////// */}
            <div className='lg:w-[25%] mt-[25px] lg:mt-0 w-full flex flex-wrap justify-center lg:justify-end items-center'>
                <div className='w-[95%] after:rounded-lg rounded-lg after:z-[-10] relative after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-[#1d2630] bg-cover bg-no-repeat bg-[url("/img-bg.svg")] flex justify-center items-center flex-wrap'>
                    <div className='w-[90%] mt-[20px] *:text-white flex flex-wrap items-center justify-between'>
                        <h3 className='font-loginform text-sm'>Dropbox Storage</h3>
                        <p className='font-loginform'>150GB</p>
                    </div>
                    <div className='w-[90%] my-[10px] flex justify-start items-center'>
                        <span className='px-[10px] rounded-lg py-[7px] bg-slate-700'><WbCloudyOutlinedIcon className='text-white' /></span>
                    </div>
                    <div className='flex w-[90%] my-[15px] *:my-[5px] justify-start flex-wrap items-center'>
                        <p className='font-loginform text-[15px] w-full text-white'>1,342GB of 150GB Users</p>
                        <div className='flex *:rounded-xl justify-start items-center'>
                            <span className='bg-orange-400 py-[3px] px-[20px]'></span>
                            <span className='bg-red-600 py-[3px] px-[20px]'></span>
                            <span className='bg-gray-300 py-[3px] px-[20px]'></span>
                            <span className='bg-green-500 py-[3px] px-[35px]'></span>
                        </div>
                    </div>
                </div>
                {/* ////////////////////////////////////// */}
                <div className='w-[95%] rounded-lg mt-[20px] *:my-[15px] bg-[#326ef0] flex flex-wrap justify-evenly items-center'>
                    <div className='flex  flex-wrap *:text-white w-[60%] justify-start items-center'>
                        <h3 className='font-text1 text-sm'>Available Balance</h3>
                        <p className='font-loginform'>$1,234,90</p>
                    </div>
                    <span className='flex px-[10px] py-[8px] rounded-md bg-[#345cb2] justify-center items-center text-white'>
                        <AutorenewOutlinedIcon/>
                    </span>
                </div>
            </div>
        </div>
    )
}
