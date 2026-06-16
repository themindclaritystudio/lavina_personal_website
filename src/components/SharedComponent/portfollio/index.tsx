import React from 'react'
import PortfolioCard from '@/components/SharedComponent/portfollio/Portfolio-card'

const Portfolio = () => {
  return (
    <section id='portfolio' className='dark:bg-darkmode'>
      <div className='text-center lg:px-0 px-8'>
        <div
          className='flex gap-2 items-center justify-center'
          data-aos='fade-right'
          data-aos-delay='200'
          data-aos-duration='1000'
        >
          <span className='w-2 h-2 rounded-full bg-green-500'></span>
          <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
            Gallery
          </span>
        </div>

        <h2
          className='sm:text-4xl text-[28px] leading-tight font-bold text-midnight_text text-center pt-7 pb-4 md:w-4/6 w-full m-auto dark:text-white'
          data-aos='fade-left'
          data-aos-delay='200'
          data-aos-duration='1000'
        >
          Moments, Achievements & Professional Journey
        </h2>

        <div className='pb-14 inline-flex'>
          <p className='text-base font-normal text-grey max-w-2xl dark:text-white/50'>
            Explore highlights from academic engagements, research activities,
            speaking sessions, publications, workshops, mentorship initiatives,
            and key milestones throughout Lavina Pratap Bhambhani's professional journey.
          </p>
        </div>
      </div>

      <PortfolioCard />
    </section>
  )
}

export default Portfolio