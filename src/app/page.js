import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import ConfirmPopUp from "@/components/common/confirm/confirmPopUp";

export default function Home() {
  return (
    <main className="relative aspect-[1280/720] w-full flex justify-center">
      <div className="hidden md:inline absolute md:aspect-[1440/465] w-[100%] bottom-0 z-0">
        <Image srcset={"/ornaments/wavy-low-deks.svg"} alt={"wave"} fill />
      </div>
      <div className="inline md:hidden absolute aspect-[430/550] w-full bottom-0 z-0">
        <Image srcset={"/ornaments/wave-mobile.svg"} alt={"wave"} fill />
      </div>
      <div className="aspect-[430/932] h-screen w-full md:w-[45%] flex flex-col items-center relative mt-[40%] md:mt-[12%] ">
        <div className="bg-[#2F3A47] rounded-[4%/12%] flex justify-center max-w-fit z-10 px-[4%] py-[1%]">
          <p className="text-[11.1vw] md:text-[3.7vw] font-bold">
            <span className="text-[#CEFD4A]">Help</span>
            <span className="text-white">Out</span>
          </p>
        </div>

        <div className="aspect-[150/75] md:aspect-[150/60] w-[50%] flex flex-col justify-between mt-[16%] text-[4.5vw] md:text-[1.5vw]">
          <Link
            className="bg-[#CEFD4A] aspect-[150/30] md:aspect-[150/25] rounded-[3%/12%] w-full z-[10] flex justify-center items-center outline-0 text-center"
            href={"/personal/"}
          >
            For Personal
          </Link>
          <Link
            className="bg-[#CEFD4A] aspect-[150/30] md:aspect-[150/25] rounded-[3%/12%] w-full z-[10] flex justify-center items-center outline-0 text-center"
            href={"/community/"}
          >
            For Community
          </Link>
        </div>
      </div>
    </main>
  );
}
