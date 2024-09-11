"use client"
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import CallMadeIcon from '@mui/icons-material/CallMade';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import AirplayIcon from '@mui/icons-material/Airplay';
import BarTab from '../Tabbar1/Bartab1';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import EditNoteIcon from '@mui/icons-material/EditNote';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import BarTab2 from '../Tabbar2/Bartab2';
import BarTab3 from '../Tabbar3/Bartab3';
import BarTab4 from '../Tabbar4/Bartab4';
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

export default function TabChartBar() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'start', marginTop: '15px', alignItems: 'center' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Overview" sx={{ textTransform: 'capitalize', marginBottom: '8px', marginLeft: '30px', color: '#262d36', fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontFamily: 'loginform' }} {...a11yProps(0)} />
                    <Tab label="Marketing" sx={{ textTransform: 'capitalize', marginBottom: '8px', color: '#262d36', fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontFamily: 'loginform' }} {...a11yProps(1)} />
                    <Tab label="Project" sx={{ textTransform: 'capitalize', marginBottom: '8px', color: '#262d36', fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontFamily: 'loginform' }} {...a11yProps(2)} />
                    <Tab label="Order" sx={{ textTransform: 'capitalize', marginBottom: '8px', color: '#262d36', fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontFamily: 'loginform' }} {...a11yProps(3)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <div className='w-full flex flex-wrap justify-between items-center'>
                    <div className='lg:w-[60%] w-full *:my-[15px] flex justify-center items-center flex-wrap '>
                        <div className='w-full *:mx-[5px] flex justify-end items-center flex-wrap'>
                            <select className='w-[20%] *:border-none *:outline-none py-[10px] focus:border-[2px] border-[1px] border-[#262d36] focus:border-sky-600  *:cursor-pointer outline-none font-loginform3 *:font-loginform3 cursor-pointer text-[#414952] rounded-lg' name="months" id="">
                                <option value="monthly">monthly</option>
                                <option value="today">today</option>
                                <option value="weekly">weekly</option>
                            </select>
                            <span className='flex justify-center items-center px-[6px] py-[5px] rounded-lg hover:text-gray-800 cursor-pointer text-[#595959] border-[1px] border-[#262d36]'><EditNoteIcon /></span>
                            <span className='flex justify-center items-center px-[6px] py-[5px] hover:text-gray-800 cursor-pointer rounded-lg text-[#595959] border-[1px] border-[#262d36]'><OpenInFullIcon /></span>
                            <span className='flex justify-center cursor-pointer hover:text-gray-800 items-center px-[6px] py-[5px] rounded-lg text-[#595959] border-[1px] border-[#262d36]'><MoreVertIcon className='rotate-[90deg]' /></span>
                        </div>
                        <div className='w-full flex flex-wrap justify-center items-center'>
                            <BarTab />
                        </div>
                    </div>
                    <div className='lg:w-[37%] w-full *:my-[5px] flex flex-wrap justify-center items-center'>
                        <div className='w-full py-[12px] flex justify-between items-center border-b flex-wrap'>
                            <div className='flex w-[60%] flex-wrap justify-evenly items-center'>
                                <span className='font-text1 text-[#5b6b79] flex justify-center items-center'>
                                    <StackedBarChartIcon />
                                </span>
                                <div className='flex flex-wrap justify-start items-center'>
                                    <h3 className='w-full text-[#686f76] font-text1 text-[18px]'>Total Sales</h3>
                                    <p className='font-loginform3 capitalize leading-[35px] text-[#262d36] text-sm'>1,800</p>
                                </div>
                            </div>
                            <span className='flex flex-wrap justify-end items-center'>
                                <p className='w-full text-[#262d36] font-loginform flex justify-end items-center'>-245</p>
                                <p className='text-[18px] flex justify-center items-center font-text1 text-[#be3345]'><CallMadeIcon style={{fontSize:'15px'}} className='text-sm rotate-[180deg] mr-[5px]' /> 10.6%</p>
                            </span>
                        </div>
                        {/* /////////////////// */}
                        <div className='w-full py-[12px] flex justify-between items-center border-b flex-wrap'>
                            <div className='flex w-[60%] flex-wrap justify-evenly items-center'>
                                <span className='font-text1 text-[#5b6b79] flex justify-center items-center'>
                                    <AirplayIcon />
                                </span>
                                <div className='flex flex-wrap justify-start items-center'>
                                    <h3 className='w-full text-[#686f76] font-text1 text-[18px]'>Revenue</h3>
                                    <p className='font-loginform3 capitalize leading-[35px] text-[#262d36] text-sm'>$5,667</p>
                                </div>
                            </div>
                            <span className='flex w-[30%] flex-wrap justify-end items-center'>
                                <p className='w-full text-[#262d36] font-loginform flex justify-end items-center'>+2,100</p>
                                <p className='text-[18px] flex justify-center items-center font-text1 text-[#08b059]'><CallMadeIcon style={{fontSize:'15px'}} className='text-sm rotate-[180deg] mr-[5px]' /> 30.6%</p>
                            </span>
                        </div>
                        {/* ////////////////////////////////// */}
                        <div className='w-full py-[12px] flex justify-between items-center border-b flex-wrap'>
                            <div className='flex w-[60%] flex-wrap justify-evenly items-center'>
                                <span className='font-text1 text-[#5b6b79] flex justify-center items-center'>
                                    <ShoppingCartCheckoutIcon />
                                </span>
                                <div className='flex flex-wrap justify-start items-center'>
                                    <h3 className='w-full text-[#686f76] font-text1 text-[18px]'>Abandon Cart</h3>
                                    <p className='font-loginform3 capitalize leading-[35px] text-[#262d36] text-sm'>128</p>
                                </div>
                            </div>
                            <span className='flex flex-wrap justify-end items-center'>
                                <p className='w-full text-[#262d36] font-loginform flex justify-end items-center'>-26</p>
                                <p className='text-[18px] flex justify-center items-center font-text1 text-[#e17b0e]'><PublishedWithChangesIcon className='text-sm mr-[5px]' /> 5%</p>
                            </span>
                        </div>
                        {/* //////////////////////////////// */}
                        <div className='w-full py-[12px] flex justify-between items-center border-b flex-wrap'>
                            <div className='flex w-[60%] flex-wrap justify-evenly items-center'>
                                <span className='font-text1 text-[#5b6b79] flex justify-center ml-[3px] items-center'>
                                    <CardMembershipIcon />
                                </span>
                                <div className='flex flex-wrap justify-start items-center'>
                                    <h3 className='w-full text-[#686f76] font-text1 text-[18px]'>Ads Spent</h3>
                                    <p className='font-loginform3 capitalize leading-[35px] text-[#262d36] text-sm'>$2,500</p>
                                </div>
                            </div>
                            <span className='flex w-[30%] flex-wrap justify-end items-center'>
                                <p className='w-full text-[#262d36] font-loginform flex justify-end items-center'>+2,100</p>
                                <p className='text-[18px] flex justify-center items-center font-text1 text-[#08b059]'><CallMadeIcon style={{fontSize:'15px'}} className='text-sm rotate-[180deg] mr-[5px]' /> 10.6%</p>
                            </span>
                        </div>
                        {/*////////////////////////////// */}
                    </div>
                </div>

            </CustomTabPanel>
            {/* /////////////////////////////////////////////////////// */}
            <CustomTabPanel value={value} index={1}>
                <div className='w-full flex flex-wrap justify-between items-center'>
                    <div className='lg:w-[60%] w-full *:my-[15px] flex justify-center items-center flex-wrap '>
                        <div className='w-full *:mx-[5px] flex justify-end items-center flex-wrap'>
                            <select className='w-[20%] *:border-none *:outline-none py-[10px] focus:border-[2px] border-[1px] border-[#262d36] focus:border-sky-600  *:cursor-pointer outline-none font-loginform3 *:font-loginform3 cursor-pointer text-[#414952] rounded-lg' name="months" id="">
                                <option value="monthly">monthly</option>
                                <option value="today">today</option>
                                <option value="weekly">weekly</option>
                            </select>
                            <span className='flex justify-center items-center px-[6px] py-[5px] rounded-lg hover:text-gray-800 cursor-pointer text-[#595959] border-[1px] border-[#262d36]'><EditNoteIcon /></span>
                            <span className='flex justify-center items-center px-[6px] py-[5px] hover:text-gray-800 cursor-pointer rounded-lg text-[#595959] border-[1px] border-[#262d36]'><OpenInFullIcon /></span>
                            <span className='flex justify-center cursor-pointer hover:text-gray-800 items-center px-[6px] py-[5px] rounded-lg text-[#595959] border-[1px] border-[#262d36]'><MoreVertIcon className='rotate-[90deg]' /></span>
                        </div>
                        <div className='w-full flex flex-wrap justify-center items-center'>
                            <BarTab2 />
                        </div>
                    </div>
                    <div className='lg:w-[37%] w-full *:my-[5px] flex flex-wrap justify-center items-center'>
                        <div className='w-full py-[12px] flex justify-between items-center border-b flex-wrap'>
                            <div className='flex w-[60%] flex-wrap justify-evenly items-center'>
                                <span className='font-text1 text-[#5b6b79] flex justify-center items-center'>
                                    <StackedBarChartIcon />
                                </span>
                                <div className='flex flex-wrap justify-start items-center'>
                                    <h3 className='w-full text-[#686f76] font-text1 text-[18px]'>Total Sales</h3>
                                    <p className='font-loginform3 capitalize leading-[35px] text-[#262d36] text-sm'>1,800</p>
                                </div>
                            </div>
                            <span className='flex flex-wrap justify-end items-center'>
                                <p className='w-full text-[#262d36] font-loginform flex justify-end items-center'>-245</p>
                                <p className='text-[18px] flex justify-center items-center font-text1 text-[#be3345]'><CallMadeIcon style={{fontSize:'15px'}} className='text-sm rotate-[180deg] mr-[5px]' /> 10.6%</p>
                            </span>
                        </div>
                        {/* /////////////////// */}
                        <div className='w-full py-[12px] flex justify-between items-center border-b flex-wrap'>
                            <div className='flex w-[60%] flex-wrap justify-evenly items-center'>
                                <span className='font-text1 text-[#5b6b79] flex justify-center items-center'>
                                    <AirplayIcon />
                                </span>
                                <div className='flex flex-wrap justify-start items-center'>
                                    <h3 className='w-full text-[#686f76] font-text1 text-[18px]'>Revenue</h3>
                                    <p className='font-loginform3 capitalize leading-[35px] text-[#262d36] text-sm'>$5,667</p>
                                </div>
                            </div>
                            <span className='flex w-[30%] flex-wrap justify-end items-center'>
                                <p className='w-full text-[#262d36] font-loginform flex justify-end items-center'>+2,100</p>
                                <p className='text-[18px] flex justify-center items-center font-text1 text-[#08b059]'><CallMadeIcon style={{fontSize:'15px'}} className='text-sm rotate-[180deg] mr-[5px]' /> 30.6%</p>
                            </span>
                        </div>
                        {/* ////////////////////////////////// */}
                        <div className='w-full py-[12px] flex justify-between items-center border-b flex-wrap'>
                            <div className='flex w-[60%] flex-wrap justify-evenly items-center'>
                                <span className='font-text1 text-[#5b6b79] flex justify-center items-center'>
                                    <ShoppingCartCheckoutIcon />
                                </span>
                                <div className='flex flex-wrap justify-start items-center'>
                                    <h3 className='w-full text-[#686f76] font-text1 text-[18px]'>Abandon Cart</h3>
                                    <p className='font-loginform3 capitalize leading-[35px] text-[#262d36] text-sm'>128</p>
                                </div>
                            </div>
                            <span className='flex flex-wrap justify-end items-center'>
                                <p className='w-full text-[#262d36] font-loginform flex justify-end items-center'>-26</p>
                                <p className='text-[18px] flex justify-center items-center font-text1 text-[#e17b0e]'><PublishedWithChangesIcon className='text-sm mr-[5px]' /> 5%</p>
                            </span>
                        </div>
                        {/* //////////////////////////////// */}
                        <div className='w-full py-[12px] flex justify-between items-center border-b flex-wrap'>
                            <div className='flex w-[60%] flex-wrap justify-evenly items-center'>
                                <span className='font-text1 text-[#5b6b79] flex justify-center ml-[3px] items-center'>
                                    <CardMembershipIcon />
                                </span>
                                <div className='flex flex-wrap justify-start items-center'>
                                    <h3 className='w-full text-[#686f76] font-text1 text-[18px]'>Ads Spent</h3>
                                    <p className='font-loginform3 capitalize leading-[35px] text-[#262d36] text-sm'>$2,500</p>
                                </div>
                            </div>
                            <span className='flex w-[30%] flex-wrap justify-end items-center'>
                                <p className='w-full text-[#262d36] font-loginform flex justify-end items-center'>+2,100</p>
                                <p className='text-[18px] flex justify-center items-center font-text1 text-[#08b059]'><CallMadeIcon style={{fontSize:'15px'}} className='text-sm rotate-[180deg] mr-[5px]' /> 10.6%</p>
                            </span>
                        </div>
                        {/*////////////////////////////// */}
                    </div>
                </div>

            </CustomTabPanel>
            {/* ////////////////////////////////////// */}
            <CustomTabPanel value={value} index={2}>
                <div className='w-full flex flex-wrap justify-between items-center'>
                    <div className='lg:w-[60%] w-full *:my-[15px] flex justify-center items-center flex-wrap '>
                        <div className='w-full *:mx-[5px] flex justify-end items-center flex-wrap'>
                            <select className='w-[20%] *:border-none *:outline-none py-[10px] focus:border-[2px] border-[1px] border-[#262d36] focus:border-sky-600  *:cursor-pointer outline-none font-loginform3 *:font-loginform3 cursor-pointer text-[#414952] rounded-lg' name="months" id="">
                                <option value="monthly">monthly</option>
                                <option value="today">today</option>
                                <option value="weekly">weekly</option>
                            </select>
                            <span className='flex justify-center items-center px-[6px] py-[5px] rounded-lg hover:text-gray-800 cursor-pointer text-[#595959] border-[1px] border-[#262d36]'><EditNoteIcon /></span>
                            <span className='flex justify-center items-center px-[6px] py-[5px] hover:text-gray-800 cursor-pointer rounded-lg text-[#595959] border-[1px] border-[#262d36]'><OpenInFullIcon /></span>
                            <span className='flex justify-center cursor-pointer hover:text-gray-800 items-center px-[6px] py-[5px] rounded-lg text-[#595959] border-[1px] border-[#262d36]'><MoreVertIcon className='rotate-[90deg]' /></span>
                        </div>
                        <div className='w-full flex flex-wrap justify-center items-center'>
                            <BarTab3 />
                        </div>
                    </div>
                    <div className='lg:w-[37%] w-full *:my-[5px] flex flex-wrap justify-center items-center'>
                        <div className='w-full py-[12px] flex justify-between items-center border-b flex-wrap'>
                            <div className='flex w-[60%] flex-wrap justify-evenly items-center'>
                                <span className='font-text1 text-[#5b6b79] flex justify-center items-center'>
                                    <StackedBarChartIcon />
                                </span>
                                <div className='flex flex-wrap justify-start items-center'>
                                    <h3 className='w-full text-[#686f76] font-text1 text-[18px]'>Total Sales</h3>
                                    <p className='font-loginform3 capitalize leading-[35px] text-[#262d36] text-sm'>1,800</p>
                                </div>
                            </div>
                            <span className='flex flex-wrap justify-end items-center'>
                                <p className='w-full text-[#262d36] font-loginform flex justify-end items-center'>-245</p>
                                <p className='text-[18px] flex justify-center items-center font-text1 text-[#be3345]'><CallMadeIcon style={{fontSize:'15px'}} className='text-sm rotate-[180deg] mr-[5px]' /> 10.6%</p>
                            </span>
                        </div>
                        {/* /////////////////// */}
                        <div className='w-full py-[12px] flex justify-between items-center border-b flex-wrap'>
                            <div className='flex w-[60%] flex-wrap justify-evenly items-center'>
                                <span className='font-text1 text-[#5b6b79] flex justify-center items-center'>
                                    <AirplayIcon />
                                </span>
                                <div className='flex flex-wrap justify-start items-center'>
                                    <h3 className='w-full text-[#686f76] font-text1 text-[18px]'>Revenue</h3>
                                    <p className='font-loginform3 capitalize leading-[35px] text-[#262d36] text-sm'>$5,667</p>
                                </div>
                            </div>
                            <span className='flex w-[30%] flex-wrap justify-end items-center'>
                                <p className='w-full text-[#262d36] font-loginform flex justify-end items-center'>+2,100</p>
                                <p className='text-[18px] flex justify-center items-center font-text1 text-[#08b059]'><CallMadeIcon style={{fontSize:'15px'}} className='text-sm rotate-[180deg] mr-[5px]' /> 30.6%</p>
                            </span>
                        </div>
                        {/* ////////////////////////////////// */}
                        <div className='w-full py-[12px] flex justify-between items-center border-b flex-wrap'>
                            <div className='flex w-[60%] flex-wrap justify-evenly items-center'>
                                <span className='font-text1 text-[#5b6b79] flex justify-center items-center'>
                                    <ShoppingCartCheckoutIcon />
                                </span>
                                <div className='flex flex-wrap justify-start items-center'>
                                    <h3 className='w-full text-[#686f76] font-text1 text-[18px]'>Abandon Cart</h3>
                                    <p className='font-loginform3 capitalize leading-[35px] text-[#262d36] text-sm'>128</p>
                                </div>
                            </div>
                            <span className='flex flex-wrap justify-end items-center'>
                                <p className='w-full text-[#262d36] font-loginform flex justify-end items-center'>-26</p>
                                <p className='text-[18px] flex justify-center items-center font-text1 text-[#e17b0e]'><PublishedWithChangesIcon className='text-sm mr-[5px]' /> 5%</p>
                            </span>
                        </div>
                        {/* //////////////////////////////// */}
                        <div className='w-full py-[12px] flex justify-between items-center border-b flex-wrap'>
                            <div className='flex w-[60%] flex-wrap justify-evenly items-center'>
                                <span className='font-text1 text-[#5b6b79] flex justify-center ml-[3px] items-center'>
                                    <CardMembershipIcon />
                                </span>
                                <div className='flex flex-wrap justify-start items-center'>
                                    <h3 className='w-full text-[#686f76] font-text1 text-[18px]'>Ads Spent</h3>
                                    <p className='font-loginform3 capitalize leading-[35px] text-[#262d36] text-sm'>$2,500</p>
                                </div>
                            </div>
                            <span className='flex w-[30%] flex-wrap justify-end items-center'>
                                <p className='w-full text-[#262d36] font-loginform flex justify-end items-center'>+2,100</p>
                                <p className='text-[18px] flex justify-center items-center font-text1 text-[#08b059]'><CallMadeIcon style={{fontSize:'15px'}} className='text-sm rotate-[180deg] mr-[5px]' /> 10.6%</p>
                            </span>
                        </div>
                        {/*////////////////////////////// */}
                    </div>
                </div>
            </CustomTabPanel>
            {/* //////////////////////////////////// */}
            <CustomTabPanel value={value} index={3}>
                <div className='w-full flex flex-wrap justify-between items-center'>
                    <div className='lg:w-[60%] w-full *:my-[15px] flex justify-center items-center flex-wrap '>
                        <div className='w-full *:mx-[5px] flex justify-end items-center flex-wrap'>
                            <select className='w-[20%] *:border-none *:outline-none py-[10px] focus:border-[2px] border-[1px] border-[#262d36] focus:border-sky-600  *:cursor-pointer outline-none font-loginform3 *:font-loginform3 cursor-pointer text-[#414952] rounded-lg' name="months" id="">
                                <option value="monthly">monthly</option>
                                <option value="today">today</option>
                                <option value="weekly">weekly</option>
                            </select>
                            <span className='flex justify-center items-center px-[6px] py-[5px] rounded-lg hover:text-gray-800 cursor-pointer text-[#595959] border-[1px] border-[#262d36]'><EditNoteIcon /></span>
                            <span className='flex justify-center items-center px-[6px] py-[5px] hover:text-gray-800 cursor-pointer rounded-lg text-[#595959] border-[1px] border-[#262d36]'><OpenInFullIcon /></span>
                            <span className='flex justify-center cursor-pointer hover:text-gray-800 items-center px-[6px] py-[5px] rounded-lg text-[#595959] border-[1px] border-[#262d36]'><MoreVertIcon className='rotate-[90deg]' /></span>
                        </div>
                        <div className='w-full flex flex-wrap justify-center items-center'>
                            <BarTab4 />
                        </div>
                    </div>
                    <div className='lg:w-[37%] w-full *:my-[5px] flex flex-wrap justify-center items-center'>
                        <div className='w-full py-[12px] flex justify-between items-center border-b flex-wrap'>
                            <div className='flex w-[60%] flex-wrap justify-evenly items-center'>
                                <span className='font-text1 text-[#5b6b79] flex justify-center items-center'>
                                    <StackedBarChartIcon />
                                </span>
                                <div className='flex flex-wrap justify-start items-center'>
                                    <h3 className='w-full text-[#686f76] font-text1 text-[18px]'>Total Sales</h3>
                                    <p className='font-loginform3 capitalize leading-[35px] text-[#262d36] text-sm'>1,800</p>
                                </div>
                            </div>
                            <span className='flex flex-wrap justify-end items-center'>
                                <p className='w-full text-[#262d36] font-loginform flex justify-end items-center'>-245</p>
                                <p className='text-[18px] flex justify-center items-center font-text1 text-[#be3345]'><CallMadeIcon style={{fontSize:'15px'}} className='text-sm rotate-[180deg] mr-[5px]' /> 10.6%</p>
                            </span>
                        </div>
                        {/* /////////////////// */}
                        <div className='w-full py-[12px] flex justify-between items-center border-b flex-wrap'>
                            <div className='flex w-[60%] flex-wrap justify-evenly items-center'>
                                <span className='font-text1 text-[#5b6b79] flex justify-center items-center'>
                                    <AirplayIcon />
                                </span>
                                <div className='flex flex-wrap justify-start items-center'>
                                    <h3 className='w-full text-[#686f76] font-text1 text-[18px]'>Revenue</h3>
                                    <p className='font-loginform3 capitalize leading-[35px] text-[#262d36] text-sm'>$5,667</p>
                                </div>
                            </div>
                            <span className='flex flex-wrap justify-end items-center'>
                                <p className='w-full text-[#262d36] font-loginform flex justify-end items-center'>+2,100</p>
                                <p className='text-[18px] flex justify-center items-center font-text1 text-[#08b059]'><CallMadeIcon style={{fontSize:'15px'}} className='text-sm rotate-[180deg] mr-[5px]' /> 30.6%</p>
                            </span>
                        </div>
                        {/* ////////////////////////////////// */}
                        <div className='w-full py-[12px] flex justify-between items-center border-b flex-wrap'>
                            <div className='flex w-[60%] flex-wrap justify-evenly items-center'>
                                <span className='font-text1 text-[#5b6b79] flex justify-center items-center'>
                                    <ShoppingCartCheckoutIcon />
                                </span>
                                <div className='flex flex-wrap justify-start items-center'>
                                    <h3 className='w-full text-[#686f76] font-text1 text-[18px]'>Abandon Cart</h3>
                                    <p className='font-loginform3 capitalize leading-[35px] text-[#262d36] text-sm'>128</p>
                                </div>
                            </div>
                            <span className='flex flex-wrap justify-end items-center'>
                                <p className='w-full text-[#262d36] font-loginform flex justify-end items-center'>-26</p>
                                <p className='text-[18px] flex justify-center items-center font-text1 text-[#e17b0e]'><PublishedWithChangesIcon className='text-sm mr-[5px]' /> 5%</p>
                            </span>
                        </div>
                        {/* //////////////////////////////// */}
                        <div className='w-full py-[12px] flex justify-between items-center border-b flex-wrap'>
                            <div className='flex w-[60%] flex-wrap justify-evenly items-center'>
                                <span className='font-text1 text-[#5b6b79] flex justify-center ml-[3px] items-center'>
                                    <CardMembershipIcon />
                                </span>
                                <div className='flex flex-wrap justify-start items-center'>
                                    <h3 className='w-full text-[#686f76] font-text1 text-[18px]'>Ads Spent</h3>
                                    <p className='font-loginform3 capitalize leading-[35px] text-[#262d36] text-sm'>$2,500</p>
                                </div>
                            </div>
                            <span className='flex w-[30%] flex-wrap justify-end items-center'>
                                <p className='w-full text-[#262d36] font-loginform flex justify-end items-center'>+2,100</p>
                                <p className='text-[18px] flex justify-center items-center font-text1 text-[#08b059]'><CallMadeIcon style={{fontSize:'15px'}} className='text-sm rotate-[180deg] mr-[5px]' /> 10.6%</p>
                            </span>
                        </div>
                        {/*////////////////////////////// */}
                    </div>
                </div>
            </CustomTabPanel>
        </Box>
    );
}
