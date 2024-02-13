"use client";
import React from "react";
import dateData from "@/const/cdate";

function InputDate({ SetValue = () => {}, value = [0, 0, 0] }) {
  return (
    <div className="flex flex-row justify-between aspect-[379/60] w-[100%]">
      <div className="flex flex-col aspect-[120/60] w-[32%]">
        <div className="aspect-[120/27] w-[100%] text-[3.7vw] md:text-[1.5vw]">
          Day
        </div>
        <select
          className="aspect-[120/35] w-[100%] text-[4.2vw] md:text-[1.2vw] bg-greydef rounded-[4%/10%]"
          onChange={(e) => SetValue([e.target.value, value[1], value[2]])}
        >
          <option selected>hari</option>
          {dateData.day.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
      <div className="flex flex-col aspect-[120/60] w-[32%]">
        <div className="aspect-[120/27] w-[100%] text-[3.7vw] md:text-[1.5vw]">
          Month
        </div>
        <select
          className="aspect-[120/35] w-[100%] text-[4.2vw] md:text-[1.2vw] bg-greydef rounded-[4%/10%]"
          onChange={(e) => SetValue([value[0], e.target.value, value[2]])}
          value={value}
        >
          <option selected>bulan</option>
          {dateData.month.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
      <div className="flex flex-col aspect-[120/60] w-[32%]">
        <div className="aspect-[120/27] w-[100%] text-[3.7vw] md:text-[1.5vw]">
          Year
        </div>
        <select
          className="aspect-[120/35] w-[100%] text-[4.2vw] md:text-[1.2vw] bg-greydef rounded-[4%/10%]"
          onChange={(e) => SetValue([value[0], value[1], e.target.value])}
        >
          <option selected>tahun</option>
          {dateData.year.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default InputDate;
