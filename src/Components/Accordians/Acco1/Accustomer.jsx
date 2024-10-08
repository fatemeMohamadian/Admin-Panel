"use client"
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import GroupIcon from '@mui/icons-material/Group';
export default function AccordionTransition1() {
    const [expanded, setExpanded] = React.useState(false);
    const [show, setShow] = React.useState(true)
    const bolor = React.useRef()
    const handleExpansion = () => {
        setExpanded((prevExpanded) => !prevExpanded);
        if (show) {
            bolor.current.style.backgroundColor = 'rgb(70 128 255 / 8%)'
            bolor.current.style.color = 'rgb(70,128,255)'
        }
        else {
            bolor.current.style.backgroundColor = 'rgb(248, 249, 250)'
            bolor.current.style.color = 'rgb(91, 107, 121)'
        }
        setShow(!show)
    };

    return (
        <div className='w-full hover:bg-gray-200 flex flex-wrap justify-center items-center'>
            <Accordion
                className='w-full flex flex-wrap justify-center items-center'
                expanded={expanded}
                onChange={handleExpansion}
                slots={{ transition: Fade }}
                sx={[
                    expanded
                        ? {
                            '& .MuiAccordion-region': {
                                height: 'auto',
                            },
                            '& .MuiAccordionDetails-root': {
                                display: 'flex',
                            },
                            boxShadow: 'none',
                            backgroundColor: 'rgb(248, 249, 250)',
                        }
                        : {
                            '& .MuiAccordion-region': {
                                height: 0,
                            },
                            '& .MuiAccordionDetails-root': {
                                display: 'none',
                            },
                            boxShadow: 'none',
                        },
                ]}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    ref={bolor}
                    sx={
                        {
                            width: '250px',
                            height: '10px',
                            borderRadius: '10px',
                            color: 'rgb(91, 107, 121)',
                            boxShadow: 'none',
                            backgroundColor: 'rgb(248, 249, 250)'
                        }
                    }
                >
                    <Typography className='flex w-full flex-wrap justify-between items-center'>
                        <span className='w-[20%] flex justify-end items-center'>
                            <GroupIcon />
                            <span className='w-[50%] translate-x-[12px] font-text1'>Customer</span>
                        </span>

                    </Typography>
                </AccordionSummary>
                <AccordionDetails className='w-full *:my-[10px] flex flex-wrap justify-start items-center'>
                    <Typography className='w-full flex justify-between items-center flex-wrap'>
                        <span className='w-[80%] flex flex-wrap justify-start items-center'>
                            <FiberManualRecordIcon style={{fontSize:'11px'}} className='text-[11px] text-[#4d5656]' />
                            <span className='flex text-[#4d5656] ml-[17px] justify-center items-center font-loginh1 text-sm'>List</span>
                        </span>
                        <span className='flex justify-center items-center flex-wrap'>
                            <AddCircleOutlineIcon style={{fontSize:'11px'}} className='text-[20px]'/>
                        </span>
                    </Typography>
                    <Typography style={{marginTop:'15px'}} className='w-full flex justify-evenly items-center flex-wrap'>
                        <span className='w-full flex flex-wrap justify-start items-center'>
                            <FiberManualRecordIcon style={{fontSize:'11px'}} className='text-[11px] text-[#4d5656]' />
                            <span className='flex text-[#4d5656] ml-[15px] justify-center text-sm items-center font-loginh1'>Cards</span>
                        </span>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
