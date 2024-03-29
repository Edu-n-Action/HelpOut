"use client";

import CommunityEvents from "@/components/common/communityProfile/communityEvents";
import CommunityMember from "@/components/common/communityProfile/communityMember";
import PersonalCommunityMember from "@/components/common/communityProfile/personalCommunityMember";
import MenuButton from "@/components/common/eventMenu/menuButton";
import Materials from "@/components/common/eventProfile/materials";
import MemberPresence from "@/components/common/eventProfile/memberPresence";
import Image from "next/image";
import { useState } from "react";

const Menu = () => {
  // nilai dari 1 sampai 3
  const [menu, setMenu] = useState(0);
  return (
    <div className="w-full flex flex-col items-center bg-back">
      <MenuButton
        title={["Event", "Member", "Library"]}
        setValue={setMenu}
        value={menu}
      />
      <div className="aspect-[430/419] w-full flex justify-center">
        {menu === 0 && <CommunityEvents />}
        {menu === 1 && <PersonalCommunityMember />}
        {menu === 2 && <Materials add={false} />}
      </div>
    </div>
  );
};

export default Menu;
