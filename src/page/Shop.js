import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ShopComp from '../components/ShopComp'

export default function Home() {
    return (
        <div className='App mt-16'>
            <Header />
            <ShopComp />
            <Footer />
        </div>
    )
}