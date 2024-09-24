"use client"
import React, { useRef } from 'react'
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArchiveIcon from '@mui/icons-material/Archive';
import WidgetsIcon from '@mui/icons-material/Widgets';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import CloseIcon from '@mui/icons-material/Close';
import BasicTabs from '../Tabs/Tab';
import Swal from 'sweetalert2';
export default function Nav() {
    const logout = useRef()
    const myshow = (e) => {
        // console.log(e.target.parentElement.lastChild);
        e.target.parentElement.lastChild.style.display = 'flex'
    }
    const myclose = () => {
        logout.current.style.display = 'none'
    }
    const myout = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, I'm Sure"
        }).then((result) => {
            if (result.isConfirmed) {
               window.location.href = '/';
            }
        });
    }
    return (
        <div className='w-full  flex justify-evenly items-center flex-wrap'>
            <span className='flex hover:bg-slate-100 py-[5px] px-[5px] rounded-md cursor-pointer justify-center items-center'>
                <WidgetsIcon className='text-[#5b6b79]' />
            </span>
            <span className='flex hover:bg-slate-100 py-[5px] px-[5px] rounded-md cursor-pointer justify-center items-center'>
                <ArchiveIcon className='text-[#5b6b79]' />
            </span>
            <span className='relative hover:bg-slate-100 py-[5px] px-[5px] rounded-md cursor-pointer flex justify-center items-center'>
                <NotificationsIcon className='text-[#5b6b79]' />
                <span className='font-text1 px-[8px] rounded-[50%] bg-teal-600 text-white text-sm absolute top-[-9px] right-[-3px]'><p>2</p></span>
            </span>
            <span className='flex hover:bg-slate-100 py-[5px] px-[5px] rounded-md cursor-pointer justify-center items-center'>
                <OpenInNewIcon className='text-[#5b6b79]' />
            </span>
            <span className='flex hover:bg-slate-100 py-[5px] px-[5px] rounded-md cursor-pointer justify-center items-center'>
                <MarkChatUnreadIcon className='text-[#5b6b79]' />
            </span>
            <span onClick={myshow} className='flex relative justify-center items-center'>
                <img className='w-[50px] h-[50px] cursor-pointer rounded-[50%] object-cover' alt='self' src='/10.jpg' />
                <section ref={logout} className='sec1 w-[350px] z-50 rounded-xl hidden flex-wrap justify-evenly items-center bg-white shadow-md absolute top-[50px] right-[15px]'>
                    <span onClick={myclose} className='group flex justify-end w-full items-center cursor-pointer'><CloseIcon className='text-red-500 group-hover:rotate-[180deg] transition-all duration-500' /></span>
                    <div className='w-full my-[15px] flex-wrap flex justify-around items-center'>
                        <figure className='w-[55%] flex justify-between items-center'>
                            <img className='w-[50px] h-[50px] object-cover rounded-[50%]' src="/10.jpg" alt="" />
                            <figcaption className='flex *:my-[5px] w-[120px] flex-wrap justify-start items-center'>
                                <h3 className='font-loginform w-full'>Admin User</h3>
                                <p className='font-loginform3 text-sm text-[#5b6b79]'>FrontEnd-Dev</p>
                            </figcaption>
                        </figure>
                        <span onClick={myout} className='flex cursor-pointer justify-center items-center'>
                            <LogoutOutlinedIcon className='text-red-600' />
                        </span>
                    </div>
                    <div className='w-full flex justify-center flex-wrap items-center'>
                        <BasicTabs myout={myout} />
                    </div>
                </section>
            </span>

        </div>
    )
}
