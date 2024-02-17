import React from 'react'

function donationisLive() {
    return (
        <div className='mt-10'>
            <h1 className='font-bold text-5xl text-center'>
                Donation <br></br>Is Live
            </h1>
            <div className='flex flex-col justify-center w-full items-center'>
                <button
                    className="bg-[#CEFD4A] py-3 w-full z-[10] text-center text-xl mt-9 max-w-[30vw]"
                    href={"/"}
                    type="button"
                >
                    Share
                </button>
                <button
                    className="bg-transparent rounded-lg border-2 border-[#2F3A47]/50 py-3 w-full z-[10] text-center text-xl mt-4 max-w-[30vw]"
                    href={"/"}
                    type="button"
                >
                    Home
                </button>
            </div>

        </div>
    )
}

export default donationisLive