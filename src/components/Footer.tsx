import React from 'react'
import Link from 'next/link'
import { Montserrat } from 'next/font/google'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const montserrat = Montserrat({subsets:["latin"]})


export default function Footer() {
  return (
    <footer className={`footer-main ${montserrat.className}`}>
      <div className='footer-top'>
        <div className='footer'>
        <hr />
          <h5 className='footer-heading'>Company Info</h5>
          <Link href={""}><h5 className='sub-heading'>About Us</h5></Link>
          <Link href={""}><h5 className='sub-heading'>Career</h5></Link>
          <Link href={""}><h5 className='sub-heading'>We are hiring</h5></Link>
          <Link href={""}><h5 className='sub-heading'>Blog</h5></Link>
          <hr/>
        </div>
        

        <div className='footer'>
        <hr/>
          <h5 className='footer-heading'>Legal</h5>
          <Link href={""}><h5 className='sub-heading'>About Us</h5></Link>
          <Link href={""}><h5 className='sub-heading'>Career</h5></Link>
          <Link href={""}><h5 className='sub-heading'>We are hiring</h5></Link>
          <Link href={""}><h5 className='sub-heading'>Blog</h5></Link>
          <hr />
        </div>

        <div className='footer'>
        <hr />
          <h5 className='footer-heading'>Features</h5>
          <Link href={""}><h5 className='sub-heading'>Business Marketing</h5></Link>
          <Link href={""}><h5 className='sub-heading'>User Analytic</h5></Link>
          <Link href={""}><h5 className='sub-heading'>Live Chat</h5></Link>
          <Link href={""}><h5 className='sub-heading'>Unlimited Support</h5></Link>
          <hr/>
        </div>

        <div className='footer'>
        <hr/>
          <h5 className='footer-heading'>Resources</h5>
          <Link href={""}><h5 className='sub-heading'>IOS & Android</h5></Link>
          <Link href={""}><h5 className='sub-heading'>Watch a Demo</h5></Link>
          <Link href={""}><h5 className='sub-heading'>Customers</h5></Link>
          <Link href={""}><h5 className='sub-heading'>API</h5></Link>
          <hr />
        </div>


      </div>

      <div className='footer-bottom'>
        <div className='bottom-left'>
          <h5>Made With Love By Mehak Khan All Right Reserved</h5>
          <div className='bottom-right'>
          <Link href={"https://www.facebook.com"} target='_blank'><FaFacebook /></Link>
          <Link href={"https://www.instagram.com"} target='_blank'><FaInstagram /></Link>
          <Link href={"https://www.twitter.com"} target='_blank'><FaTwitter /></Link>
          </div>
        </div>

</div>

    </footer>
  )
}
