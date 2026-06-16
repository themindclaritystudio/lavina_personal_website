import React from 'react'
import { Metadata } from "next";
import Hero from '@/components/Home/Hero';
import Counter from '@/components/Home/Counter'
import Progresswork from '@/components/Home/WorkProgress';
import Services from '@/components/Home/Services';
import Portfolio from '@/components/SharedComponent/portfollio'
import Testimonial from '@/components/SharedComponent/Testimonial'
import Blog from '@/components/SharedComponent/Blog'
import Experience from '@/components/Home/Experience'
import Contactform from '@/components/Home/Contact';
export const metadata: Metadata = {
<<<<<<< HEAD
  title: "Venus",
=======
  title: "Lavina Pratap Bhambhani",
>>>>>>> faabffe153b159d74b76e869432523adeb5bc3ab
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Counter isColorMode={false} />
      <Progresswork isColorMode={false} />
<<<<<<< HEAD
      <Services />
      <Portfolio />
=======
      <Portfolio />
      <Services />
      
>>>>>>> faabffe153b159d74b76e869432523adeb5bc3ab
      {/* <Testimonial />
      <Blog /> */}
      <Experience />
      {/* <Contactform /> */}
    </main>
  )
}
