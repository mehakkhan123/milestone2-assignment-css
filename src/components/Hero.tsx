import React from 'react'
import Image from 'next/image'
import { Montserrat } from 'next/font/google'
const montserrat = Montserrat({subsets:["latin"]})

export default function Hero() {
  return (
    <div className={`${montserrat.className} hero-main`}>
        <div className='hero'>
            {/* left */}
            <div className='hero-left'>
                <h5>Welcome</h5>
                <h1>Best Learning Opportunities</h1>
                <h4>Our goal is to make online education work for everyone</h4>
                <div className='hero-button'>
        <button className='hero-button1'>Join Us</button>
        <button className='hero-button2'>Learn More</button>
        </div>
            </div>
            {/* right */}
            <div>
                <Image src={"/images/hero-image.png"} alt='hero-image' width={704} height={682}/>

            </div>
        </div>
    </div>
  )
}



