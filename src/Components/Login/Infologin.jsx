import React from 'react'
import Image from 'next/image'
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from 'next/link';
import Signin from '@/Components/Signinform/Signin';
import Logo from '../Piclogo/Logo';
import CustomizedSnackbars from '../Snackbar/Snackalert';
export default function Infologin() {
  return (
    <div className='w-[75%] flex justify-center items-center flex-wrap'>
      <div className='w-full my-[25px] justify-start items-center flex'>
        <Logo />
      </div>
      <div className='w-full my-[30px] *:my-[3px] *:w-full flex flex-wrap justify-start items-center'>
        <h1 className='font-loginh1 text-2xl text-[#0162e8]'>Welcome Back!</h1>
        <h2 className='font-loginform text-sm capitalize text-[#031b4e]'>please sign in to continue.</h2>
      </div>
      <div className='w-full flex justify-start items-center flex-wrap'>
        <Signin />
      </div>
      <div className='w-full my-[10px] *:my-[6px] lg:*:my-0 flex flex-wrap justify-center lg:justify-between items-center'>
        <span className='lg:w-[45%] w-[90%] cursor-pointer transition-all duration-700 hover:text-white hover:bg-[#100f0f] bg-white border-[1px] border-slate-300 rounded-md shadow-md py-[12px]  flex justify-evenly items-center'>
          <GitHubIcon />
          <p className='text-sm font-loginform'>Signin with Github</p>
        </span>
        <span className='lg:w-[45%] w-[90%] transition-all group cursor-pointer duration-700 hover:bg-red-500 shadow-md py-[12px] border-[1px] border-slate-300 rounded-md bg-[#fcf8f8] flex justify-evenly items-center'>
          <Image width={30} height={20} alt='googleic' src='/googleicon.png' />
          <p className='text-red-500 transition-all duration-700 group-hover:text-white text-sm font-loginform'>Signin with Google</p>
        </span>
      </div>
      <div className='w-full flex mt-[35px] *:my-[3px] flex-wrap justify-start items-center'>
        <h3 className='w-full text-gray-700 font-loginform'><Link className='hover:underline transition-all duration-700' href='Pages/Forgotpass'>Forgot Password?</Link></h3>
        <span className='w-full flex flex-wrap  justify-start items-center'>
          <p className='font-loginform3'>Dont't have an account?</p>
          <h3 className='font-loginform lg:w-auto w-full text-gray-700 ml-[3px]'><Link className='hover:underline transition-all duration-700' href='Pages/Register'>Create an Account</Link></h3>
          <CustomizedSnackbars />
        </span>
      </div>
    </div>
  )
}
