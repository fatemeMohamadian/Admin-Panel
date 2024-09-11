import React from 'react'
import Image from 'next/image'
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from 'next/link';
import Signup from '@/Components/Signupform/Signup';
import Logo from '../Piclogo/Logo';
export default function Inforegister() {
    return (
        <div className='w-[70%] flex justify-center items-center flex-wrap'>
            <div className='w-full my-[25px] justify-start items-center flex'>
             <Logo/>
            </div>
            <div className='w-full my-[30px] *:my-[3px] *:w-full flex flex-wrap justify-start items-center'>
                <h1 className='font-loginh1 text-2xl text-[#0162e8]'>Get Started</h1>
                <h2 className='font-loginform text-sm capitalize text-[#031b4e]'>It's free to Signup and only takes a minute.</h2>
            </div>
            <div className='w-full flex justify-start items-center flex-wrap'>
                <Signup/>
            </div>
            <div className='w-full lg:*:my-0 *:my-[10px] my-[28px] flex-wrap flex justify-between items-center'>
                <span className='lg:w-[45%] w-full cursor-pointer transition-all duration-700 hover:text-white hover:bg-[#100f0f] bg-white border-[1px] border-slate-300 rounded-md shadow-md py-[12px]  flex justify-evenly items-center'>
                    <GitHubIcon />
                    <p className='text-sm font-loginform'>Signup with Github</p>
                </span>
                <span className=' lg:w-[45%] w-full transition-all group cursor-pointer duration-700 hover:bg-red-500 shadow-md py-[12px] border-[1px] border-slate-300 rounded-md bg-[#fcf8f8] flex justify-evenly items-center'>
                    <Image width={30} height={20} alt='googleic' src='/googleicon.png' />
                    <p className='text-red-500 transition-all duration-700 group-hover:text-white text-sm font-loginform'>Signup with Google</p>
                </span>
            </div>
            <div className='w-full flex mt-[35px] *:my-[3px] flex-wrap justify-start items-center'>
                <span className='w-full lg:*:mb-0 *:mb-[20px] flex justify-start items-center'>
                    <p className='font-loginform3'>Do you have an account?</p>
                    <h3 className='font-loginform text-gray-700 ml-[3px]'><Link className='hover:underline transition-all duration-700' href='/'>LogIn</Link></h3>
                </span>
            </div>
        </div>
    )
}
