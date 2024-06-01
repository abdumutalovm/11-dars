import React, { useState } from 'react';
import logo from '../assets/bg.jpg';
import { RxDashboard } from "react-icons/rx";
import { PiDownloadLight } from "react-icons/pi";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { RxLightningBolt } from "react-icons/rx";
import { IoCalendarOutline } from "react-icons/io5";
import { IoMdCopy } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function LeftSideBar() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedMenu, setSelectedMenu] = useState('');

    const open = Boolean(anchorEl);
    const handleClick = (event, menu) => {
        setAnchorEl(event.currentTarget);
        setSelectedMenu(menu);
    };
    const handleClose = () => {
        setAnchorEl(null);
        setSelectedMenu('');
    };

    const menuItems = [
        { icon: <RxDashboard className='text-xl' />, label: 'Dashboard', key: 'dashboard' },
        { icon: <PiDownloadLight className='text-xl' />, label: 'Leads', key: 'leads' },
        { icon: <HiOutlineCurrencyDollar className='text-xl' />, label: 'Transaction', key: 'transaction' },
        { icon: <TbBrandGoogleAnalytics className='text-xl' />, label: 'Analytics', key: 'analytics' },
        { icon: <RxLightningBolt className='text-xl' />, label: 'Integration', key: 'integration' },
        { icon: <IoCalendarOutline className='text-xl' />, label: 'Calendar', key: 'calendar' },
        { icon: <IoMdCopy className='text-xl' />, label: 'Pages', key: 'pages' },
        { icon: <IoSettingsOutline className='text-xl' />, label: 'Setting', key: 'setting' },
        { icon: <IoDocumentTextOutline className='text-xl' />, label: 'Documentation', key: 'documentation' },
    ];

    const renderMenu = (menu) => {
        if (menu === 'pages' || menu === 'setting' || menu === 'documentation') {
            return (
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    {menu === 'pages' && (
                        <>
                            <MenuItem onClick={handleClose}>Home page</MenuItem>
                            <MenuItem onClick={handleClose}>Details page</MenuItem>
                            <MenuItem onClick={handleClose}>Logout page</MenuItem>
                        </>
                    )}
                    {menu === 'setting' && (
                        <>
                            <MenuItem onClick={handleClose}>Notification of/on</MenuItem>
                            <MenuItem onClick={handleClose}>Limit</MenuItem>
                            <MenuItem onClick={handleClose}>Version 1.2</MenuItem>
                        </>
                    )}
                    {menu === 'documentation' && (
                        <>
                            <MenuItem onClick={handleClose}>About</MenuItem>
                            <MenuItem onClick={handleClose}>Optimization</MenuItem>
                            <MenuItem onClick={handleClose}>Relaese application</MenuItem>
                        </>
                    )}
                </Menu>
            );
        }
        return null;
    };

    return (
        <div className='p-4 w-[300px] font-medium text-[#1F2937] text-[20px]'>
            <a href="#"> <img src={logo} className='w-[135px]' alt="company logo" /></a>
            <div className='menus mt-5 gap-1 flex flex-col'>
                {menuItems.map((item) => (
                    <div
                        key={item.key}
                        onClick={(e) => handleClick(e, item.key)}
                        className={`transition justify-between flex items-center gap-2 hover:bg-zinc-200 py-2 px-2 cursor-pointer rounded-md ${selectedMenu === item.key ? 'border-l-4 border-[#5D15ED]' : ''}`}
                    >
                        <div className='flex items-center gap-2'>
                            {item.icon}
                            <h1>{item.label}</h1>
                        </div>
                        {(item.key === 'pages' || item.key === 'setting' || item.key === 'documentation') && (
                            <ExpandMoreIcon />
                        )}
                    </div>
                ))}
                {renderMenu(selectedMenu)}
            </div>
        </div>
    );
}

export default LeftSideBar;
