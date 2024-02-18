import React from 'react'
import Image from 'next/image'


import InputText from '../common/inputText/inputText'
import CommunityCard from './communityCard'

function searchPage() {
    return (
        <div className='w-full pt-[10px] px-[15px]'>
            <div className="flex flex-row gap-2 mb-[20px]">
                <InputText placeholder="Search" />
                <Image src={"/icon/search-icon.svg"} width={24} height={24} />
            </div>

            <div className="mb-4">
                <h2 className="font-semibold text-2xl mb-2">
                    Community
                </h2>
                <div className="w-full h-[2px] bg-black mb-2" />
            </div>

            <CommunityCard />
        </div>
    )
}

export default searchPage