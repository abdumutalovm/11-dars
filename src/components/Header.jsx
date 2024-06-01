import React from 'react'
import LightModeIcon from '@mui/icons-material/LightMode';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
    return (
        <div className='flex items-center  justify-between shadow-[rgba(0,0,15,0.1)_5px_10px_10px_0px] w-[1235px] bg-white px-4 py-2'>
            <h1 className='text-xl font-bold text-[#1F2937]'>Integrations</h1>
            <div className='flex items-center gap-5'>
                <span className='transition p-2 rounded-3xl flex justify-center items-center hover:bg-zinc-200'><LightModeIcon className='cursor-pointer'></LightModeIcon></span>
                <span className='relative cursor-pointer transition hover:opacity-70'>
                    <NotificationsIcon></NotificationsIcon>
                    <span className='text-[10px] font-semibold left-2.5 bottom-3.5 px-2 rounded-xl text-white bg-[#FF00D3] absolute'>15</span>
                </span>
                <AccountCircleIcon className='transition cursor-pointer hover:opacity-70'></AccountCircleIcon>
            </div>
        </div>
    )
}

export default Header