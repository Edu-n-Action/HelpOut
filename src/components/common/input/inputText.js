"use client"
import React from 'react'
import style from "./inputText.module.css"
import Image from 'next/image'
function inputText({ className, SetValue = () => { }, value = undefined, placeholder = "test", email = false, iconLink = undefined }) {
    return (
        <div className={`${style.inputContainer2} bg-white flex flex-row w-full ${className}`}>
            <input type={email ? "email" : "text"} className="outline-none bg-white w-full placeholder-[#2F3A47]/20" placeholder={placeholder}
                onChange={e => SetValue(e.target.value)} value={value}
            >
            </input>
            {iconLink && <Image src={iconLink} width={16} height={16} alt='pen' />}
        </div>
    )
}

export default inputText