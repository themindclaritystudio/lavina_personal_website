import React from 'react'
import { count } from '@/app/api/data'
import { Icon } from '@iconify/react'

const Counter = ({ isColorMode }: { isColorMode: Boolean }) => {
  return (
    <section
      className={`py-16 ${
        isColorMode
          ? 'dark:bg-darklight bg-section'
          : 'dark:bg-darkmode bg-white'
      }`}>
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='flex flex-wrap items-stretch md:justify-between justify-center md:gap-0 gap-9'>
          {count.map((item, index) => (
            <div
              key={index}
              className='flex flex-col items-center gap-[0.875rem] max-w-[20rem] w-full'
              data-aos='fade-up'
              data-aos-delay={`${index * 200}`}
              data-aos-duration='1000'>
              
              {/* Animated Icon Container */}
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/5 border border-primary/10">
                <Icon
                  icon={item.icon}
                  className="text-primary"
                  width={30}
                  height={30}
                />
              </div>

              {/* Stat Value */}
              <span className='text-5xl font-semibold text-midnight_text dark:text-white'>
                {item.value}
              </span>

              {/* New Stat Title */}
              <h3 className='text-lg font-bold text-midnight_text dark:text-white text-center mt-1'>
                {item.title}
              </h3>

              {/* Stat Description */}
              <p className='text-base text-grey text-center w-full dark:text-white/50 leading-relaxed'>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Counter