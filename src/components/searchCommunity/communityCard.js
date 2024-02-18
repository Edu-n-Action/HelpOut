import React from 'react'

function communityCard() {
    return (
        <div className='w-full p-3 flex-col items-start bg-blue-300 rounded-[2.5%/4%]'>
            <div className='w-full relative'>
                <div className='w-full p-3 absolute h-16 bg-greydef rounded-[5px]'>

                </div>
            </div>


            <div className='relative z-[99] mb-[40px] mt-[40px]  md:mt-[10%] ml-[5px]'>
                <div className='rounded-[50%] aspect-[1/1] w-[50px] border-2 border-greyprime bg-greydef'>

                </div>
                <h2 className='text-lg font-semibold mt-2'>
                    Komunitas Marginal
                </h2>
            </div>
        </div>
    )
}

export default communityCard