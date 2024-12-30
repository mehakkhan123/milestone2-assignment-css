import React from 'react'
import Link from 'next/link'
import { Menu} from 'lucide-react'
import { Sheet, SheetTrigger, SheetContent } from './ui/sheet'
import { Montserrat } from 'next/font/google'
const montserrat = Montserrat({subsets:["latin"]})



export default function Header() {
  return (
    <div className='header-main'>
      <header className={`${montserrat.className}`}>
        <h1>Brandname</h1>
        <ul className='navbar'>
            <li><Link href={"/"}>Home</Link></li>
            <li><Link href={"/courses"}>Courses</Link></li>
            <li><Link href={"/about"}>About</Link></li>
        </ul>
        <div className='button-main'>
        <button className='button1'>Login</button>
        <button className='button2'>JOIN US</button>
        </div>
        <Sheet>
          <SheetTrigger className='sheet-trigger'><Menu/></SheetTrigger>
          <SheetContent className='sheet-content'>
            
          <ul className='sheet-navbar'>
            <li><Link href={"/"}>Home</Link></li>
            <li><Link href={"/courses"}>Courses</Link></li>
            <li><Link href={"/about"}>About</Link></li>
        </ul>
          </SheetContent>
        </Sheet>

    </header>
    </div>
  )
}


