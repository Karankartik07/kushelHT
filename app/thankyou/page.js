"use client"
import React from 'react'

import Link from 'next/link'
import "../globals.css"
import Navbar from '../COMMON/Navbar'
import { Footer } from 'flowbite-react'


const Success = () => {
    return (
        <>
        <Navbar/>
        <div className='ser-main'>
            <div className='main_signj'>
                <div className="sign_imk">
                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740460119/tge_w2hpqc.png' alt="tge" />
                    <h2>Thank You</h2>
                    <p>For reaching out! We’ve received your submission and will be in touch soon. Looking forward to connecting!.</p>
                   <Link href="/"><button className="about-btn"><span>Back to Home</span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path></svg></button></Link>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Success
