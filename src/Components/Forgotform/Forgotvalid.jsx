"use client"
import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ErrorIcon from '@mui/icons-material/Error';

export default function Forgotvalid() {
    const formik = useFormik({
        initialValues: {
            email: '',
            pass: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Please enter a valid email address.')
                .required(`What's your Email address?`),
        }),
        onSubmit: values => {
            alert('Received Your Email Address!!!')
            window.location.href = '/';
        },
    });
    return (
        <form className='flex flex-wrap *:my-[15px] w-full' onSubmit={formik.handleSubmit}>
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
            <button className='w-full py-[8px] rounded-md capitalize font-loginform1 border-[1px] border-[#0162e8] transition-all duration-700 hover:bg-[#0054ca] bg-[#0162e8] text-white' type="submit">Send</button>
        </form>
    )
}
