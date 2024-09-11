"use client"
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import CallMadeIcon from '@mui/icons-material/CallMade';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom:1, borderColor: 'divider',display:'flex' ,justifyContent:'center',alignItems:'center' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="All transaction" sx={{ textTransform: 'capitalize', marginBottom:'8px', color: '#262d36', fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontFamily: 'loginform' }} {...a11yProps(0)} />
                    <Tab label="Success" sx={{ textTransform: 'capitalize', marginBottom:'8px', color: '#262d36', fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontFamily: 'loginform' }} {...a11yProps(1)} />
                    <Tab label="Pending" sx={{ textTransform: 'capitalize', marginBottom:'8px', color: '#262d36', fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontFamily: 'loginform' }} {...a11yProps(2)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <div className='w-full pb-[12px] flex justify-between items-center border-b flex-wrap'>
                    <div className='flex flex-wrap justify-between items-center'>
                        <span className='font-text1 font-semibold text-[#262d36] flex justify-center items-center rounded-lg px-[12px] py-[8px] border'>AI</span>
                        <div className='w-[75%] flex flex-wrap justify-start items-center'>
                            <h3 className='w-full font-bold text-[#262d36] font-text1'>Apple Ins.</h3>
                            <p className='font-loginform3 capitalize leading-[35px] text-[#5b6b79] text-sm'>#Able-pro-t00232</p>
                        </div>
                    </div>
                    <span className='flex flex-wrap justify-end items-center'>
                        <p className='w-full text-[#262d36] font-loginform flex justify-end items-center'>$210,000</p>
                        <p className='text-[18px] flex justify-center items-center font-text1 text-[#be3345]'><CallMadeIcon style={{fontSize:'15px'}} className='text-sm rotate-[180deg] mr-[5px]' /> 10.6%</p>
                    </span>
                </div>
                {/* /////////////////// */}
                <div className='w-full py-[12px] flex justify-between items-center border-b flex-wrap'>
                    <div className='flex flex-wrap justify-between items-center'>
                        <span className='font-text1 font-semibold text-[#262d36] flex justify-center items-center rounded-lg px-[12px] py-[8px] border'>SM</span>
                        <div className='w-[78%] flex flex-wrap justify-start items-center'>
                            <h3 className='w-full font-bold text-[#262d36] font-text1'>Spotify Music</h3>
                            <p className='font-loginform3 capitalize leading-[35px] text-[#5b6b79] text-sm'>#Able-pro-t00233</p>
                        </div>
                    </div>
                    <span className='flex flex-wrap justify-end items-center'>
                        <p className='w-full text-[#262d36] font-loginform flex justify-end items-center'>-10,000</p>
                        <p className='text-[18px] flex justify-center items-center font-text1 text-[#07914a]'><CallMadeIcon style={{fontSize:'15px'}} className='text-sm mr-[5px]' /> 30.6%</p>
                    </span>
                </div>
                {/* ////////////////////////////////// */}
                <div className='w-full py-[12px] flex justify-between items-center border-b flex-wrap'>
                    <div className='flex flex-wrap justify-between items-center'>
                        <span className='font-text1 bg-sky-50 font-semibold text-[#0e5dc5] flex justify-center items-center rounded-lg px-[12px] py-[8px]'>MD</span>
                        <div className='w-[65%] flex flex-wrap justify-start items-center'>
                            <h3 className='w-full font-bold text-[#262d36] font-text1'>Medium</h3>
                            <p className='font-loginform3 capitalize leading-[35px] text-[#5b6b79] text-sm'>06:30 pm</p>
                        </div>
                    </div>
                    <span className='flex flex-wrap justify-end items-center'>
                        <p className='w-full text-[#262d36] font-loginform flex justify-end items-center'>-26</p>
                        <p className='text-[18px] font-text1 text-[#d4830a] flex justify-center items-center'><PublishedWithChangesIcon className='text-sm mr-[5px]' /> 5%</p>
                    </span>
                </div>
                {/* //////////////////////////////// */}
                <div className='w-full py-[12px] flex justify-between items-center border-b flex-wrap'>
                    <div className='flex flex-wrap justify-between items-center'>
                        <span className='font-text1 font-semibold text-[#262d36] flex justify-center items-center rounded-lg px-[12px] py-[8px] border'>U</span>
                        <div className='w-[55%] flex flex-wrap justify-start items-center'>
                            <h3 className='w-full font-bold text-[#262d36] font-text1'>Uber</h3>
                            <p className='font-loginform3 capitalize leading-[35px] text-[#5b6b79] text-sm'>08:40 pm</p>
                        </div>
                    </div>
                    <span className='flex flex-wrap justify-end items-center'>
                        <p className='w-full text-[#262d36] font-loginform flex justify-end items-center'>+2,10,000</p>
                        <p className='text-[18px] font-text1 text-[#08be5d] flex justify-center items-center'><CallMadeIcon style={{fontSize:'15px'}} className='text-sm mr-[5px]' /> 12.3%</p>
                    </span>
                </div>
                {/* //////////////////////////////////// */}
                <div className='w-full py-[12px] flex justify-between items-center border-b flex-wrap'>
                    <div className='flex flex-wrap justify-between items-center'>
                        <span className='font-text1 bg-orange-100 font-semibold text-[#fa7f13] flex justify-center items-center rounded-lg px-[12px] py-[8px]'>OC</span>
                        <div className='w-[65%] flex flex-wrap justify-start items-center'>
                            <h3 className='w-full font-bold text-[#262d36] font-text1'>Ola Cabs</h3>
                            <p className='font-loginform3 capitalize leading-[35px] text-[#5b6b79] text-sm'>07:40 pm</p>
                        </div>
                    </div>
                    <span className='flex flex-wrap justify-end items-center'>
                        <p className='w-full text-[#262d36] font-loginform flex justify-end items-center'>+5,10,000</p>
                        <p className='text-[18px] font-text1 text-[#08be5d] flex justify-center items-center'><CallMadeIcon style={{fontSize:'15px'}} className='text-sm mr-[5px]' /> 25.7%</p>
                    </span>
                </div>
            </CustomTabPanel>
            {/* /////////////////////////////////////////////////////// */}
            <CustomTabPanel value={value} index={1}>
                <div className='w-full pb-[12px] flex justify-between items-center border-b flex-wrap'>
                    <div className='flex flex-wrap justify-between items-center'>
                        <span className='font-text1 font-semibold text-[#262d36] flex justify-center items-center rounded-lg px-[12px] py-[8px] border'>U</span>
                        <div className='w-[55%] flex flex-wrap justify-start items-center'>
                            <h3 className='w-full font-bold text-[#262d36] font-text1'>Uber</h3>
                            <p className='font-loginform3 capitalize leading-[35px] text-[#5b6b79] text-sm'>08:40 pm</p>
                        </div>
                    </div>
                    <span className='flex flex-wrap justify-end items-center'>
                        <p className='w-full text-[#262d36] font-loginform flex justify-end items-center'>+2,10,000</p>
                        <p className='text-[18px] font-text1 text-[#08be5d] flex justify-center items-center'><CallMadeIcon style={{fontSize:'15px'}} className='text-sm mr-[5px]' /> 12.3%</p>
                    </span>
                </div>
                {/* /////////////////////// */}
                <div className='w-full py-[12px] flex justify-between items-center border-b flex-wrap'>
                    <div className='flex flex-wrap justify-between items-center'>
                        <span className='font-text1 font-semibold text-[#262d36] flex justify-center items-center rounded-lg px-[12px] py-[8px] border'>SM</span>
                        <div className='w-[78%] flex flex-wrap justify-start items-center'>
                            <h3 className='w-full font-bold text-[#262d36] font-text1'>Spotify Music</h3>
                            <p className='font-loginform3 capitalize leading-[35px] text-[#5b6b79] text-sm'>#Able-pro-t00233</p>
                        </div>
                    </div>
                    <span className='flex flex-wrap justify-end items-center'>
                        <p className='w-full text-[#262d36] font-loginform flex justify-end items-center'>-10,000</p>
                        <p className='text-[18px] flex justify-center items-center font-text1 text-[#07914a]'><CallMadeIcon style={{fontSize:'15px'}} className='text-sm mr-[5px]' /> 30.6%</p>
                    </span>
                </div>
                {/* ////////////////////////// */}
                <div className='w-full py-[12px] flex justify-between items-center border-b flex-wrap'>
                    <div className='flex flex-wrap justify-between items-center'>
                        <span className='font-text1 font-semibold text-[#262d36] flex justify-center items-center rounded-lg px-[12px] py-[8px] border'>AI</span>
                        <div className='w-[75%] flex flex-wrap justify-start items-center'>
                            <h3 className='w-full font-bold text-[#262d36] font-text1'>Apple Ins.</h3>
                            <p className='font-loginform3 capitalize leading-[35px] text-[#5b6b79] text-sm'>#Able-pro-t00232</p>
                        </div>
                    </div>
                    <span className='flex flex-wrap justify-end items-center'>
                        <p className='w-full text-[#262d36] font-loginform flex justify-end items-center'>$210,000</p>
                        <p className='text-[18px] flex justify-center items-center font-text1 text-[#be3345]'><CallMadeIcon style={{fontSize:'15px'}} className='text-sm rotate-[180deg] mr-[5px]' /> 10.6%</p>
                    </span>
                </div>
                {/* ////////////////////// */}
                <div className='w-full py-[12px] flex justify-between items-center border-b flex-wrap'>
                    <div className='flex flex-wrap justify-between items-center'>
                        <span className='font-text1 bg-orange-100 font-semibold text-[#fa7f13] flex justify-center items-center rounded-lg px-[12px] py-[8px]'>OC</span>
                        <div className='w-[65%] flex flex-wrap justify-start items-center'>
                            <h3 className='w-full font-bold text-[#262d36] font-text1'>Ola Cabs</h3>
                            <p className='font-loginform3 capitalize leading-[35px] text-[#5b6b79] text-sm'>07:40 pm</p>
                        </div>
                    </div>
                    <span className='flex flex-wrap justify-end items-center'>
                        <p className='w-full text-[#262d36] font-loginform flex justify-end items-center'>+5,10,000</p>
                        <p className='text-[18px] font-text1 text-[#08be5d] flex justify-center items-center'><CallMadeIcon style={{fontSize:'15px'}} className='text-sm mr-[5px]' /> 25.7%</p>
                    </span>
                </div>
                {/* //////////////////////////////////////// */}
                <div className='w-full py-[12px] flex justify-between items-center border-b flex-wrap'>
                    <div className='flex flex-wrap justify-between items-center'>
                        <span className='font-text1 bg-sky-50 font-semibold text-[#0e5dc5] flex justify-center items-center rounded-lg px-[12px] py-[8px]'>MD</span>
                        <div className='w-[65%] flex flex-wrap justify-start items-center'>
                            <h3 className='w-full font-bold text-[#262d36] font-text1'>Medium</h3>
                            <p className='font-loginform3 capitalize leading-[35px] text-[#5b6b79] text-sm'>06:30 pm</p>
                        </div>
                    </div>
                    <span className='flex flex-wrap justify-end items-center'>
                        <p className='w-full text-[#262d36] font-loginform flex justify-end items-center'>-26</p>
                        <p className='text-[18px] font-text1 text-[#d4830a] flex justify-center items-center'><PublishedWithChangesIcon className='text-sm mr-[5px]' /> 5%</p>
                    </span>
                </div>
            </CustomTabPanel>
            {/* ////////////////////////////////////// */}
            <CustomTabPanel value={value} index={2}>
                <div className='w-full pb-[12px] flex justify-between items-center border-b flex-wrap'>
                    <div className='flex flex-wrap justify-between items-center'>
                        <span className='font-text1 font-semibold text-[#262d36] flex justify-center items-center rounded-lg px-[12px] py-[8px] border'>SM</span>
                        <div className='w-[78%] flex flex-wrap justify-start items-center'>
                            <h3 className='w-full font-bold text-[#262d36] font-text1'>Spotify Music</h3>
                            <p className='font-loginform3 capitalize leading-[35px] text-[#5b6b79] text-sm'>#Able-pro-t00233</p>
                        </div>
                    </div>
                    <span className='flex flex-wrap justify-end items-center'>
                        <p className='w-full text-[#262d36] font-loginform flex justify-end items-center'>-10,000</p>
                        <p className='text-[18px] flex justify-center items-center font-text1 text-[#07914a]'><CallMadeIcon style={{fontSize:'15px'}} className='text-sm mr-[5px]' /> 30.6%</p>
                    </span>
                </div>
                {/* //////////////////////////////////////// */}
                <div className='w-full py-[12px] flex justify-between items-center border-b flex-wrap'>
                    <div className='flex flex-wrap justify-between items-center'>
                        <span className='font-text1 bg-sky-50 font-semibold text-[#0e5dc5] flex justify-center items-center rounded-lg px-[12px] py-[8px]'>MD</span>
                        <div className='w-[65%] flex flex-wrap justify-start items-center'>
                            <h3 className='w-full font-bold text-[#262d36] font-text1'>Medium</h3>
                            <p className='font-loginform3 capitalize leading-[35px] text-[#5b6b79] text-sm'>06:30 pm</p>
                        </div>
                    </div>
                    <span className='flex flex-wrap justify-end items-center'>
                        <p className='w-full text-[#262d36] font-loginform flex justify-end items-center'>-26</p>
                        <p className='text-[18px] font-text1 text-[#d4830a] flex justify-center items-center'><PublishedWithChangesIcon className='text-sm mr-[5px]' /> 5%</p>
                    </span>
                </div>
                {/* //////////////////////////////////////// */}
                <div className='w-full py-[12px] flex justify-between items-center border-b flex-wrap'>
                    <div className='flex flex-wrap justify-between items-center'>
                        <span className='font-text1 font-semibold text-[#262d36] flex justify-center items-center rounded-lg px-[12px] py-[8px] border'>U</span>
                        <div className='w-[55%] flex flex-wrap justify-start items-center'>
                            <h3 className='w-full font-bold text-[#262d36] font-text1'>Uber</h3>
                            <p className='font-loginform3 capitalize leading-[35px] text-[#5b6b79] text-sm'>08:40 pm</p>
                        </div>
                    </div>
                    <span className='flex flex-wrap justify-end items-center'>
                        <p className='w-full text-[#262d36] font-loginform flex justify-end items-center'>+2,10,000</p>
                        <p className='text-[18px] font-text1 text-[#08be5d] flex justify-center items-center'><CallMadeIcon style={{fontSize:'15px'}} className='text-sm mr-[5px]' /> 12.3%</p>
                    </span>
                </div>
                {/* ////////////////////////////////// */}
                <div className='w-full py-[12px] flex justify-between items-center border-b flex-wrap'>
                    <div className='flex flex-wrap justify-between items-center'>
                        <span className='font-text1 bg-orange-100 font-semibold text-[#fa7f13] flex justify-center items-center rounded-lg px-[12px] py-[8px]'>OC</span>
                        <div className='w-[65%] flex flex-wrap justify-start items-center'>
                            <h3 className='w-full font-bold text-[#262d36] font-text1'>Ola Cabs</h3>
                            <p className='font-loginform3 capitalize leading-[35px] text-[#5b6b79] text-sm'>07:40 pm</p>
                        </div>
                    </div>
                    <span className='flex flex-wrap justify-end items-center'>
                        <p className='w-full text-[#262d36] font-loginform flex justify-end items-center'>+5,10,000</p>
                        <p className='text-[18px] font-text1 text-[#08be5d] flex justify-center items-center'><CallMadeIcon style={{fontSize:'15px'}} className='text-sm mr-[5px]' /> 25.7%</p>
                    </span>
                </div>
                {/* /////////////////////////////////// */}
                <div className='w-full py-[12px] flex justify-between items-center border-b flex-wrap'>
                    <div className='flex flex-wrap justify-between items-center'>
                        <span className='font-text1 font-semibold text-[#262d36] flex justify-center items-center rounded-lg px-[12px] py-[8px] border'>AI</span>
                        <div className='w-[75%] flex flex-wrap justify-start items-center'>
                            <h3 className='w-full font-bold text-[#262d36] font-text1'>Apple Ins.</h3>
                            <p className='font-loginform3 capitalize leading-[35px] text-[#5b6b79] text-sm'>#Able-pro-t00232</p>
                        </div>
                    </div>
                    <span className='flex flex-wrap justify-end items-center'>
                        <p className='w-full text-[#262d36] font-loginform flex justify-end items-center'>$210,000</p>
                        <p className='text-[18px] flex justify-center items-center font-text1 text-[#be3345]'><CallMadeIcon style={{fontSize:'15px'}} className='text-sm rotate-[180deg] mr-[5px]' /> 10.6%</p>
                    </span>
                </div>
            </CustomTabPanel>
        </Box>
    );
}
