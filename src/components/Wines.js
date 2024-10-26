import React from 'react'

import ArrowIcon from '../images/arrow-right.svg'

export default function Wine(props) {
    return (
        <div className={`flex justify-between px-10 mb-40 relative ${props.flexDirection}`}>
            <p className='max-w-[500px] text-2xl capitalize h-full'>{props.paragraph}</p>
            <img className='bg-bgColor w-[500px] h-[600px]' src={props.image}></img>
            <button className={`absolute flex justify-between gap-x-4 text-black py-3 px-6 bg-white text-textColor border-2 rounded-full ${props.buttonDirection}`}>Buy Now
                <img src={ArrowIcon}></img>
            </button>
        </div>
    )
}