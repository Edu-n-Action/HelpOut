"use client";

import Image from "next/image";
import dateData from "@/const/cdate";
import InputDate from "@/components/common/input/inputDate";
import InputImage from "@/components/common/input/inputImage";

import React from 'react'

function createDonation({ SetData, Data, SetIndex }) {
    console.log(Data)
    const changeData = (key, value) => {
        SetData(old => {
            return {
                ...old,
                [key]: value
            }
        })
    }

    const setValuePictureQR = (value) => {
        SetData(old => {
            return {
                ...old,
                "qrCode": value
            }
        })
    }
    return (
        <>
            <div className="w-full aspect-[379/50]">
                <div className="aspect-[379/127] w-full mb-[20px]">
                    <div className="aspect-[379/27] text-[4.8vw] md:text-[2vw]">
                        Add QR Code
                    </div>
                    <InputImage value={Data.qrCode} SetValue={setValuePictureQR} className="aspect-[379/200] w-full rounded-[3%/10%]" />
                </div>
                <div className="w-full aspect-[379/21] text-[4.8vw] md:text-[1.8vw] font-semibold">
                    Target
                </div>
                <div className="relative w-full aspect-[379/29]">
                    <div className="aspect-[1/1] w-[5%] absolute top-0 bottom-0 my-auto right-[2%]">
                        <Image src={"/icon/pen.svg"} alt={"pen"} fill />
                    </div>
                    <input
                        className="w-full aspect-[379/29] rounded-[2%/25%] pl-[2%] pr-[3%]"
                        placeholder={"Set Expected Target"}
                        value={Data.target}
                        onChange={(e) => changeData("target", e.target.value)}
                    />
                </div>
            </div>
            <div className="w-full aspect-[379/50]">
                <div className="w-full aspect-[379/21] text-[4.8vw] md:text-[1.8vw] font-semibold">
                    Add Additional Bank Account
                </div>
                <div className="relative w-full aspect-[379/29]">
                    <div className="aspect-[1/1] w-[5%] absolute top-0 bottom-0 my-auto right-[2%]">
                        <Image src={"/icon/pen.svg"} alt={"pen"} fill />
                    </div>
                    <input
                        className="w-full aspect-[379/29] rounded-[2%/25%] pl-[2%] pr-[3%]"
                        placeholder={"Set Expected Target"}
                        value={Data.bank}
                        onChange={(e) => changeData("bank", e.target.value)}
                    />
                </div>
            </div>
            <div className="relative w-full aspect-[379/179]">
                <div className="w-full aspect-[379/21] text-[4.8vw] md:text-[1.8vw] font-semibold">
                    Add Message
                </div>
                <div className="w-full aspect-[379/21] text-[3.1vw] md:text-[1.2vw]">
                    Berikan pesan terima kasih kepada donatur
                </div>
                <textarea
                    className="w-full aspect-[379/155] rounded-[2%/5%] pl-[2%] pr-[10%] pt-[1%] flex justify-center"
                    name="myBio"
                    rows="4"
                    cols="50"
                    placeholder="Input pesan"
                    value={Data.pesanTerimaKasih}
                    onChange={(e) => changeData("pesanTerimaKasih", e.target.value)}
                ></textarea>
            </div>

            <div className="aspect-[379/60] w-[100%] flex justify-between text-[4.8vw] md:text-[2vw]">
                <input
                    type="submit"
                    value="Next"
                    className="bg-greenYellow rounded-[4%/10%] w-[48%] aspect-[180/60] active:bg-[lightgreen]"
                />
                <input
                    type="button"
                    onClick={() => { }}
                    value="Discard"
                    className="bg-greydef rounded-[4%/10%] w-[48%] aspect-[180/60] active:bg-[darkgrey]"
                />
            </div>
        </>
    )
}

export default createDonation