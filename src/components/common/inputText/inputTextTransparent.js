"use client"
import React from 'react'
import style from "./inputText.module.css"
import Image from 'next/image'
function inputTextTransparent({className, SetValue=() => {}, value=undefined, placeholder="test", email=false}) {
    return (
        <div className={`${style.inputContainer} flex flex-row w-full ${className}`}>
            <input type={email ? "email" : "text"} className="outline-none bg-transparent w-full placeholder-[#2F3A47]/20" placeholder={placeholder}
                onChange={e => SetValue(e.target.value)} value={value}
            >
            </input>
            <Image src={"/icon/pen.svg"} width={16} height={16} alt='pen'/>
        </div>
    )
}

export default inputTextTransparent