import './globals.css'
import React from 'react';
import Head from 'next/head'
import Header from "@/components/header";
import Footer from "@/components/footer";
import ActiveSectionContextProvider from '@/context/active-section-context';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


// Change circle colors
export const metadata = {
  title: 'Parth | Personal Portfolio',
  description: 'Software Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode 
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative h-[500px] pt-28 sm:pt-36`}>

      <div className="bg-[#fbe2e3] absolute top-[-6rem] right-[11rem]' h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
      <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

      <ActiveSectionContextProvider>        
        <Header/>       
        <div className="relative z-10">{children}</div>
        <Footer />
      </ActiveSectionContextProvider>
      </body>
    </html>
  )
}
