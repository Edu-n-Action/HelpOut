"use client"
import React from 'react'
import PersonalCommunityHeader from "@/components/common/communityProfile/personalCommunityHeader";
import Menu from "@/app/personal/(protected)/community/Menu";
import { PersonalAuth } from "@/Context/PersonalAuthContext";

import SearchPage from "@/components/searchCommunity/searchPage";
function pageCommunity() {
    const { getDataSendiri, dataUser } = PersonalAuth();
  return (
    <>
        {
            dataUser?.community ?
                <>
                <PersonalCommunityHeader />
                <div className="w-full bg-back">
                    <Menu />
                </div>
                </>
                :
                <SearchPage />
            
            }
    </>
  )
}

export default pageCommunity