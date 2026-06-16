'use client'

import Image from 'next/image'
import { mentorsData } from '@/app/api/data'

const Mentors = () => {
  return (
    <section
      id="mentors"
      className="bg-[#FAF7F2] py-28 lg:py-28 dark:bg-darkmode"
    >
      <div className="container mx-auto max-w-7xl px-5">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-white/60">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Mentors
          </span>

          <h2 className="mt-5 text-3xl font-bold text-[#1F2937] dark:text-white md:text-4xl lg:text-5xl">
            The Champions Who Molded Me Into My Greatest Potential
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600 dark:text-white/60">
            I am grateful to the mentors, educators, researchers, leaders, and
            visionaries who have guided my journey across psychology,
            academia, research, innovation, entrepreneurship, and personal
            growth.
          </p>
        </div>

        {/* Mentors Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {mentorsData.map((mentor) => (
            <div
              key={mentor.id}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl dark:bg-darklight"
              data-aos="fade-up"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={mentor.image}
                  alt={mentor.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="text-2xl font-bold text-[#1F2937] dark:text-white">
                  {mentor.name}
                </h3>

                <p className="mt-2 text-sm font-medium text-primary">
                  {mentor.designation}
                </p>

                <p className="mt-5 line-clamp-6 leading-relaxed text-gray-600 dark:text-white/60">
                  {mentor.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Mentors