import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Forgotvalid from '../Forgotform/Forgotvalid'
import Logo from '../Piclogo/Logo'
export default function Infoforgot() {
    return (
        <div className='w-[75%] flex justify-center items-center flex-wrap'>
            <div className='w-full my-[25px] justify-start items-center flex'>
               <Logo/>
            </div>
            <div className='w-full my-[30px] *:my-[3px] *:w-full flex flex-wrap justify-start items-center'>
                <h1 className='font-loginh1 text-2xl text-[#0162e8]'>Forgot Password!</h1>
                <h2 className='font-loginform text-sm capitalize text-[#031b4e]'>please enter your email.</h2>
            </div>
            <div className='w-full flex justify-start items-center flex-wrap'>
                <Forgotvalid/>
            </div>
            <div className='w-full *:text-sm flex mt-[35px] *:my-[3px] flex-wrap justify-start items-center'>
                <p className='font-loginform'>Forgot it,</p>
                <span className='flex justify-start items-center'>
                    <h3 className='font-loginform text-gray-700 ml-[3px]'><Link className='hover:underline transition-all duration-700' href='/'>Send me back</Link></h3>
                    <p className='font-loginform pl-[5px]'>to the sign in screen</p>
                </span>
            </div>
        </div>
    )
}
