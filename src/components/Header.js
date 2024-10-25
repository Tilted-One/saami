import React from "react";

import Cart from '../images/shop-add.svg'

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full shadow-md z-10 text-white px-10 bg-bgColor">
            <div className="flex justify-between  h-16 items-center ">
                <nav className="flex justify-between  gap-x-8 ">
                    <p>Home</p>
                    <p>Shop</p>
                    <p>About Us</p>
                </nav>
                <div className="flex gap-x-6">
                    <p>Cart</p>
                    <img src={Cart}></img>
                </div>
            </div>
        </header>
    )
}