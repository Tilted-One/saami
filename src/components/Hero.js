import React from 'react'

import ArrowIcon from '../images/arrow-right.svg'

export default function Hero() {
    return (
        <div className="relative h-dvh flex items-center justify-center z-10 text-white p-10 bg-bgColor" >
            <h1 className='absolute top-1/2 transform -translate-y-1/2 z-10 text-6xl leading-normal font-bold w-96 text-white'>Where Every Bottle Tells a Story</h1>
            <div className='w-48 h-96 bg-gold absolute top-1/2 transform -translate-y-1/2 z-0'></div>
            <p className="absolute bottom-10 left-10 w-96 text-left">Uncork the World with Viney and Embark on an Unforgettable Journey Through the Finest and Most Exceptional Wines from Every Corner of the Globe.</p>
            <button className="absolute flex justify-between gap-x-4 bottom-10 right-10 text-black py-3 px-6 bg-white text-textColor  rounded-full">Shop Now
                <img src={ArrowIcon}></img>
            </button>
        </div>
    )
}