import React from 'react'
import { Montserrat } from 'next/font/google'
const montserrat = Montserrat({subsets:["latin"]})

export default function About() {
  return (
    <div className={`about ${montserrat.className}`}>
      <h1>About Us</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi ea repellat distinctio adipisci quam incidunt, veritatis reiciendis maxime molestiae explicabo dignissimos vitae recusandae animi fuga magni dolores nam? Ullam, architecto.
      </p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti nostrum autem impedit aut itaque amet praesentium sed animi quam tempore?</p>
    </div>
  )
}
