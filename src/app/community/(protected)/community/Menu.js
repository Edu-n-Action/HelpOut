"use client";

import CommunityEvents from "@/components/common/communityProfile/communityEvents";
import CommunityMember from "@/components/common/communityProfile/communityMember";
import MenuButton from "@/components/common/eventMenu/menuButton";
import Materials from "@/components/common/eventProfile/materials";
import MemberPresence from "@/components/common/eventProfile/memberPresence";
import Image from "next/image";
import { useState } from "react";

const Menu = () => {
  // nilai dari 1 sampai 3
  const [menu, setMenu] = useState(0);
  return (
    <div className="w-full flex flex-col items-center bg-back pb-[30%] md:pb-[20%]">
      <MenuButton
        title={["Event", "Member", "Library"]}
        setValue={setMenu}
        value={menu}
      />
      <div className="aspect-[430/419] w-full flex justify-center">
        {menu === 0 && <CommunityEvents />}
        {menu === 1 && <CommunityMember />}
        {menu === 2 && <Materials add={true} />}
      </div>
    </div>
  );
};

export default Menu;
