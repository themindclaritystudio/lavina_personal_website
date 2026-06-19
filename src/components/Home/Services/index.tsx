
'use client'

import { Icon } from '@iconify/react'
import { useState } from 'react'



const services = [
  {
    icon: 'mdi:brain',
    title: 'Mind Coaching',
    description:
      'Helping individuals strengthen emotional resilience, develop healthy thought patterns, and navigate life’s challenges with confidence.',
    subServices: [
      {
        title: 'Emotional Clarity',
        image: '/images/services/emotional-clarity.png',
        description:
          'Develop greater self-awareness, strengthen emotional intelligence, and navigate life with clarity, balance, and confidence.',
      },
      {
        title: 'Personal Development',
        image: '/images/services/personal-development.jpg',
        description:
          'Discover your strengths, overcome personal barriers, and cultivate the skills needed for meaningful personal and professional growth.',
      },
    ],
  },
  {
    icon: 'mdi:school-outline',
    title: 'Education & Mentorship',
    description:
      'Guidance, mentorship, and learning experiences designed to foster lifelong growth, academic excellence, and professional development.',
    subServices: [
      {
        title: 'Research',
        image: '/images/services/research.png',
        description:
          'Academic research focused on psychology, education, innovation, and evidence-based practices.',
      },
      {
        title: 'Publications',
        image: '/images/services/publications.png',
        description:
          'Books, articles, papers, and scholarly contributions that support learning and professional growth.',
      },
      
    ],
  },
  {
    icon: 'mdi:account-tie-outline',
    title: 'Professional Consultation',
    description:
      'One-on-one coaching and consultation specifically designed for individual personal, academic, and professional growth.',
    subServices: [
      {
        title: '1-on-1 Coaching',
        image: '/images/services/consultation.png',
        description:
          'Personalized coaching sessions tailored to an individual’s goals, challenges, and growth journey.',
      },
    ],
  },
]

const Services = () => {
  const [selectedService, setSelectedService] = useState<any>(null)

  return (
    <section
      className="bg-section py-28 dark:bg-darklight lg:py-28"
      id="services"
    >
      <div className="container mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <div
          className="flex items-center justify-center gap-2"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <span className="h-2 w-2 rounded-full bg-success"></span>
          <span className="text-sm font-medium text-midnight_text dark:text-white/50">
            Services & Expertise
          </span>
        </div>

        <h2
          className="mx-auto max-w-4xl pt-7 pb-6 text-center text-3xl font-bold leading-tight text-midnight_text dark:text-white md:text-4xl lg:text-5xl"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
Helping Individuals Build Emotional Resilience, Clarity & Personal Growth 
        </h2>

        <p
          className="mx-auto mb-16 max-w-3xl text-center text-base leading-relaxed text-grey dark:text-white/60 md:text-lg"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
         Through psychology, education, research, and mentorship,  Lavina Pratap Bhambhani empowers individuals to enhance emotional well-being, develop resilience, deepen self-awareness, and achieve meaningful personal growth through evidence-based guidance. 
        </p>

        {/* Services Grid */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
  {services.map((service, index) => (
    <div
      key={index}
      className="rounded-2xl bg-white p-8 shadow-service transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-darkmode"
    >
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
        <Icon
          icon={service.icon}
          width={28}
          className="text-primary"
        />
      </div>

      <h3 className="mb-4 text-2xl font-bold text-midnight_text dark:text-white">
        {service.title}
      </h3>

      <p className="mb-6 leading-relaxed text-grey dark:text-white/60">
        {service.description}
      </p>

     <button
  onClick={() => setSelectedService(service)}
  className="rounded-lg bg-primary px-5 py-2 text-white transition hover:opacity-90"
>
  Learn More
</button>
    </div>
  ))}
</div>
      </div>
      {selectedService && (
  <div
    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
    onClick={() => setSelectedService(null)}
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-white shadow-2xl dark:bg-darkmode"
    >
      {/* Close Button */}
      <button
        onClick={() => setSelectedService(null)}
        className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/10 text-xl transition hover:bg-black/20"
      >
        ✕
      </button>

      {/* Header */}
      <div className="border-b border-gray-100 p-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
          <Icon
            icon={selectedService.icon}
            width={32}
            className="text-primary"
          />
        </div>

        <h3 className="text-3xl font-bold text-midnight_text dark:text-white">
          {selectedService.title}
        </h3>

        <p className="mt-3 text-grey dark:text-white/60">
          {selectedService.description}
        </p>
      </div>

      {/* Sub Services */}
      <div className="grid gap-8 p-8 md:grid-cols-2">
        {selectedService.subServices.map((item: any, idx: number) => (
          <div
            key={idx}
            className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md dark:bg-darklight"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-56 w-full object-cover"
            />

            <div className="p-6">
              <h4 className="mb-3 text-xl font-bold text-midnight_text dark:text-white">
                {item.title}
              </h4>

              <p className="leading-relaxed text-grey dark:text-white/60">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)}
    </section>
  )
}

export default Services
