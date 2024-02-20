"use client";

import React, { useState } from "react";

import Image from "next/image";
import dateData from "@/const/cdate";
import InputDate from "@/components/common/input/inputDate";
import InputImage from "@/components/common/input/inputImage";

import CreateDonationOne from "@/components/createDonation/createDonationOne";
import CreateDonationTwo from "@/components/createDonation/createDonationTwo";
import DonationisLive from "@/components/createDonation/donationisLive";
export default function FormDonation(submit) {
  const [dataDonasi, SetDataDonasi] = useState({
    header: undefined,
    title: "",
    cerita: "",
    dateStart: new Date(),
    dateEnd: new Date(),
    target: "",
    qrCode: undefined,
    gambar: undefined,
    bank: "",
    pesanTerimaKasih: "",
  });

  const [index, SetIndex] = useState(0);
  const data = [
    { title: "Title", type: "text", placeholder: "Masukkan judul kegiatan" },
  ];
  const tes = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h1 className="aspect-[430/50] w-[90%] text-[7.5vw] md:text-[3vw] text-product text-left">
        {index == 0
          ? "Make a Donation"
          : index == 1
          ? "Add Donation Center"
          : ""}
      </h1>
      <div className="aspect-[379/688] w-[88.13%]">
        <form
          onSubmit={tes}
          className="flex flex-col aspect-[379/788] w-[100%] gap-[3%]"
        >
          {index == 0 ? (
            <CreateDonationOne
              Data={dataDonasi}
              SetData={SetDataDonasi}
              SetIndex={SetIndex}
            />
          ) : (
            <CreateDonationTwo
              Data={dataDonasi}
              SetData={SetDataDonasi}
              SetIndex={SetIndex}
            />
          )}
        </form>
      </div>
    </>
  );
}
