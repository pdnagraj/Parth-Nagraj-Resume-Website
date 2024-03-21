"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { useSectionInView } from "@/lib/hooks";

export default function Contact() {
  const { ref } = useSectionInView('Contact');

  return (
    <section ref={ref} id="contact" className='justify-center mb-20 sm:mb-28 w-[min(100%,38rem)]'>
      <SectionHeading>Contact Me</SectionHeading>
      <p className='text-gray-700 flex items-center justify-center'>
        Please contact me directly at&nbsp;          
        <a className='underline' href='mailto:parth.d.nagraj@gmail.com'>parth.d.nagraj@gmail.com</a>
      </p>
    </section>
  )
}
