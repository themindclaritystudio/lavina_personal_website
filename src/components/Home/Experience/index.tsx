'use client'

import Image from 'next/image'
import { Icon } from '@iconify/react'


const experienceData = [
  
  { 
    year: '2026', 
    title: 'Host & Facilitator, Discover Your Personality', 
    image: '/images/portfolio/15.jpeg', 
    description: 'Hosted the "Discover Your Personality, Transform Your Life" workshop at Hotel Radisson, Gandhidham in partnership with The Mind Clarity Studio, providing structured self-discovery framework loops for local professionals.' 
  }, 
  { 
    year: '2025', 
    title: 'Vice President, BNI Infinity Leadership Team 6.0', 
    image: '/images/experience/22.jpeg', 
    description: 'Appointed as Vice President for the BNI Infinity Leadership Team 6.0, collaborating with executive officers to foster high-impact business relations, expand referral ecosystems, and host regional networking summits at Hotel Radisson.' 
  },
  {
    year: '2024',
    title: 'Startup Demo Day, Mehsana',
    image: '/images/experience/1.png',
    description:
      'Participated in Startup Demo Day hosted by i-Hub Gujarat and the Collector Office, Mehsana, connecting with innovators, mentors, and investors while supporting regional entrepreneurship.',
  },
  {
    year: '2024',
    title: 'Core Team Member – AMRIT Mehsana Startup & Innovation Mission',
    image: '/images/experience/2.png',
    description:
      'Served as a founding team member of the AMRIT Mehsana Startup and Innovation Mission, helping strengthen innovation and entrepreneurship across the district.',
  },
  {
    year: '2024',
    title: 'Startup Meet at Anant University',
    image: '/images/experience/3.png',
    description:
      'Attended Anant University’s startup meet, gaining valuable insights into business growth, consistency, innovation, and entrepreneurial success.',
  },
  {
    year: '2024',
    title: 'MOU Signing with Anant University & ArthX Drones',
    image: '/images/experience/4.png',
    description:
      'Represented ArthX Drones during the signing of an MOU with Anant University, fostering collaboration in innovation, incubation, and drone technology.',
  },
  {
    year: '2024',
    title: 'Defence Startup Ecosystem Meeting',
    image: '/images/experience/5.png',
    description:
      'Contributed to strategic meetings focused on defence startups, innovation, and emerging technologies alongside the i-Hub Gujarat ecosystem.',
  },
  {
    year: '2024',
    title: 'Entrepreneurship Awareness – Government Polytechnic for Girls',
    image: '/images/experience/6.png',
    description:
      'Guided students on entrepreneurship opportunities, startup resources, mentorship programs, and innovation support available through i-Hub Gujarat.',
  },

  {
    year: '2023',
    title: 'Career Guidance Webinar – IIT Bombay E-Cell',
    image: '/images/experience/7.png',
    description:
      'Delivered a career guidance webinar for IIT Bombay E-Cell, helping students make informed career decisions through insights from Career Mentor.',
  },
  {
    year: '2023',
    title: 'Startup Culture in India – School Outreach Program',
    image: '/images/experience/8.png',
    description:
      'Introduced school students to India’s startup culture, encouraging entrepreneurial thinking, innovation, and future leadership.',
  },
  {
    year: '2023',
    title: 'Startup Culture in India – Interactive School Session',
    image: '/images/experience/9.png',
    description:
      'Conducted an interactive session introducing students to startup opportunities, entrepreneurial challenges, and innovation-driven careers.',
  },
  {
    year: '2023',
    title: 'International Student Delegation Host',
    image: '/images/experience/10.png',
    description:
      'Hosted international students on behalf of i-Hub Gujarat, highlighting Indian startup policies, grants, and incubation opportunities.',
  },
  {
    year: '2023',
    title: 'AMRIT Mehsana Startup Mahotsav',
    image: '/images/experience/11.png',
    description:
      'Actively participated in the AMRIT Mehsana Startup Mahotsav, engaging with entrepreneurs and promoting innovation within the startup ecosystem.',
  },
  {
    year: '2023',
    title: 'Oklahoma University Delegation Visit',
    image: '/images/experience/12.png',
    description:
      'Participated in hosting representatives from Oklahoma University, USA, fostering international collaboration and knowledge exchange.',
  },
  {
    year: '2023',
    title: 'Team Mehsana Explores Startup Ecosystem at i-Hub Ahmedabad',
    image: '/images/experience/13.png',
    description:
      'Explored startup ecosystems and innovation practices at i-Hub Ahmedabad, gaining exposure to incubation and entrepreneurship initiatives.',
  },
  {
    year: '2023',
    title: 'Startup Ecosystem Session – Government Polytechnic',
    image: '/images/experience/14.png',
    description:
      'Delivered a session on entrepreneurship, startup opportunities, innovation pathways, and government support schemes for students.',
  },
  {
    year: '2023',
    title: 'Recognized as Startup Mitra',
    image: '/images/experience/15.png',
    description:
      'Honored as “Startup Mitra” by M. Nagarajan IAS for contributions toward entrepreneurship, innovation, and startup development in Mehsana.',
  },
  {
    year: '2023',
    title: 'Entrepreneurship Session – Swaminarayan University',
    image: '/images/experience/16.png',
    description:
      'Conducted a motivational session encouraging students to explore entrepreneurship, innovation, and leadership beyond traditional careers.',
  },
  {
    year: '2023',
    title: 'Proud Students of Swaminarayan University',
    image: '/images/experience/17.png',
    description:
      'Memorable interaction with enthusiastic students following an inspiring entrepreneurship session focused on innovation and leadership.',
  },

  {
    year: '2022-Present',
    title: 'PhD Scholar & Researcher',
    image: '/images/experience/18.png',
    description:
      'Pursuing doctoral research while collaborating with scholars and faculty, contributing to academic excellence and interdisciplinary learning.',
  },
  {
    year: '2022-2024',
    title: 'Host of 75+ Webinar Series',
    image: '/images/experience/19.png',
    description:
      'Successfully hosted over 75 webinars under the AMRIT Mehsana Startup and Innovation Mission, empowering entrepreneurs through expert-led learning.',
  },
  {
    year: 'Early Career',
    title: 'Internship – Central Institute of Psychiatry',
    image: '/images/experience/20.png',
    description:
      'Gained practical experience in psychological assessments, mental health interventions, clinical observation, and psychiatric care.',
  },
  {
    year: 'Academic Foundation',
    title: 'Assistant Professor – Parul University',
    image: '/images/experience/21.png',
    description:
      'Began an academic career at Parul University, mentoring students, teaching psychology, and developing a strong foundation in education and research.',
  },
]



const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-[#FAF7F2] py-28 lg:py-28 dark:bg-darkmode"
    >
      <div className="container mx-auto max-w-6xl px-5">
        {/* Heading */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-white/60">
            <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
            Experience & Achievements
          </span>

          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold text-[#1F2937] dark:text-white md:text-4xl lg:text-5xl">
            A Journey of Learning, Growth & Impact
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600 dark:text-white/60">
            Through psychology, education, research, mentorship, and writing,
            Lavina Pratap Bhambhani continues to empower individuals and
            contribute meaningfully to personal and academic development.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-20">
          <div className="absolute left-4 top-0 hidden h-full w-1 bg-gray-300 lg:left-1/2 lg:block lg:-translate-x-1/2" />

          <div className="space-y-12 lg:space-y-16">
            {experienceData.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col ${
                  index % 2 === 0
                    ? 'lg:flex-row'
                    : 'lg:flex-row-reverse'
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Card */}
                <div className="lg:w-1/2 lg:px-12">
  <div className="rounded-3xl bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl dark:bg-darklight">

   <div className="flex flex-col gap-6 md:flex-row md:items-center">

      {/* Image */}
     <div className="relative h-52 w-full overflow-hidden rounded-2xl sm:h-40 sm:w-40 lg:h-44 lg:w-44 shrink-0">
  <Image
    src={item.image}
    alt={item.title}
    fill
    sizes="(max-width: 640px) 100vw, 176px"
    className="object-cover object-center transition-transform duration-700 hover:scale-105"
  />
</div>

      {/* Content */}
      <div className="flex-1">
        <span className="inline-block rounded-full bg-green-100 px-4 py-1 text-sm font-medium text-green-700">
          {item.year}
        </span>

        <h3 className="mt-3 text-xl font-bold text-[#1F2937] dark:text-white">
          {item.title}
        </h3>

        <p className="mt-3 leading-relaxed text-gray-600 dark:text-white/60">
          {item.description}
        </p>
      </div>

    </div>

  </div>
</div>

                {/* Timeline Icon */}
                <div className="absolute left-0 top-8 hidden lg:left-1/2 lg:flex lg:-translate-x-1/2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg">
                    <Icon
                      icon="mdi:star-four-points"
                      className="text-xl"
                    />
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