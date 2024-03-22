"use client";

import { useSectionInView } from '@/lib/hooks';
import SectionHeading from './section-heading'
import { motion } from "framer-motion";


export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section 
        ref={ref}    
        id='about'
        className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
        initial={{opacity: 0, y: 100}}
        animate={{opacity:1, y: 0}}
        transition={{delay:0.175}}

    >
        <SectionHeading>About Me</SectionHeading>
        <p className='mb-3'>
        I am a University of Massachusetts Amherst graduate with a Bachelors in Computer Science currently pursuing Software Engineering opportunities. I reside in Burlington, MA. As a long-time code geek, I love software development, and have always been motivated to give it my best. This passion pushed me to challenge myself daily and learn new skills to achieve excellence in my work. Additionally, I value organization. Whether I’m taking notes, keeping a clean workspace, or maintaining a logical filing system, my organization increases efficiency for both myself and my team. Thank you for reading a bit about me, if you have any questions or inquiries regarding any opportunities, feel free to look through my resume and get back to me via email or phone.
        </p>
    </motion.section>
  )
}
