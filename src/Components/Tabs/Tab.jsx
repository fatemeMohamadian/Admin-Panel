import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import GroupIcon from '@mui/icons-material/Group';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import RateReviewIcon from '@mui/icons-material/RateReview';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
function CustomTabPanel(props) {
    const { children, value, index, ownerstate, ...other } = props;

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

export default function BasicTabs({myout}) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab iconPosition='start' sx={{ textTransform: 'capitalize', fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', width: '50%', fontFamily: 'loginform' }} icon={<PersonOutlineOutlinedIcon />} label="Profile" {...a11yProps(0)} />
                    <Tab iconPosition='start' sx={{ textTransform: 'capitalize', fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', width: '50%', fontFamily: 'loginform' }} icon={<SettingsOutlinedIcon />} label="Setting" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <div className='w-full flex justify-start items-center py-[10px] cursor-pointer rounded-md hover:bg-gray-100 text-[#4d5656]'>
                    <DriveFileRenameOutlineOutlinedIcon className='ml-[10px]' />
                    <p className='ml-[12px]'>Edit Profile</p>
                </div>
                <div className='w-full flex justify-start items-center py-[10px] cursor-pointer rounded-md hover:bg-gray-100 text-[#4d5656]'>
                    <RemoveRedEyeIcon className='ml-[10px]' />
                    <p className='ml-[12px]'>View Profile</p>
                </div>
                <div className='w-full flex justify-start items-center py-[10px] cursor-pointer rounded-md hover:bg-gray-100 text-[#4d5656]'>
                    <GroupIcon className='ml-[10px]' />
                    <p className='ml-[12px]'>Social Profile</p>
                </div>
                <div className='w-full flex justify-start items-center py-[10px] cursor-pointer rounded-md hover:bg-gray-100 text-[#4d5656]'>
                    <CreditCardIcon className='ml-[10px]' />
                    <p className='ml-[12px]'>Billing</p>
                </div>
                <div onClick={myout} className='w-full flex justify-start items-center py-[10px] cursor-pointer rounded-md hover:bg-gray-100 text-[#4d5656]'>
                    <LogoutOutlinedIcon className='ml-[10px]' />
                    <p className='ml-[12px]'>Logout</p>
                </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <div className='w-full flex justify-start items-center py-[10px] cursor-pointer rounded-md hover:bg-gray-100 text-[#4d5656]'>
                    <HelpCenterIcon className='ml-[10px]' />
                    <p className='ml-[12px]'>Support</p>
                </div>
                <div className='w-full flex justify-start items-center py-[10px] cursor-pointer rounded-md hover:bg-gray-100 text-[#4d5656]'>
                    <PersonIcon className='ml-[10px]' />
                    <p className='ml-[12px]'>Account Setting</p>
                </div>
                <div className='w-full flex justify-start items-center py-[10px] cursor-pointer rounded-md hover:bg-gray-100 text-[#4d5656]'>
                    <LockIcon className='ml-[10px]' />
                    <p className='ml-[12px]'>Privacy Center</p>
                </div>
                <div className='w-full flex justify-start items-center py-[10px] cursor-pointer rounded-md hover:bg-gray-100 text-[#4d5656]'>
                    <RateReviewIcon className='ml-[10px]' />
                    <p className='ml-[12px]'>Feedback</p>
                </div>
                <div className='w-full flex justify-start items-center py-[10px] cursor-pointer rounded-md hover:bg-gray-100 text-[#4d5656]'>
                    <WorkHistoryIcon className='ml-[10px]' />
                    <p className='ml-[12px]'>History</p>
                </div>
            </CustomTabPanel>
        </Box>
    );
}
