"use client";

import CommunityHeader from "@/components/common/communityProfile/communityHeader";
import PersonalHeader from "@/components/common/communityProfile/personalHeader";
import Link from "next/link";
import Community from "../community/page";

import { useRouter } from "next/navigation";
import { GlobalAuth } from "@/Context/GlobalContext";
const Content = ({
  data = {
    community: "Komunitas Sekolah Marjinal",
  },
}) => {
  const router = useRouter()
  const {emailLogOut} = GlobalAuth();
  const logout = () => {
    emailLogOut()
    router.push("/")
  };
  return (
    <div className="aspect-[430/932] w-full md:w-[33%] overflow-y-scroll bg-back flex flex-col items-center">
      <PersonalHeader />
      <button
        onClick={logout}
        className="text-[3vw] md:text-[1vw] aspect-[114/32] w-[29.4%] bg-greenYellow rounded-[3%/12%]"
      >
        Ganti Akun
      </button>
      {!data.community && (
        <div className="w-[90%] mt-[10%] flex flex-col">
          <div className="text-[3.6vw] md:text-[1.2vw] font-semibold h-fit">
            Komunitas
          </div>
          <div className="aspect-[371/59] w-full mt-[4.2%] flex px-[10%] justify-center items-center rounded-[2%/12%]">
            <div className="text-[3vw] md:text-[1vw] text-center font-semibold">
              &quot;Kamu belum terdaftar di komunitas manapun. Ayo daftar!&quot;
            </div>
          </div>
        </div>
      )}
      {data.community && (
        <div className="w-[90%] mt-[10%] flex flex-col">
          <div className="text-[3.6vw] md:text-[1.2vw] font-semibold h-fit">
            Komunitas
          </div>
          <Link
            href={"./profile/edit/"}
            className="aspect-[371/59] w-full bg-greydef mt-[4.2%] flex justify-center items-center rounded-[2%/12%] shadow-lg"
          >
            <div className="aspect-[371/56] w-[99.5%] flex items-center pl-[5%] gap-[5%] bg-back rounded-[2%/12%]">
              <div className="aspect-[1/1] w-[5%] bg-greenYellow rounded-[50%]"></div>
              <div className="text-[3.3vw] md:text-[1.2vw] font-normal">
                {data.community}
              </div>
            </div>
          </Link>
        </div>
      )}
      <div className="w-[90%] mt-[10%] flex flex-col">
        <div className="text-[3.6vw] md:text-[1.2vw] font-semibold h-fit">
          Lainnya
        </div>
        <Link
          href={"./profile/edit/"}
          className="aspect-[371/59] w-full bg-greydef mt-[4.2%] flex justify-center items-center rounded-[2%/12%] shadow-lg"
        >
          <div className="aspect-[371/56] w-[99.5%] flex items-center pl-[5%] bg-back rounded-[2%/12%]">
            <div className="text-[3vw] md:text-[1vw] font-semibold">
              Pengaturan
            </div>
          </div>
        </Link>
      </div>
      {/* <SearchPage /> */}
    </div>
  );
};

export default Content;
