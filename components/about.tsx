"use client";

import { useSectionInView } from '@/lib/hooks';
import SectionHeading from './section-heading'
import { motion } from "framer-motion";


export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section 
        ref={ref}    
        className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
        initial={{opacity: 0, y: 100}}
        animate={{opacity:1, y: 0}}
        transition={{delay:0.175}}
        id='about'
    >
        <SectionHeading>About Me</SectionHeading>
        <p className='mb-3'>
        I have graduated from University of Massachusetts Amherst with a Bachelors in Computer Science in May 2020 and currently looking for my next Software Engineering opportunity. I currently reside in Burlington, MA. I have always been a code geek since high school and I would want nothing more than to further pursue my passion in software developing. If I were to describe myself in 3 words it would be: passionate, ambitious, and organized. I love what I do which happens to be software developing and I have a steady source of motivation that drives me to do my best. In my last job, this passion led me to challenge myself daily and learn new skills that helped me to do better work. I thrive on challenge and constantly set goals for myself, so I have something to strive toward. I’m not comfortable with settling, and I’m always looking for an opportunity to do better and achieve greatness. Last but not least I am highly organized. I always take notes, and I use a series of tools to help myself stay on top of deadlines. I like to keep a clean workspace and create a logical filing method so I’m always able to find what I need. I find this increases efficiency and helps the rest of the team stay on track, too. Thank you for reading a bit about me, if you have any questions or inquiries regarding any opportunities feel free to look through my resume and skill set and get back to me via email or phone.
        </p>
    </motion.section>
  )
}
