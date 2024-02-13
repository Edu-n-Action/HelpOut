import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center">
      <div className="aspect-[430/932] h-screen max-md:w-full flex flex-col items-center relative pt-[50px] ">
        <img
          src="/ornaments/waveMobile.jpg"
          className="absolute bottom-0 z-[0]"
        />

        <div className="bg-[#2F3A47] rounded-xl p-3 flex justify-center max-w-fit z-[10] ">
          <p className="text-5xl font-bold">
            <span className="text-[#CEFD4A]">Edu</span>
            <span className="text-white">nity</span>
          </p>
        </div>

        <div className="max-w-[283px] w-full flex flex-col mt-[150px]">
          <Link
            className="bg-[#CEFD4A] py-3 max-w-[283px] w-full z-[10] text-center text-2xl"
            href={"/"}
          >
            For Personal
          </Link>
          <Link
            href={"/"}
            className="bg-[#CEFD4A] py-3 max-w-[283px] w-full z-[10] mt-4 text-center text-2xl"
          >
            For Community
          </Link>
        </div>
      </div>
    </main>
  );
}
