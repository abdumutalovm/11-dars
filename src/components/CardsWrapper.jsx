import React from 'react'
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';



const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
    width: 62,
    height: 32,
    padding: 0,
    '& .MuiSwitch-switchBase': {
        padding: 1,
        margin: 1,
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(29px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
                opacity: 1,
                border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
            },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff',
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
            color:
                theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[600],
        },
        '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
        },
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 28,
        height: 28,
    },
    '& .MuiSwitch-track': {
        borderRadius: 21 / 1,
        backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#8F939B',
        opacity: 1,
        transition: theme.transitions.create(['background-color'], {
            duration: 500,
        }),
    },
}));

function CardsWrapper() {
    return (
        <div className='flex items-center flex-wrap gap-5'>

            <div className='transition p-4 h-[260px] flex cursor-pointer hover:shadow-2xl bg-white w-[380px] rounded-2xl shadow-md flex-wrap justify-between gap-3'>
                <div className='w-[380px] p-2'>
                    <h1 className='border border-white border-b-zinc-200 border-b-2 mb-2 pb-3 text-2xl font-bold text-[#1F2937] '>Slack</h1>
                    <div className='flex gap-4 '>
                        <img className='w-[50px] h-[50px]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png" alt="slack img" />
                        <p className='leading-[22px] text-[18px] text-[#1F2937]'>Slack is an instant messaging program designed by Slack Technologies and owned by Salesforce.</p>
                    </div>
                </div>
                <div className=' ml-[260px]'>
                    <FormControlLabel
                        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                    />
                </div>
            </div>

            <div className='transition p-4 h-[260px] flex cursor-pointer hover:shadow-2xl bg-white w-[380px] rounded-2xl shadow-md flex-wrap justify-between gap-3'>
                <div className='w-[380px] p-2'>
                    <h1 className='border border-white border-b-zinc-200 border-b-2 mb-2 pb-3 text-2xl font-bold text-[#1F2937] '>Facebook</h1>
                    <div className='flex gap-4 '>
                        <img className='w-[50px] h-[50px]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Facebook_F_icon.svg/1200px-Facebook_F_icon.svg.png" alt="slack img" />
                        <p className='leading-[22px] text-[18px] text-[#1F2937]'>Meta Platforms, Inc., doing business as Meta and formerly named Facebook, Inc., and TheFacebook.</p>
                    </div>
                </div>
                <div className=' ml-[260px]'>
                    <FormControlLabel
                        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                    />
                </div>
            </div>

            <div className='transition p-4 h-[260px] flex cursor-pointer hover:shadow-2xl bg-white w-[380px] rounded-2xl shadow-md flex-wrap justify-between gap-3'>
                <div className='w-[380px] p-2'>
                    <h1 className='border border-white border-b-zinc-200 border-b-2 mb-2 pb-3 text-2xl font-bold text-[#1F2937] '>LinkedIn</h1>
                    <div className='flex gap-4 '>
                        <img className='w-[50px] h-[50px]' src="https://store-images.s-microsoft.com/image/apps.31120.9007199266245564.44dc7699-748d-4c34-ba5e-d04eb48f7960.bc4172bd-63f0-455a-9acd-5457f44e4473" alt="slack img" />
                        <p className='leading-[22px] text-[18px] text-[#1F2937]'>Linkedin is a business and employment-focused social media platform that works through websites and mobile apps.</p>
                    </div>
                </div>
                <div className=' ml-[260px]'>
                    <FormControlLabel
                        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                    />
                </div>
            </div>

            <div className='transition p-4 h-[260px] flex cursor-pointer hover:shadow-2xl bg-white w-[380px] rounded-2xl shadow-md flex-wrap justify-between gap-3'>
                <div className='w-[380px] p-2'>
                    <h1 className='border border-white border-b-zinc-200 border-b-2 mb-2 pb-3 text-2xl font-bold text-[#1F2937] '>Google Ads</h1>
                    <div className='flex gap-4 '>
                        <img className='w-[50px] h-[50px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqmjH-2pw3AoOWoJ0A-iuOc0H8NpdiQ3kJyg&s" alt="slack img" />
                        <p className='leading-[22px] text-[18px] text-[#1F2937]'>Google Ads is an online advertising platform developed by Google, where advertisers bid to display brief advertisements, service.</p>
                    </div>
                </div>
                <div className=' ml-[260px]'>
                    <FormControlLabel
                        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                    />
                </div>
            </div>

            <div className='transition p-4 h-[260px] flex cursor-pointer hover:shadow-2xl bg-white w-[380px] rounded-2xl shadow-md flex-wrap justify-between gap-3'>
                <div className='w-[380px] p-2'>
                    <h1 className='border border-white border-b-zinc-200 border-b-2 mb-2 pb-3 text-2xl font-bold text-[#1F2937] '>Gmail</h1>
                    <div className='flex gap-4 '>
                        <img className='w-[50px] h-[50px]' src="https://static.vecteezy.com/system/resources/previews/020/964/377/non_2x/gmail-mail-icon-for-web-design-free-png.png" alt="slack img" />
                        <p className='leading-[22px] text-[18px] text-[#1F2937]'>Gmail is a free email service provided by Google. As of 2019, it had 1.5 billion active users worldwide.</p>
                    </div>
                </div>
                <div className=' ml-[260px]'>
                    <FormControlLabel
                        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                    />
                </div>
            </div>

            <div className='transition p-4 h-[260px] flex cursor-pointer hover:shadow-2xl bg-white w-[380px] rounded-2xl shadow-md flex-wrap justify-between gap-3'>
                <div className='w-[380px] p-2'>
                    <h1 className='border border-white border-b-zinc-200 border-b-2 mb-2 pb-3 text-2xl font-bold text-[#1F2937] '>Salesforce</h1>
                    <div className='flex gap-4 '>
                        <img className='w-[50px] h-[50px]' src="https://lanefour.com/wp-content/uploads/2023/09/service-cloud-logo.png" alt="slack img" />
                        <p className='leading-[22px] text-[18px] text-[#1F2937]'>It provides customer relationship management software and applications focused on sales, customer service, marketing automation.</p>
                    </div>
                </div>
                <div className=' ml-[260px]'>
                    <FormControlLabel
                        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                    />
                </div>
            </div>

            <div className='transition p-4 h-[260px] flex cursor-pointer hover:shadow-2xl bg-white w-[380px] rounded-2xl shadow-md flex-wrap justify-between gap-3'>
                <div className='w-[380px] p-2'>
                    <h1 className='border border-white border-b-zinc-200 border-b-2 mb-2 pb-3 text-2xl font-bold text-[#1F2937] '>Hubspot</h1>
                    <div className='flex gap-4 '>
                        <img className='w-[50px] h-[50px]' src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/hubspot-icon.png" alt="slack img" />
                        <p className='leading-[22px] text-[18px] text-[#1F2937]'>American developer and marketer of software products for inbound marketing, sales, and customer service.</p>
                    </div>
                </div>
                <div className=' ml-[260px]'>
                    <FormControlLabel
                        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                    />
                </div>
            </div>

        </div>
    )
}

export default CardsWrapper