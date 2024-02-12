"use client"
import React, {useState} from 'react'
import Link from 'next/link'
function Navbar() {
    const [indexNav, SetIndex] = useState(1)
    const returnClickedIcon = (index, stringNotClicked, stringClicked) => {
        if(index == indexNav) {
            return stringClicked
        } else {
            return stringNotClicked
        }
    }
    return (
    <nav className='w-full fixed bottom-[30px] px-5 h-[70px]'>
        <div className='rounded-2xl bg-[#2F3A47] w-full h-full flex justify-between items-center px-[40px] py-[20px]'>
            <Link href={'/'} className='text-white font-product' onClick={e => SetIndex(0)}>
                <img src={returnClickedIcon(0, '/icon/home.svg', '/icon/c-home.svg')} className='w-8 h-8'/>
            </Link>
            <Link href={'/'} className='text-white font-product' onClick={e => SetIndex(1)}>
                <img src={returnClickedIcon(1, '/icon/person.svg', '/icon/c-person.svg')} className='w-8 h-8'/>
            </Link>
            <Link href={'/'} className='text-white font-product' onClick={e => SetIndex(2)}>
                <img src={returnClickedIcon(2, '/icon/notification.svg', '/icon/c-notification.svg')} className='w-8 h-8'/>
            </Link>
            <Link href={'/'} className='text-white font-product' onClick={e => SetIndex(3)}>
                <img src={returnClickedIcon(3, '/icon/menu.svg', '/icon/c-menu.svg')} className='w-8 h-8'/>
            </Link>
        </div>
    </nav>
    )
}

export default Navbar