"use client"
import React, { useRef, useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ErrorIcon from '@mui/icons-material/Error';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
export default function Signin() {
    const [showpass, setShowpass] = useState(true)
    const showic = useRef()
    // const inpemail = useRef()
    // const inppas = useRef()
    const formik = useFormik({
        initialValues: {
            email: '',
            pass: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Please enter a valid email address.')
                .required(`What's your Email address?`),
            pass: Yup.string()
                .required(`Password is required!`)
                .min(8, 'Must be 8 characters long or More')
                .matches(/[0-9]/, 'Password must have a Number')
                .matches(/[A-Z]/, 'Password must have an uppercase char')
                .matches(/[a-z]/, 'Password must have a lowercase char')
                .matches(/[&#$@!*]/, 'Password must have a Symbol'),
        }),
        onSubmit: values => {
            const url = new URL('https://66c63c58134eb8f434972511.mockapi.io/infousers');
            url.searchParams.append('email', values.email);
            url.searchParams.append('pass', values.pass);

            fetch(url, {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
            }).then(res => {
                if (res.ok) {
                    return res.json();
                }
            }).then(tasks => {
                if (tasks == undefined) {
                    alert('User Not Found!!!\nEmail address or Password not exist!')
                }
                else {
                    alert('Your Account Is Ready!!!Welcome')
                    window.location.href = 'Pages/Mainpage/Default';
                }
            })
        },
    });
    const show = () => {
        if (showpass) {
            showic.current.children[0].style.display = 'flex'
            showic.current.children[1].style.display = 'none'
        }
        else {
            showic.current.children[0].style.display = 'none'
            showic.current.children[1].style.display = 'flex'
        }
        setShowpass(!showpass)
    }
    return (
        <form className='flex flex-wrap *:my-[8px] w-full' onSubmit={formik.handleSubmit}>
            <label className='font-loginform' htmlFor="email">Email</label>
            <input className='w-full bg-[#F8F9FA] font-text border-b outline-none h-[45px] placeholder:font-loginform3'
                placeholder='Enter Your Email'
                id="email"
                name="email"
                type="email"
                autoComplete='off'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
                <div className='w-full flex justify-start items-center'>
                    <p className='font-loginh2 text-sm text-red-500'> <ErrorIcon className='text-lg text-red-500' /> {formik.errors.email}</p>
                </div>
            ) : null}

            <label className='font-loginform w-full pt-[10px]' htmlFor="pass">Password</label>
            <div className='w-full flex flex-wrap justify-between items-center'>
                <input className='w-[90%] bg-[#F8F9FA] font-text border-b outline-none h-[45px] placeholder:font-loginform3'
                    placeholder='Enter Your Password'
                    id="pass"
                    name="pass"
                    autoComplete='off'
                    type={showpass ? "password" : "text"}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.pass}
                />
                <div onClick={show} ref={showic} className='w-[10%] *:absolute relative flex justify-center cursor-pointer items-center'>
                    <span className='hidden justify-center items-center w-full'><VisibilityIcon /></span>
                    <span className='w-full flex justify-center items-center'><VisibilityOffIcon /></span>
                </div>
            </div>
            {formik.touched.pass && formik.errors.pass ? (
                <div className='w-full flex justify-start items-center'>
                    <p className='font-loginh2 text-sm text-red-500'> <ErrorIcon className='text-lg text-red-500' /> {formik.errors.pass}</p>
                </div>
            ) : null}
            <button className='w-full py-[8px] rounded-md capitalize font-loginform1 border-[1px] border-[#0162e8] transition-all duration-700 hover:bg-[#0054ca] bg-[#0162e8] text-white' type="submit">Sign in</button>
        </form>
    );
}
