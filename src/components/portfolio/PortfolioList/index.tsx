
'use client'

import React from 'react'
import Image from 'next/image'
import { portfolioinfo } from '@/app/api/data'

const GalleryList = () => {
  return (
    <section
  id="gallery"
  className="bg-section py-28 dark:bg-darklight lg:py-28"
>
      <div className="container mx-auto max-w-7xl px-5">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
            <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
            Gallery
          </span>

          <h2 className="mt-4 text-3xl font-bold text-midnight_text dark:text-white md:text-4xl lg:text-5xl">
            Moments, Events & Achievements
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-grey dark:text-white/60">
            A glimpse into academic engagements, research contributions,
            speaking sessions, workshops, publications, and professional
            milestones.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {portfolioinfo.map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-[320px] group ${item.className"
            >
              <div className="overflow-hidden rounded-2xl shadow-md">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={1200}
                  height={800}
                  className="h-auto w-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* <h4 className="pt-6 text-xl font-bold text-midnight_text transition-colors group-hover:text-primary dark:text-white">
                {item.title}
              </h4>

              <p className="mt-2 text-secondary dark:text-white/60">
                {item.info}
              </p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GalleryList
