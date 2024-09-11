import React from 'react'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CallMadeIcon from '@mui/icons-material/CallMade';
import PageviewIcon from '@mui/icons-material/Pageview';
import SouthEastIcon from '@mui/icons-material/SouthEast';
import Interactionchart from './Chart2/Barchart1';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Interactionchart2 from './Cahrt3/Barchart2';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import Interactionchart3 from './Chart4/Barchart3';
import Interaction from './Chart1/Barchart';
export default function ChBar() {
    return (
        <div className='w-full *:my-[15px] flex flex-wrap justify-evenly items-center'>
            <div className='lg:w-[24%] w-full bg-white shadow-lg rounded-lg flex justify-center items-center flex-wrap'>
                <div className='w-full flex justify-evenly items-center'>
                    <div className='w-[60%] my-[20px] flex justify-evenly items-center'>
                        <span className='flex justify-center items-center px-[6px] py-[5px] bg-orange-100 rounded-sm'><AccountBalanceWalletIcon className='text-orange-600 text-[20px]' /></span>
                        <h4 className='font-loginform text-[#1d2630]'>All Earnings</h4>
                    </div>
                    <span className='flex py-[4px] px-[4px] transition-all duration-200 hover:bg-gray-100 rounded-md cursor-pointer justify-center items-center'>
                        <MoreVertIcon />
                    </span>
                </div>
                <div className='w-full flex justify-center md:flex-nowrap flex-wrap lg:justify-evenly items-center'>
                    <div className='flex lg:w-[60%] w-[60%] justify-start items-center'>
                        <Interaction />
                    </div>
                    <span className='flex w-[35%] justify-center *:w-full items-center flex-wrap'>
                        <p className='font-loginform3 text-[#1d2630]'>$3000</p>
                        <p className='text-[17px] font-text1 text-sky-500'><CallMadeIcon style={{fontSize:'15px'}} className='text-sm' /> 30.6%</p>
                    </span>
                </div>
            </div>
            {/* ////////////// Box 2 ////////////////////////// */}
            <div className='lg:w-[24%] w-full bg-white shadow-lg rounded-lg flex justify-between items-center flex-wrap'>
                <div className='w-full flex justify-evenly items-center'>
                    <div className='w-[60%] my-[20px] flex justify-evenly items-center'>
                        <span className='flex justify-center items-center px-[6px] py-[5px] bg-sky-100 rounded-sm'><PageviewIcon className='text-[#026de7] text-[25px]' /></span>
                        <h4 className='font-loginform text-[#1d2630]'>Pages Views</h4>
                    </div>
                    <span className='flex py-[4px] px-[4px] transition-all duration-200 hover:bg-gray-100 rounded-md cursor-pointer justify-center items-center'>
                        <MoreVertIcon />
                    </span>
                </div>
                <div className='w-full flex justify-center md:flex-nowrap flex-wrap lg:justify-between items-center'>
                    <div className='flex lg:w-[60%] w-[60%] justify-start items-center'>
                        <Interactionchart />
                    </div>
                    <span className='flex w-[35%] justify-center *:w-full items-center flex-wrap'>
                        <p className='font-loginform3 text-[#1d2630]'>290+</p>
                        <p className='text-[18px] font-text1 text-[#026de7]'><SouthEastIcon style={{fontSize:'15px'}} className='text-sm' /> 16.3%</p>
                    </span>
                </div>
            </div>
            {/* ////////////// Box 3 ////////////////////////// */}
            <div className='lg:w-[24%] w-full bg-white shadow-lg rounded-lg flex justify-center items-center flex-wrap'>
                <div className='w-full flex justify-evenly items-center'>
                    <div className='w-[60%] my-[20px] flex justify-evenly items-center'>
                        <span className='flex justify-center items-center px-[6px] py-[5px] bg-green-100 rounded-sm'><AssignmentIcon className='text-[#036844] text-[20px]' /></span>
                        <h4 className='font-loginform text-[#1d2630]'>Total Task</h4>
                    </div>
                    <span className='flex rounded-md py-[4px] px-[4px] transition-all duration-200 hover:bg-gray-100 cursor-pointer justify-center items-center'>
                        <MoreVertIcon />
                    </span>
                </div>
                <div className='w-full flex justify-center md:flex-nowrap flex-wrap lg:justify-between items-center'>
                    <div className='flex lg:w-auto w-[60%] justify-start items-center'>
                        <Interactionchart2 />
                    </div>
                    <span className='flex w-[35%] justify-start *:w-full items-center flex-wrap'>
                        <p className='font-loginform3 text-[#1d2630]'>1,568</p>
                        <p className='text-[18px] font-text1 text-[#036844]'><CallMadeIcon style={{fontSize:'15px'}} className='text-sm' /> 43.2%</p>
                    </span>
                </div>
            </div>
            {/* ////////////// Box 4 ////////////////////////// */}
            <div className='lg:w-[24%] w-full bg-white shadow-lg rounded-lg flex justify-center items-center flex-wrap'>
                <div className='w-full flex justify-evenly items-center'>
                    <div className='w-[60%] my-[20px] flex justify-evenly items-center'>
                        <span className='flex justify-center items-center px-[6px] py-[5px] bg-red-100 rounded-sm'><CloudDownloadIcon className='text-[#be3345] text-[20px]' /></span>
                        <h4 className='font-loginform text-[#1d2630]'>Download</h4>
                    </div>
                    <span className='flex rounded-md py-[4px] px-[4px] transition-all duration-200 hover:bg-gray-100 cursor-pointer justify-center items-center'>
                        <MoreVertIcon />
                    </span>
                </div>
                <div className='w-full flex justify-center md:flex-nowrap flex-wrap lg:justify-between items-center'>
                    <div className='flex lg:w-auto w-[50%] justify-start items-center'>
                        <Interactionchart3 />
                    </div>
                    <span className='flex w-[35%] justify-start *:w-full items-center flex-wrap'>
                        <p className='font-loginform3 text-[#1d2630]'>200$</p>
                        <p className='text-[18px] font-text1 text-[#be3345]'><SouthEastIcon style={{fontSize:'15px'}} className='text-sm' /> 21.7%</p>
                    </span>
                </div>
            </div>
        </div>
    )
}
