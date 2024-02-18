import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import ConfirmPopUp from "@/components/common/confirm/confirmPopUp";

export default function Home() {
  return (
    <main className="relative w-full flex justify-center">
      <div className="hidden md:inline absolute md:aspect-[1440/465] w-[100%] bottom-0 z-0">
        <Image srcset={"/ornaments/wavy-low-deks.svg"} alt={"wave"} fill />
      </div>
      <div className="inline md:hidden absolute aspect-[430/550] w-full bottom-0 z-0">
        <Image srcset={"/ornaments/wave-mobile.svg"} alt={"wave"} fill />
      </div>
      <div className="aspect-[430/932] h-screen max-md:w-full flex flex-col items-center relative pt-[50px] ">
        <div className="bg-[#2F3A47] rounded-xl p-3 flex justify-center max-w-fit z-[10] ">
          <p className="text-5xl font-bold">
            <span className="text-[#CEFD4A]">Help</span>
            <span className="text-white">Out</span>
          </p>
        </div>

        <div className="max-w-[283px] w-full flex flex-col mt-[150px]">
          <Link
            className="bg-[#CEFD4A] py-3 max-w-[283px] w-full z-[10] text-center text-2xl"
            href={"/personal/"}
          >
            For Personal
          </Link>
          <Link
            href={"/community/"}
            className="bg-[#CEFD4A] py-3 max-w-[283px] w-full z-[10] mt-4 text-center text-2xl"
          >
            For Community
          </Link>
        </div>
      </div>
    </main>
  );
}
