"use client"
import React, { useRef, useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ErrorIcon from '@mui/icons-material/Error';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Swal from 'sweetalert2';
export default function Signin() {
    const [showpass, setShowpass] = useState(true)
    const showic = useRef()
    const formik = useFormik({
        initialValues: {
            email: 'admin@gmail.com',
            pass: 'ad24#Min',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Please enter a valid email address.')
                .required(`What's your Email address?`),
            pass: Yup.string()
                .required(`Password is required!`)
                .min(8, 'Password is invalid!')
                .matches(/[0-9]/, 'Password is invalid!')
                .matches(/[A-Z]/, 'Password is invalid!')
                .matches(/[a-z]/, 'Password is invalid!')
                .matches(/[&#$@!*]/, 'Password is invalid!'),
        }),
        onSubmit: values => {
            const url = new URL('https://66c63c58134eb8f434972511.mockapi.io/infousers');
            url.searchParams.append('email', values.email);
            url.searchParams.append('pass', values.pass);

            fetch(url, {
                method: 'GET',
                headers: { 'content-type': 'application/json' },
            }).then(res => {
                if (res.ok) {
                    return res.json();
                }
            }).then(tasks => {
                if (tasks === undefined) {
                    Swal.fire({
                        icon: "error",
                        title: "User Not Found!!!",
                        text: "Email address or Password not exist!",
                    });
                }
                else {
                    // Swal.fire({
                    //     title: "Welcome...!",
                    //     text: "Your Account Is Ready!",
                    //     icon: "success",
                    //     showConfirmButton:false
                    // });
                    const Toast = Swal.mixin({
                        toast: true,
                        position: "top-start",
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.onmouseenter = Swal.stopTimer;
                            toast.onmouseleave = Swal.resumeTimer;
                        }
                    });
                    Toast.fire({
                        title: "Welcome...!",
                        text: "Your Account Is Ready!",
                        icon: "success",
                        width: '400px',
                    });
                    setTimeout(() => {
                        window.location.href = 'Pages/Mainpage/Default';
                    }, 3500);
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
                onFocus={() => formik.setValues({ ...formik.values, email: '' })}
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
                    onFocus={() => formik.setValues({ ...formik.values, pass: '' })}
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
