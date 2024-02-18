"use client"
import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

function Navbar({community= false}) {
    const pathname = usePathname()
    const target = pathname.split("/")
    
    const [indexNav, SetIndex] = useState(0)
    useEffect(() => {
        if(target[2] == "home") {
            SetIndex(0)
        } else if(target[2] == "community") {
            SetIndex(1)
        } else if(target[2] == "notification") {
            SetIndex(2)
        } else if (target[2] == "profile") {
            SetIndex(3)
        } else {

        }
    }, [pathname])
    const returnClickedIcon = (index, stringNotClicked, stringClicked) => {
        if(index == indexNav) {
            return stringClicked
        } else {
            return stringNotClicked
        }
    }

    const homeCommunity = () => {
        if(community) {
            return "http://localhost:3000/community/home"
        } else {
            return "http://localhost:3000/personal/home"
        }
    }

    const communityComunnity = () => {
        if(community) {
            return "http://localhost:3000/community/community"
        } else {
            return "http://localhost:3000/personal/community"
        }
    }

    const profileCommunity = () => {
        if(community) {
            return "http://localhost:3000/community/profile"
        } else {
            return "http://localhost:3000/personal/profile"
        }
    }

    const notificationCommunity = () => {
        if(community) {
            return "http://localhost:3000/community/notification"
        } else {
            return "http://localhost:3000/personal/notification"
        }
    }

    
    return (
    <nav className='w-full fixed bottom-[30px] px-5 h-[70px] z-50'>
        <div className='rounded-2xl bg-[#2F3A47] w-full h-full flex justify-between items-center px-[40px] py-[20px]'>
            <Link href={community ? "http://localhost:3000/community/home" : "http://localhost:3000/personal/home"} className='text-white font-product' onClick={e => SetIndex(0)}>
                <Image src={returnClickedIcon(0, '/icon/home.svg', '/icon/c-home.svg')}  width={32} height={32} className='w-8 h-8' alt='home'/>
            </Link>
            <Link href={community ? "http://localhost:3000/community/community" : "http://localhost:3000/personal/community"} className='text-white font-product' onClick={e => SetIndex(1)}>
                <Image src={returnClickedIcon(1, '/icon/person.svg', '/icon/c-person.svg')}  width={32} height={32} className='w-8 h-8' alt='community'/>
            </Link>
            <Link href={community ? "http://localhost:3000/community/notification" : "http://localhost:3000/personal/notification"} className='text-white font-product' onClick={e => SetIndex(2)}>
                <Image src={returnClickedIcon(2, '/icon/notification.svg', '/icon/c-notification.svg')}  width={32} height={32} className='w-8 h-8' alt='notification'/>
            </Link>
            <Link href={community ? "http://localhost:3000/community/profile" : "http://localhost:3000/personal/profile"} className='text-white font-product' onClick={e => SetIndex(3)}>
                <Image src={returnClickedIcon(3, '/icon/menu.svg', '/icon/c-menu.svg')} width={32} height={32} alt='profile'/>
            </Link>
        </div>
    </nav>
    )
}

export default Navbar