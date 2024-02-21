"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

function Navbar({ community = false, buttonLink = "" }) {
  const pathname = usePathname();
  const target = pathname.split("/");

  const [indexNav, SetIndex] = useState(0);
  useEffect(() => {
    if (target[2] == "home") {
      SetIndex(0);
    } else if (target[2] == "community") {
      SetIndex(1);
    } else if (target[2] == "notification") {
      SetIndex(2);
    } else if (target[2] == "profile") {
      SetIndex(3);
    } else {
    }
  }, [pathname]);
  const returnClickedIcon = (index, stringNotClicked, stringClicked) => {
    if (index == indexNav) {
      return stringClicked;
    } else {
      return stringNotClicked;
    }
  };

  const homeCommunity = () => {
    if (community) {
      return "http://localhost:3000/community/home";
    } else {
      return "http://localhost:3000/personal/home";
    }
  };

  const communityComunnity = () => {
    if (community) {
      return "http://localhost:3000/community/community";
    } else {
      return "http://localhost:3000/personal/community";
    }
  };

  const profileCommunity = () => {
    if (community) {
      return "http://localhost:3000/community/profile";
    } else {
      return "http://localhost:3000/personal/profile";
    }
  };

  const notificationCommunity = () => {
    if (community) {
      return "http://localhost:3000/community/notification";
    } else {
      return "http://localhost:3000/personal/notification";
    }
  };

  return (
    <nav className="fixed aspect-[200/54] md:aspect-[200/48] w-[90%] md:w-[33%] items-center bottom-[5%] left-0 right-0 mx-auto z-50">
      {buttonLink !== "" && (
        <div className="relative top-0 left-0 right-0 mx-auto aspect-[190/23] w-[93%]">
          <Link
            href={buttonLink}
            className="absolute right-0 aspect-[1/1] w-[11%] rounded-[50%] bg-greenYellow flex justify-center items-center z-50"
          >
            <div className="relative aspect-[1/1] w-[94%]">
              <Image src={"/icon/add.svg"} alt={""} fill />
            </div>
          </Link>
        </div>
      )}

      <div className="absolute bottom-0 aspect-[200/25] w-[97%] left-0 right-0 mx-auto">
        <div className="rounded-2xl bg-greenYellow w-full h-full flex justify-between items-center px-[0.5%] py-[0.5%]">
          <div className="relative rounded-2xl bg-[#2F3A47] w-full h-full flex justify-between items-center px-[10%] py-[0.5%] md:py-[2%]">
            <Link
              href={
                community
                  ? "http://localhost:3000/community/home"
                  : "http://localhost:3000/personal/home"
              }
              className="relative text-white font-product aspect-[1/1] w-[9%]"
              onClick={(e) => SetIndex(0)}
            >
              <Image
                src={returnClickedIcon(0, "/icon/home.svg", "/icon/c-home.svg")}
                alt="home"
                fill
              />
            </Link>
            <Link
              href={
                community
                  ? "http://localhost:3000/community/community"
                  : "http://localhost:3000/personal/community"
              }
              className="relative text-white font-product aspect-[1/1] w-[9%]"
              onClick={(e) => SetIndex(1)}
            >
              <Image
                src={returnClickedIcon(
                  1,
                  "/icon/person.svg",
                  "/icon/c-person.svg"
                )}
                alt="community"
                fill
              />
            </Link>
            <Link
              href={
                community
                  ? "http://localhost:3000/community/notification"
                  : "http://localhost:3000/personal/notification"
              }
              className="relative text-white font-product aspect-[1/1] w-[9%]"
              onClick={(e) => SetIndex(2)}
            >
              <Image
                src={returnClickedIcon(
                  2,
                  "/icon/notification.svg",
                  "/icon/c-notification.svg"
                )}
                alt="notification"
                fill
              />
            </Link>
            <Link
              href={
                community
                  ? "http://localhost:3000/community/profile"
                  : "http://localhost:3000/personal/profile"
              }
              className="relative text-white font-product aspect-[1/1] w-[9%]"
              onClick={(e) => SetIndex(3)}
            >
              <Image
                src={returnClickedIcon(3, "/icon/menu.svg", "/icon/c-menu.svg")}
                alt="profile"
                fill
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
