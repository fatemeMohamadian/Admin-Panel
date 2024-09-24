"use client"
import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function CustomizedSnackbars() {
    const [open, setOpen] = React.useState(true);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <div>
            <Snackbar open={open} autoHideDuration={8000} transitionDuration={3000} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity="success"
                    variant="filled"
                    sx={{ width: '100%', background: 'rgb(1, 87, 152)' }}
                >
                    <h3 className='font-text'>You can register but if you don't have time via:</h3>
                    <div className='flex flex-wrap justify-center items-center text-center *:w-full'>
                        <p className='mt-[5px] font-loginh2 text-yellow-300'><span className='font-loginform1 text-white'>Email:</span> admin@gmail.com</p>
                        <p className='my-[5px] font-loginh2 text-yellow-300'><span className='font-loginform1 text-white'>Password:</span> ad24#Min</p>
                    </div>
                    <p className='font-loginform'>Login to admin account!</p>
                </Alert>
            </Snackbar>
        </div>
    );
}
