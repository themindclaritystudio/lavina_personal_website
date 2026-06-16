'use client'

import Image from 'next/image'
import { Icon } from '@iconify/react'

const experienceData = [
  {
    year: '2024',
    title: 'Startup Demo Day, Mehsana',
    image: '/images/experience/1.png',
    description:
      'Participated in Startup Demo Day hosted by i-Hub Gujarat and the Collector Office, Mehsana, providing a platform for startups to showcase innovations, connect with investors, and strengthen the regional entrepreneurial ecosystem.',
  },
  {
    year: '2024',
    title: 'Core Team Member – AMRIT Mehsana Startup & Innovation Mission',
    image: '/images/experience/2.png',
    description:
      'Served as a founding team member of the AMRIT Mehsana Startup and Innovation Mission, contributing to the development of a vibrant startup ecosystem and supporting innovation-driven entrepreneurship across the district.',
  },
  {
    year: '2024',
    title: 'Startup Meet at Anant University',
    image: '/images/experience/3.png',
    description:
      'Participated in an entrepreneurial startup meet organized by Anant University, gaining valuable insights into business growth, consistency, innovation, and long-term startup success.',
  },
  {
    year: '2024',
    title: 'MOU Signing with Anant University & ArthX Drones',
    image: '/images/experience/4.png',
    description:
      'Represented ArthX Drones Pvt. Ltd. during the signing of an MOU with Anant University, strengthening collaboration in innovation, incubation, and emerging drone technologies.',
  },
  {
    year: '2024',
    title: 'Defence Startup Ecosystem Meeting',
    image: '/images/experience/5.png',
    description:
      'Worked alongside i-Hub Gujarat pioneers to host strategic meetings focused on defence startups, innovation, and technology-driven entrepreneurship.',
  },
  {
    year: '2024',
    title: 'Entrepreneurship Awareness – Government Polytechnic for Girls',
    image: '/images/experience/6.png',
    description:
      'Delivered sessions introducing students to startup opportunities, innovation ecosystems, mentorship support, and resources available through i-Hub Gujarat.',
  },
  {
    year: '2023',
    title: 'Career Guidance Webinar – IIT Bombay E-Cell',
    image: '/images/experience/7.png',
    description:
      'Invited by IIT Bombay E-Cell to conduct a webinar on career planning and decision-making, drawing insights from the internationally recognized book "Career Mentor".',
  },
  {
    year: '2023',
    title: 'Startup Culture in India – School Outreach Program',
    image: '/images/experience/8.png',
    description:
      'Hosted interactive sessions for school students, introducing entrepreneurial thinking, startup culture, innovation, and future opportunities in India’s startup ecosystem.',
  },
  {
    year: '2023',
    title: 'International Student Delegation Host',
    image: '/images/experience/9.png',
    description:
      'Represented i-Hub Gujarat while hosting international students and introducing them to Indian startup policies, grants, incubation opportunities, and entrepreneurship support systems.',
  },
  {
    year: '2023',
    title: 'AMRIT Mehsana Startup Mahotsav',
    image: '/images/experience/10.png',
    description:
      'Actively contributed to the AMRIT Mehsana Startup Mahotsav, engaging with entrepreneurs, innovators, and ecosystem stakeholders to promote startup growth.',
  },
  {
    year: '2023',
    title: 'Oklahoma University Delegation Visit',
    image: '/images/experience/11.png',
    description:
      'Participated in hosting representatives from Oklahoma University, USA, facilitating knowledge exchange and strengthening international academic and entrepreneurial connections.',
  },
  {
    year: '2023',
    title: 'Startup Ecosystem Session – Government Polytechnic',
    image: '/images/experience/12.png',
    description:
      'Delivered an in-depth session on entrepreneurship, startup opportunities, government schemes, and innovation pathways for aspiring young entrepreneurs.',
  },
  {
    year: '2023',
    title: 'Recognized as Startup Mitra',
    image: '/images/experience/13.png',
    description:
      'Felicitated as “Startup Mitra” by M. Nagarajan IAS, District Collector of Mehsana, for contributions toward fostering entrepreneurship and innovation in the region.',
  },
  {
    year: '2023',
    title: 'Entrepreneurship Session – Swaminarayan University',
    image: '/images/experience/14.png',
    description:
      'Conducted motivational sessions encouraging students to explore entrepreneurship, innovation, and leadership beyond conventional career paths.',
  },
  {
    year: '2022-Present',
    title: 'PhD Scholar & Researcher',
    image: '/images/experience/15.png',
    description:
      'Pursuing doctoral research while collaborating with scholars and faculty, contributing to academic inquiry, research excellence, and interdisciplinary learning.',
  },
  {
    year: '2022-2024',
    title: 'Host of 75+ Webinar Series',
    image: '/images/experience/16.png',
    description:
      'Successfully hosted over 75 webinars under the AMRIT Mehsana Startup and Innovation Mission, empowering entrepreneurs through expert-led learning and networking opportunities.',
  },
  {
    year: 'Early Career',
    title: 'Internship – Central Institute of Psychiatry',
    image: '/images/experience/17.png',
    description:
      'Gained hands-on clinical exposure in psychological assessments, mental health interventions, research activities, and psychiatric care practices.',
  },
  {
    year: 'Academic Foundation',
    title: 'Assistant Professor – Parul University',
    image: '/images/experience/18.png',
    description:
      'Started an academic career as Assistant Professor at Parul University, mentoring students, teaching psychology, and developing a passion for education and research.',
  },
]

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-[#FAF7F2] py-20 lg:py-28 dark:bg-darkmode"
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