"use client";

import MenuButton from "@/components/common/eventMenu/menuButton";
import MemberPresence from "@/components/common/eventProfile/memberPresence";
import { useState } from "react";

const Menu = () => {
  // nilai dari 1 sampai 3
  const [menu, setMenu] = useState(0);
  return (
    <div className="w-full flex flex-col items-center bg-back">
      <MenuButton
        title={["Member", "Event", "Member"]}
        setValue={setMenu}
        value={menu}
      />
      <MemberPresence />
    </div>
  );
};

export default Menu;
