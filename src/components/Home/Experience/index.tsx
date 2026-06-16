
'use client'

import { Icon } from '@iconify/react'

const experienceData = [
  {
    year: 'Present',
    title: 'Psychologist & Mind Coach',
    description:
      'Guiding individuals toward emotional resilience, self-awareness, and personal transformation through coaching and psychological practices.',
  },
  {
    year: 'Academic Career',
    title: 'Assistant Professor & Educator',
    description:
      'Dedicated to teaching, mentoring, and inspiring students while contributing to academic excellence and lifelong learning.',
  },
  {
    year: 'Research',
    title: 'Researcher & Thought Leader',
    description:
      'Actively engaged in research initiatives that explore psychology, human behavior, and personal development.',
  },
  {
    year: 'Publications',
    title: 'International Author',
    description:
      'Author of publications focused on personal growth, mental well-being, and transformative learning experiences.',
  },
]

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-[#FAF7F2] py-20 lg:py-28"
    >
      <div className="container mx-auto max-w-6xl px-5">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-600">
            <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
            Experience & Achievements
          </span>

          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold text-[#1F2937] md:text-4xl lg:text-5xl">
            A Journey of Learning, Growth &
            Impact
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600">
            Through psychology, education, research, and mentorship,
            Lavina Pratap Bhambhani has dedicated her career to empowering individuals
            and fostering meaningful transformation.
          </p>
        </div>

        <div className="relative mt-20">
          <div className="absolute left-4 top-0 h-full w-1 bg-green-200 lg:left-1/2 lg:-translate-x-1/2" />

          <div className="space-y-12">
            {experienceData.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col lg:flex-row ${
                  index % 2 === 0
                    ? 'lg:flex-row'
                    : 'lg:flex-row-reverse'
                }`}
              >
                <div className="lg:w-1/2 lg:px-12">
                  <div className="rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <span className="inline-block rounded-full bg-green-100 px-4 py-1 text-sm font-medium text-gray-600">
                      {item.year}
                    </span>

                    <h3 className="mt-4 text-2xl font-bold text-[#1F2937]">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-relaxed text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="absolute left-0 top-8 lg:left-1/2 lg:-translate-x-1/2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-white shadow-lg">
                    <Icon icon="mdi:star-four-points" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
