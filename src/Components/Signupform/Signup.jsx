"use client"
import React, { useRef, useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ErrorIcon from '@mui/icons-material/Error';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
export default function Signup() {
    const [showpass, setShowpass] = useState(true)
    const [showpass2, setShowpass2] = useState(true)
    const showic = useRef()
    const showic2 = useRef()
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            pass: '',
            repeat: ''
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(6, 'Must be 6 characters or More')
                .max(25, 'Must be 25 characters or less')
                .required(`What's your Name?`),
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
            repeat: Yup.string()
                .required('Repeate The Password!')
                .oneOf([Yup.ref('pass'), null], 'Must match the password! '),
        }),
        onSubmit: values => {
            fetch('https://66c63c58134eb8f434972511.mockapi.io/infousers', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(values)
            }).then(res => {
                if (res.ok) {
                    return res.json();
                }
            }).then(task => {
                alert('Your registration was successful!!')
                window.location.href = '/';
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
    const myshow = () => {
        if (showpass2) {
            showic2.current.children[0].style.display = 'flex'
            showic2.current.children[1].style.display = 'none'
        }
        else {
            showic2.current.children[0].style.display = 'none'
            showic2.current.children[1].style.display = 'flex'
        }
        setShowpass2(!showpass2)
    }
    return (
        <form className='*:my-[5px] w-full flex flex-wrap' onSubmit={formik.handleSubmit}>
            <label className='font-loginform w-full' htmlFor="firstName">Firstname and Lastname</label>
            <input className='w-full bg-[#F8F9FA] font-text border-b outline-none h-[45px] placeholder:font-loginform3'
                placeholder='Enter your firstname and lastname'
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
                <div className='w-full flex justify-start items-center'>
                    <p className='font-loginh2 text-sm text-red-500'> <ErrorIcon className='text-lg text-red-500' /> {formik.errors.name}</p>
                </div>
            ) : null}
            <label className='font-loginform w-full pt-[15px]' htmlFor="email">Email Address</label>
            <input className='w-full bg-[#F8F9FA] font-text border-b outline-none h-[45px] placeholder:font-loginform3'
                placeholder='Enter Your Email'
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
                <div className='w-full flex justify-start items-center'>
                    <p className='font-loginh2 text-sm text-red-500'> <ErrorIcon className='text-lg text-red-500' /> {formik.errors.email}</p>
                </div>
            ) : null}

            <label className='font-loginform w-full pt-[15px]' htmlFor="pass">Password</label>
            <div className='w-full flex flex-wrap justify-between items-center'>
                <input className='w-[90%] bg-[#F8F9FA] font-text border-b outline-none h-[45px] placeholder:font-loginform3'
                    placeholder='Enter Your Password'
                    id="pass"
                    name="pass"
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

            <label className='font-loginform w-full pt-[15px]' htmlFor="password">Confrim Password</label>
            <div className='w-full flex flex-wrap justify-between items-center'>
                <input className='w-[90%] bg-[#F8F9FA] font-text border-b outline-none h-[45px] placeholder:font-loginform3'
                    placeholder='Repeat The Password'
                    id="repeat"
                    name="repeat"
                    type={showpass2 ? "password" : "text"}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.repeat}
                />
                <div onClick={myshow} ref={showic2} className='w-[10%] *:absolute relative flex justify-center cursor-pointer items-center'>
                    <span className='hidden justify-center items-center w-full'><VisibilityIcon /></span>
                    <span className='w-full flex justify-center items-center'><VisibilityOffIcon /></span>
                </div>
            </div>
            {formik.touched.repeat && formik.errors.repeat ? (
                <div className='w-full flex justify-start items-center'>
                    <p className='font-loginh2 text-sm text-red-500'> <ErrorIcon className='text-lg text-red-500' /> {formik.errors.repeat}</p>
                </div>
            ) : null}

            <button className='w-full py-[9px] translate-y-[10px] rounded-md capitalize font-loginform1 border-[1px] border-[#0162e8] transition-all duration-700 hover:bg-[#0054ca] bg-[#0162e8] text-white' type="submit">Create Account</button>
        </form>
    );
}
