import Image from 'next/image';
import React from 'react';
import { Montserrat } from 'next/font/google'
const montserrat = Montserrat({subsets:["latin"]})



export default function Courses() {
  return (
    <div className={`${montserrat.className} courses`}>
      <h1>Courses</h1>
      <div className='images'>
        <Image
          src={'/images/graphic-design.png'}
          alt='graphics designing'
          width={600} 
          height={600} 
          className='image' 
        />
        <Image
          src={'/images/office.png'}
          alt='ms office'
          width={600} 
          height={600} 
          className='image' 
        />
        <Image
          src={'/images/webdesigning.png'}
          alt='Web designing'
          width={600} 
          height={600} 
          className='image'  
        />
        <Image
          src={'/images/freelancing.png'}
          alt='freelancing'
          width={600} 
          height={600} 
          className='image'  
        />
        <Image
          src={'/images/english.jpg'}
          alt='english language'
          width={600} 
          height={600} 
          className='image'  
        />
      </div>
    </div>
  );
}
