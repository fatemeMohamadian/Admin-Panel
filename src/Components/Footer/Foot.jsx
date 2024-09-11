import React from 'react'
import Link from 'next/link'
export default function Foot() {
  return (
    <footer className='w-[95%] *:my-[20px] flex flex-wrap justify-center text-center lg:justify-between items-center'>
        <div className='lg:w-[40%] *:text-sm w-full flex flex-wrap justify-end items-center'>
            <h3 className='font-loginform text-[#414b57]'>Developed By <Link className='text-[#1c2026] hover:underline' href='https://linkedin.com/in/fateme-mohamadian-dev0824'>FatemehMoahamdian</Link></h3>
        </div>
        <div className='lg:w-[40%] w-full flex justify-center lg:justify-end items-center flex-wrap'>
            <ul className='w-full flex *:mx-[6px] *:text-sm *:cursor-pointer justify-center lg:justify-end items-center flex-wrap list-none *:font-text1 *:text-[#414b57]'>
                <li>Home</li>
                <li>Documentation</li>
                <li>Support</li>
            </ul>
        </div>
    </footer>
  )
}
