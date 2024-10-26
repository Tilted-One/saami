import React from "react";
import { Link } from 'react-router-dom'

export default function Header() {

    return (
        <header className='fixed top-0 left-0 w-full shadow-md z-20 px-10 text-white bg-bgColor' >
            <div className="flex justify-between  h-16 items-center ">
                <nav className="flex justify-between  gap-x-8 ">
                    <Link to="/" className="hover:text-gray-400">Home</Link>
                    <Link to="/shop" className="hover:text-gray-400">Shop</Link>
                    <Link to="/about-us" className="hover:text-gray-400">About </Link>
                </nav>
                <div className="flex gap-x-6">
                    <p>Cart</p>
                </div>
            </div>
        </header>
    )
}